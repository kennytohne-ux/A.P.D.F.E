import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback
} from 'react';
import { createClient } from '@supabase/supabase-js';
import {
  NewsUpdate,
  GalleryItem,
  Project,
  Volunteer,
  Donation,
  User,
  Expense,
  AppEvent
} from '../types';

/* ───────────────────────────
   Supabase (DATA ONLY — NO AUTH)
─────────────────────────── */

const SUPABASE_URL = 'https://mzxyyrtafthhdreqnvak.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_YrkPUfGhRfSQTlu2SVCPyg_qEJVRIFo';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false
  }
});

/* ───────────────────────────
   Context Types
─────────────────────────── */

interface MockDataContextType {
  news: NewsUpdate[];
  gallery: GalleryItem[];
  projects: Project[];
  volunteers: Volunteer[];
  donations: Donation[];
  expenses: Expense[];
  helpers: User[];
  events: AppEvent[];
  currentUser: User | null;
  isLoading: boolean;
  isDbHealthy: boolean;

  login: (user: User) => void;
  logout: () => void;

  addNews: (item: NewsUpdate) => void;
  addProject: (item: Project) => void;
  updateProject: (id: string, updates: Partial<Project>) => void;
  addImage: (item: GalleryItem) => void;
  addDonation: (item: Donation) => void;
  addExpense: (item: Expense) => void;
  addVolunteer: (item: Volunteer) => void;
  addEvent: (item: AppEvent) => void;

  updateUser: (id: string, updates: Partial<User>) => void;
  updateCurrentProfile: (updates: Partial<User>) => void;
  registerStaff: (
    name: string,
    email: string,
    role: 'admin' | 'helper'
  ) => void;

  resetDatabase: () => void;
  getAggregates: () => {
    totalRevenue: number;
    totalExpenses: number;
    activeBeneficiaries: string;
    volunteerCount: number;
    projectCount: number;
    revenueHistory: { month: string; amount: number }[];
  };
}

const MockDataContext = createContext<MockDataContextType | undefined>(
  undefined
);

/* ───────────────────────────
   Provider
─────────────────────────── */

export const MockDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [news, setNews] = useState<NewsUpdate[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [helpers, setHelpers] = useState<User[]>([]);
  const [events, setEvents] = useState<AppEvent[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDbHealthy, setIsDbHealthy] = useState(true);

  /* ───────────────────────────
     Database Sync Helper
  ─────────────────────────── */

  const syncRecord = async (table: string, record: any) => {
    try {
      const { error } = await supabase.from(table).upsert(record);
      if (error) {
        console.error(`[DB:${table}]`, error.message);
        setIsDbHealthy(false);
      }
    } catch (err) {
      console.error(`[DB:FATAL:${table}]`, err);
      setIsDbHealthy(false);
    }
  };

  /* ───────────────────────────
     Fetch All Data
  ─────────────────────────── */

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const results = await Promise.all([
        supabase.from('helpers').select('*'),
        supabase.from('news').select('*'),
        supabase.from('projects').select('*'),
        supabase.from('donations').select('*'),
        supabase.from('expenses').select('*'),
        supabase.from('volunteers').select('*'),
        supabase.from('gallery').select('*'),
        supabase.from('events').select('*')
      ]);

      const [
        { data: h },
        { data: n },
        { data: p },
        { data: d },
        { data: e },
        { data: v },
        { data: g },
        { data: ev }
      ] = results;

      if (h)
        setHelpers(
          h.map((x: any) => ({
            id: x.id,
            name: x.name,
            email: x.email,
            role: x.role,
            isValidated: x.is_validated,
            profilePicture: x.profile_picture
          }))
        );

      if (n) setNews(n);
      if (d) setDonations(d);
      if (e) setExpenses(e);
      if (g) setGallery(g);

      if (p)
        setProjects(
          p.map((x: any) => ({
            ...x,
            completedItems: x.completed_items || [],
            missingItems: x.missing_items || []
          }))
        );

      if (v)
        setVolunteers(
          v.map((x: any) => ({
            id: x.id,
            firstName: x.first_name,
            lastName: x.last_name,
            email: x.email,
            country: x.country,
            interests: x.interests || []
          }))
        );

      if (ev)
        setEvents(
          ev.map((x: any) => ({
            id: x.id,
            title: x.title,
            date: x.date,
            startTime: x.start_time,
            endTime: x.end_time,
            location: x.location,
            description: x.description,
            type: x.type
          }))
        );
    } catch {
      setIsDbHealthy(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /* ───────────────────────────
     Session Restore
  ─────────────────────────── */

  useEffect(() => {
    const session = localStorage.getItem('APDFE_SESSION');
    if (session) setCurrentUser(JSON.parse(session));
    fetchData();
  }, [fetchData]);

  /* ───────────────────────────
     Auth (NO OTP)
  ─────────────────────────── */

  const login = (user: User) => {
    if (!user.isValidated) return;
    setCurrentUser(user);
    localStorage.setItem('APDFE_SESSION', JSON.stringify(user));
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('APDFE_SESSION');
  };

  /* ───────────────────────────
     CRUD & Utilities
  ─────────────────────────── */

  const registerStaff = (
    name: string,
    email: string,
    role: 'admin' | 'helper'
  ) => {
    const u: User = {
      id: `u-${Date.now()}`,
      name,
      email: email.toLowerCase(),
      role,
      isValidated: true
    };

    setHelpers(p => [...p, u]);
    syncRecord('helpers', {
      id: u.id,
      name: u.name,
      email: u.email,
      role: u.role,
      is_validated: true
    });
  };

  const updateUser = (id: string, updates: Partial<User>) => {
    setHelpers(p => p.map(u => (u.id === id ? { ...u, ...updates } : u)));

    if (currentUser?.id === id) {
      const updated = { ...currentUser, ...updates };
      setCurrentUser(updated);
      localStorage.setItem('APDFE_SESSION', JSON.stringify(updated));
    }
  };

  const updateCurrentProfile = (u: Partial<User>) =>
    currentUser && updateUser(currentUser.id, u);

  const resetDatabase = () => {
    localStorage.clear();
    window.location.reload();
  };

  /* ─────────────────────────── */

  return (
    <MockDataContext.Provider
      value={{
        news,
        gallery,
        projects,
        volunteers,
        donations,
        expenses,
        helpers,
        events,
        currentUser,
        isLoading,
        isDbHealthy,
        login,
        logout,
        registerStaff,
        updateUser,
        updateCurrentProfile,
        resetDatabase,
        getAggregates: () => ({
          totalRevenue: 0,
          totalExpenses: 0,
          activeBeneficiaries: '0+',
          volunteerCount: volunteers.length,
          projectCount: projects.length,
          revenueHistory: []
        })
      }}
    >
      {children}
    </MockDataContext.Provider>
  );
};

export const useData = () => {
  const ctx = useContext(MockDataContext);
  if (!ctx) throw new Error('useData must be used inside provider');
  return ctx;
};
