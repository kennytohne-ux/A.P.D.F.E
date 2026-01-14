
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { createClient } from '@supabase/supabase-js';
import { NewsUpdate, GalleryItem, Project, Volunteer, Donation, User, Expense, AppEvent } from '../types';

const SUPABASE_URL = 'https://mzxyyrtafthhdreqnvak.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_YrkPUfGhRfSQTlu2SVCPyg_qEJVRIFo';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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
  registerStaff: (name: string, email: string, role: 'admin' | 'helper') => void;
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

const MockDataContext = createContext<MockDataContextType | undefined>(undefined);

export const MockDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

  const syncRecord = async (table: string, record: any) => {
    try {
      const { error } = await supabase.from(table).upsert(record);
      if (error) {
        console.error(`Sync error [${table}]:`, error.message);
        if (error.code === '42P01' || error.message.includes('schema cache')) {
          setIsDbHealthy(false);
        }
      }
    } catch (err) {
      console.error(`Fatal sync error [${table}]:`, err);
    }
  };

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Set a timeout to prevent infinite loading if Supabase is slow or failing
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Database timeout')), 5000)
      );

      const fetchPromise = Promise.all([
        supabase.from('helpers').select('*'),
        supabase.from('news').select('*'),
        supabase.from('projects').select('*'),
        supabase.from('donations').select('*'),
        supabase.from('expenses').select('*'),
        supabase.from('volunteers').select('*'),
        supabase.from('gallery').select('*'),
        supabase.from('events').select('*')
      ]);

      const results: any = await Promise.race([fetchPromise, timeoutPromise]);
      const [
        { data: hData },
        { data: nData },
        { data: pData },
        { data: dData },
        { data: eData },
        { data: vData },
        { data: gData },
        { data: evData }
      ] = results;

      if (hData) {
        setHelpers(hData.map((h: any) => ({
          id: h.id,
          name: h.name,
          email: h.email,
          role: h.role,
          isValidated: h.is_validated,
          profilePicture: h.profile_picture
        })));
      } else {
        seedHelpers();
      }

      if (nData) setNews(nData);
      
      if (pData) {
        setProjects(pData.map((p: any) => ({
          ...p,
          completedItems: Array.isArray(p.completed_items) ? p.completed_items : [],
          missingItems: Array.isArray(p.missing_items) ? p.missing_items : []
        })));
      }

      if (dData) setDonations(dData);
      if (eData) setExpenses(eData);
      
      if (vData) {
        setVolunteers(vData.map((v: any) => ({
          id: v.id,
          firstName: v.first_name,
          lastName: v.last_name,
          email: v.email,
          country: v.country,
          interests: Array.isArray(v.interests) ? v.interests : []
        })));
      }

      if (gData) setGallery(gData);

      if (evData) {
        setEvents(evData.map((e: any) => ({
          id: e.id,
          title: e.title,
          date: e.date,
          startTime: e.start_time,
          endTime: e.end_time,
          location: e.location,
          description: e.description,
          type: e.type
        })));
      }

    } catch (err) {
      console.error("Database error or timeout, falling back to cached/empty data.");
      setIsDbHealthy(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const seedHelpers = async () => {
    const root: User = { 
      id: 'admin-root', 
      name: 'Kenny Tohne', 
      email: 'kennytohne@gmail.com', 
      role: 'admin', 
      isValidated: true 
    };
    setHelpers([root]);
    await syncRecord('helpers', {
      id: root.id,
      name: root.name,
      email: root.email,
      role: root.role,
      is_validated: root.isValidated
    });
  };

  useEffect(() => {
    const session = localStorage.getItem('APDFE_SESSION');
    if (session) {
      try { setCurrentUser(JSON.parse(session)); } catch (e) { localStorage.removeItem('APDFE_SESSION'); }
    }
    fetchData();
  }, [fetchData]);

  const login = (user: User) => {
    // Basic verification of role and status
    if (!user.isValidated) {
      console.error("Login failed: User not validated.");
      return;
    }
    setCurrentUser(user);
    localStorage.setItem('APDFE_SESSION', JSON.stringify(user));
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('APDFE_SESSION');
  };

  const getAggregates = () => {
    const totalRev = donations.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);
    const totalExp = expenses.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);
    const benCount = projects.reduce((acc, p) => acc + (parseInt(p.beneficiaries.replace(/\D/g, '')) || 0), 0);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const monthlyData: { [key: string]: number } = {};
    months.forEach(m => monthlyData[m] = 0);

    donations.forEach(d => {
      const dDate = new Date(d.date);
      if (!isNaN(dDate.getTime())) {
        const monthIndex = dDate.getMonth();
        const monthName = months[monthIndex];
        if (monthlyData[monthName] !== undefined) {
          monthlyData[monthName] += Number(d.amount) || 0;
        }
      }
    });

    return {
      totalRevenue: totalRev,
      totalExpenses: totalExp,
      activeBeneficiaries: benCount.toLocaleString() + "+",
      volunteerCount: volunteers.length,
      projectCount: projects.length,
      revenueHistory: months.map(m => ({ month: m, amount: monthlyData[m] }))
    };
  };

  const addNews = (item: NewsUpdate) => {
    setNews(prev => [item, ...prev]);
    syncRecord('news', item);
  };

  const addProject = (item: Project) => {
    setProjects(prev => [item, ...prev]);
    syncRecord('projects', { 
      ...item, 
      completed_items: item.completedItems, 
      missing_items: item.missingItems 
    });
  };

  const updateProject = (id: string, updates: Partial<Project>) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
    const project = projects.find(p => p.id === id);
    if (project) {
      const merged = { ...project, ...updates };
      syncRecord('projects', { 
        ...merged, 
        completed_items: merged.completedItems, 
        missing_items: merged.missingItems 
      });
    }
  };

  const addImage = (item: GalleryItem) => {
    setGallery(prev => [item, ...prev]);
    syncRecord('gallery', item);
  };

  const addDonation = (item: Donation) => {
    setDonations(prev => [item, ...prev]);
    syncRecord('donations', item);
  };

  const addExpense = (item: Expense) => {
    setExpenses(prev => [item, ...prev]);
    syncRecord('expenses', item);
  };

  const addVolunteer = (item: Volunteer) => {
    setVolunteers(prev => [item, ...prev]);
    syncRecord('volunteers', {
      id: item.id,
      first_name: item.firstName,
      last_name: item.lastName,
      email: item.email,
      country: item.country,
      interests: item.interests
    });
  };

  const addEvent = (item: AppEvent) => {
    setEvents(prev => [item, ...prev]);
    syncRecord('events', {
      id: item.id,
      title: item.title,
      date: item.date,
      start_time: item.startTime,
      end_time: item.endTime,
      location: item.location,
      description: item.description,
      type: item.type
    });
  };

  const registerStaff = (name: string, email: string, role: 'admin' | 'helper') => {
    const newUser: User = { id: `u-${Date.now()}`, name, email: email.toLowerCase(), role, isValidated: true };
    setHelpers(prev => [...prev, newUser]);
    syncRecord('helpers', {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      is_validated: newUser.isValidated
    });
  };

  const updateUser = (id: string, updates: Partial<User>) => {
    setHelpers(prev => prev.map(h => h.id === id ? { ...h, ...updates } : h));
    const user = helpers.find(h => h.id === id);
    if (user) {
      const merged = { ...user, ...updates };
      syncRecord('helpers', {
        id: merged.id,
        name: merged.name,
        email: merged.email,
        role: merged.role,
        is_validated: merged.isValidated,
        profile_picture: merged.profilePicture
      });
    }
    if (currentUser?.id === id) {
      const updated = { ...currentUser, ...updates };
      setCurrentUser(updated);
      localStorage.setItem('APDFE_SESSION', JSON.stringify(updated));
    }
  };

  const updateCurrentProfile = (updates: Partial<User>) => currentUser && updateUser(currentUser.id, updates);

  const resetDatabase = async () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <MockDataContext.Provider value={{ 
      news, gallery, projects, volunteers, donations, expenses, helpers, events, currentUser, isLoading, isDbHealthy,
      login, logout, addNews, addProject, updateProject, addImage, addDonation, addExpense, addVolunteer, addEvent,
      updateUser, updateCurrentProfile, registerStaff, resetDatabase, getAggregates
    }}>
      {children}
    </MockDataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(MockDataContext);
  if (!context) throw new Error('useData must be used within MockDataProvider');
  return context;
};
