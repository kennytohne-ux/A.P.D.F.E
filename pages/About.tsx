
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, Heart, Users, CheckCircle, Mail, Phone, MapPin, 
  Globe, History, Target, ShieldAlert, Sparkles, Activity, 
  Search, Scale, GraduationCap, ArrowRight, Quote, Landmark,
  Stethoscope, ShieldCheck, Zap, Briefcase, BookOpen, Utensils,
  ChevronRight, X, Info, Send
} from 'lucide-react';
import { TEAM_MEMBERS, TIMELINE_EVENTS } from '../constants';

export const About = () => {
  const [selectedMember, setSelectedMember] = useState<typeof TEAM_MEMBERS[0] | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Handle smooth transition for modal
  const openProfile = (member: typeof TEAM_MEMBERS[0]) => {
    setSelectedMember(member);
    // Use a small delay for DOM mounting before triggering animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsModalVisible(true));
    });
  };

  const closeProfile = () => {
    setIsModalVisible(false);
    // Wait for the smooth 400ms transition to finish before unmounting
    setTimeout(() => setSelectedMember(null), 400);
  };

  return (
    <div className="animate-in fade-in duration-700 font-sans text-slate-900 bg-white">
      
      {/* 1. Hero Section */}
      <section className="bg-slate-900 py-32 md:py-48 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="flex flex-col items-center mb-10">
            <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl mb-8">
              <img src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/apdfe-logo.png" alt="A.P.D.F.E Logo" className="h-20 w-auto" />
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-4">A.P.D.F.E</h1>
            <p className="text-lg md:text-xl text-green-400 font-black tracking-[0.3em] uppercase mb-12">Building Better Futures Together</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">About A.P.D.F.E</h2>
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
              From survivors to changemakers — empowering women and children in conflict-affected Central Africa since 2019
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 transform translate-x-32"></div>
      </section>

      {/* 2. Who We Are */}
      <section id="who-we-are" className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">Identity Profile</div>
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-none uppercase">Who We Are</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-lg">
              <p>
                Action Pour le Développement de la Femme et de l'Enfant (APDFE) is a survivor-led, women- and child-centered humanitarian organization founded in 2019.
              </p>
              <p className="font-bold text-slate-900">
                Our staff, leadership, and community mobilizers are survivors of genocide, armed conflict, and displacement. This lived experience is our greatest asset.
              </p>
              <p>
                Operating in four of Central Africa's most fragile and conflict-affected countries—CAR, DRC, Republic of Congo, and Cameroon—we deliver trauma-informed interventions.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop" 
              alt="APDFE team" 
              className="rounded-[4rem] shadow-2xl h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. Regional Team (Grid) */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl text-left">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-8 text-slate-900">Our Regional Team</h2>
              <p className="text-xl text-slate-500 font-medium">
                Field experts and leaders across Central Africa and beyond.
              </p>
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 border border-blue-100 bg-blue-50 px-6 py-2 rounded-full">
              Leadership Collective
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-10">
            {TEAM_MEMBERS.map((member, i) => (
              <div 
                key={i} 
                onClick={() => openProfile(member)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-6 bg-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=003399&color=fff&size=512`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest">
                       <MapPin size={12} className="text-green-400" /> {member.country}
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-black tracking-tight uppercase leading-none text-slate-900">{member.name}</h4>
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BALANCED POPUP MODAL */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
           {/* Smooth Backdrop */}
           <div 
             className={`absolute inset-0 bg-slate-900/80 backdrop-blur-xl transition-opacity duration-500 ${isModalVisible ? 'opacity-100' : 'opacity-0'}`} 
             onClick={closeProfile}
           ></div>
           
           {/* Animated Modal Container */}
           <div className={`relative bg-white w-full max-w-4xl rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex flex-col md:flex-row ${isModalVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-24'}`}>
              
              <button 
                onClick={closeProfile}
                className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur-sm text-slate-400 hover:text-red-500 rounded-full transition-all active:scale-90 z-20 shadow-lg border border-slate-100"
              >
                <X size={20} />
              </button>

              {/* Left Side: Visual Focus */}
              <div className="w-full md:w-2/5 aspect-square md:aspect-auto bg-slate-100 relative">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name} 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedMember.name)}&background=003399&color=fff&size=800`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </div>
              
              {/* Right Side: Information Focus */}
              <div className="w-full md:w-3/5 p-10 md:p-14 lg:p-16 flex flex-col justify-center">
                <div className="space-y-6 mb-10">
                  <div className="flex flex-col gap-3">
                    <span className="w-fit px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border border-blue-100">
                      {selectedMember.role}
                    </span>
                    <h3 className="text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">{selectedMember.name}</h3>
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-[0.3em]">
                    <MapPin size={14} className="text-green-500" /> {selectedMember.country} Regional Command
                  </div>
                </div>
                
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative overflow-hidden flex-grow">
                  <h4 className="text-[9px] font-black uppercase text-slate-400 tracking-[0.4em] mb-4 flex items-center gap-3">
                    <Info size={12} className="text-blue-500" /> Mission Summary
                  </h4>
                  <p className="text-slate-600 text-base lg:text-lg leading-relaxed font-medium italic">
                    "{selectedMember.bio}"
                  </p>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <button className="flex-grow py-5 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95">
                    Secure Channel <Send size={14} />
                  </button>
                  <button 
                    onClick={closeProfile} 
                    className="px-10 py-5 bg-slate-100 text-slate-500 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-all active:scale-95"
                  >
                    Close
                  </button>
                </div>
              </div>
           </div>
        </div>
      )}

      {/* 4. Core Values */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">Our Core Values</h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Heart className="text-red-500" />, title: "Survivor-Centered", desc: "Our programs are designed BY survivors, FOR survivors." },
              { icon: <Users className="text-blue-500" />, title: "Dignity & Respect", desc: "We restore hope and self-worth to those society has marginalized." },
              { icon: <Landmark className="text-green-500" />, title: "Community-Led", desc: "Real change comes from within communities. We empower local leaders." },
              { icon: <Shield className="text-amber-500" />, title: "Do No Harm", desc: "Trauma-informed care is at the heart of every intervention." }
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {React.cloneElement(v.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-xl font-black mb-4 text-slate-900 uppercase tracking-tight">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Work in Action */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">Our Work in Action</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop", title: "Women's Empowerment", desc: "Skills training & independence", tag: "Workshop" },
            { img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop", title: "Health & Wellness", desc: "Trauma-informed mental health", tag: "MHPSS" },
            { img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop", title: "Education & Protection", desc: "Safe learning for children", tag: "Learning" },
            { img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop", title: "Community Peace", desc: "Building dialogue & reconciliation", tag: "Dialogue" }
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative h-64 mb-6 overflow-hidden rounded-[2.5rem]">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute top-6 left-6 px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black text-white uppercase tracking-widest">
                  {item.tag}
                </div>
              </div>
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2">{item.title}</h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Mission & Vision */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-slate-50 p-16 rounded-[4rem] border border-slate-100">
            <div className="w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center mb-10 shadow-2xl shadow-blue-600/40"><Target size={40} /></div>
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-8 leading-none">Our Mission</h2>
            <p className="text-xl text-slate-600 leading-relaxed font-bold italic">
              "To empower and advocate for vulnerable women and children living in conflict environments across Central Africa."
            </p>
          </div>
          <div className="bg-slate-900 p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
            <div className="w-20 h-20 bg-green-500 text-white rounded-3xl flex items-center justify-center mb-10 shadow-2xl shadow-green-500/40 relative z-10"><Globe size={40} /></div>
            <h2 className="text-4xl font-black uppercase tracking-tight mb-8 leading-none relative z-10">Our Vision</h2>
            <p className="text-xl text-green-50 leading-relaxed font-bold italic relative z-10">
              "A Central Africa where every woman and child lives with dignity, safety, and resilient, peaceful communities."
            </p>
          </div>
        </div>
      </section>

      {/* 7. Our Journey */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase mb-8">Our Journey</h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Every milestone in our history represents lives transformed and communities rebuilt.
            </p>
          </div>

          <div className="space-y-32">
            {TIMELINE_EVENTS.map((item, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row gap-16 items-start">
                <div className="lg:w-1/3 space-y-6 lg:sticky lg:top-32">
                  <div className="text-8xl font-black text-blue-600/20 tracking-tighter leading-none">{item.year}</div>
                  <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight leading-none">{item.title}</h3>
                </div>
                <div className="lg:w-2/3 space-y-12">
                   <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-xl border border-slate-100 relative group overflow-hidden">
                      <div className="relative z-10 space-y-10">
                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                          {item.description}
                        </p>
                        {item.quote && (
                          <div className="bg-slate-50 p-10 rounded-[2.5rem] border-l-8 border-blue-600">
                             <Quote size={32} className="text-blue-100 mb-4" />
                             <p className="text-xl italic font-black text-slate-800 leading-relaxed">
                               "{item.quote}"
                             </p>
                          </div>
                        )}
                      </div>
                   </div>
                   <div className="h-96 rounded-[3rem] bg-slate-200 overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 group">
                      <img 
                        src={`https://images.unsplash.com/photo-${1500000000000 + (idx * 1000000)}?q=80&w=2000&auto=format&fit=crop`} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" 
                        alt={item.title}
                        onError={(e) => { e.currentTarget.src = `https://picsum.photos/seed/${item.year}/1200/800`; }}
                      />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Impact Stats */}
      <section className="py-32 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black tracking-tighter uppercase mb-4">Our Impact So Far</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div><div className="text-6xl md:text-8xl font-black mb-4 tracking-tighter">68,000+</div><p className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-200">Reached</p></div>
            <div><div className="text-6xl md:text-8xl font-black mb-4 tracking-tighter">4</div><p className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-200">Countries</p></div>
            <div><div className="text-6xl md:text-8xl font-black mb-4 tracking-tighter">142</div><p className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-200">Communities</p></div>
            <div><div className="text-6xl md:text-8xl font-black mb-4 tracking-tighter">87%</div><p className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-200">Survivor-Led</p></div>
          </div>
        </div>
      </section>

      {/* 9. Where We Work */}
      <section id="footprint" className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-6xl font-black tracking-tighter uppercase mb-8">Where We Work</h2>
          <p className="text-xl text-slate-500 font-medium leading-relaxed italic">
            "APDFE operates in four of the world's most challenging contexts. We go where others cannot or will not go."
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {/* CAR */}
          <div className="bg-slate-900 rounded-[4rem] overflow-hidden shadow-2xl border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 h-[400px] lg:h-auto relative">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-40" alt="CAR" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-12 left-12">
                  <div className="inline-block px-4 py-1.5 bg-green-500 text-slate-900 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">Primary Hub</div>
                  <h3 className="text-4xl font-black text-white uppercase tracking-tighter">Central African Republic</h3>
                </div>
              </div>
              <div className="lg:col-span-7 p-12 md:p-16 space-y-10">
                <p className="text-slate-400 text-lg leading-relaxed font-medium">Focusing on GBV response, mental health, child protection, and economic empowerment in Bangui.</p>
                <div className="flex flex-wrap gap-8 pt-8 border-t border-white/5">
                   <div className="text-center"><p className="text-3xl font-black text-blue-500">25,000+</p><p className="text-[8px] font-black text-slate-500 uppercase mt-1">Reached</p></div>
                   <div className="text-center"><p className="text-3xl font-black text-white">8</p><p className="text-[8px] font-black text-slate-500 uppercase mt-1">Safe Spaces</p></div>
                </div>
              </div>
            </div>
          </div>

          {/* DRC */}
          <div className="bg-white rounded-[4rem] overflow-hidden shadow-xl border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 p-12 md:p-16 space-y-10 order-2 lg:order-1">
                <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Democratic Republic of Congo (Eastern DRC)</h3>
                <p className="text-slate-500 text-lg leading-relaxed font-medium">Working in North Kivu, South Kivu, and Ituri to provide emergency nutrition and trauma healing.</p>
                <div className="flex flex-wrap gap-8 pt-8 border-t border-slate-50">
                   <div className="text-center"><p className="text-3xl font-black text-blue-600">28,000+</p><p className="text-[8px] font-black text-slate-400 uppercase mt-1">Reached</p></div>
                   <div className="text-center"><p className="text-3xl font-black text-slate-900">12</p><p className="text-[8px] font-black text-slate-400 uppercase mt-1">Communities</p></div>
                </div>
              </div>
              <div className="lg:col-span-5 h-[400px] lg:h-auto relative order-1 lg:order-2">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-20" alt="DRC" />
                <div className="absolute inset-0 bg-gradient-to-l from-white/80 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-slate-50 rounded-[4rem] p-12 md:p-16 border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all">
              <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">Republic of Congo (Congo-Brazzaville)</h3>
              <p className="text-slate-500 font-medium mb-10">Supporting refugees from CAR and DRC with scholarships and vocational training.</p>
              <div className="flex flex-wrap gap-8">
                 <div><p className="text-2xl font-black text-blue-600">10,000+</p><p className="text-[8px] font-black text-slate-400 uppercase">Reached</p></div>
                 <div><p className="text-2xl font-black text-slate-900">5</p><p className="text-[8px] font-black text-slate-400 uppercase">Centers</p></div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-[4rem] p-12 md:p-16 border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all">
              <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">Cameroon</h3>
              <p className="text-slate-500 font-medium mb-10">Delivering primary healthcare and mobile clinics to internally displaced families.</p>
              <div className="flex flex-wrap gap-8">
                 <div><p className="text-2xl font-black text-blue-600">5,000+</p><p className="text-[8px] font-black text-slate-400 uppercase">Reached</p></div>
                 <div><p className="text-2xl font-black text-slate-900">4</p><p className="text-[8px] font-black text-slate-400 uppercase">Clinics</p></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 bg-blue-50 p-16 rounded-[4rem] border border-blue-100">
           <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-grow space-y-6">
                <h3 className="text-4xl font-black uppercase text-blue-900 tracking-tight">Why Central Africa?</h3>
                <p className="text-xl text-blue-800/70 font-medium leading-relaxed">
                  The intersection of long-running humanitarian crises and displacement creates complex needs. Our regional approach meets people wherever they are.
                </p>
              </div>
              <div className="w-48 h-48 bg-blue-600 text-white rounded-full flex items-center justify-center animate-pulse shrink-0"><Globe size={80} /></div>
           </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="py-32 bg-slate-900 text-white text-center rounded-t-[5rem]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-10">Join a Movement Led by Survivors</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Link to="/donate" className="px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-[2rem] font-black uppercase tracking-widest shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3">
               Support Today <ArrowRight size={20} />
             </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
