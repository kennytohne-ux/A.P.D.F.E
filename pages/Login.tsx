
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Mail, 
  ChevronRight, 
  AlertCircle, 
  ShieldCheck, 
  Fingerprint,
  Loader2
} from 'lucide-react';
import { useData } from '../context/MockDataContext';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState('');

  const { login, helpers } = useData();
  const navigate = useNavigate();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setError('');

    // Small timeout to simulate a database check for better UX
    setTimeout(() => {
      const user = helpers.find(h => h.email.toLowerCase() === email.toLowerCase());
      
      if (!user) {
        setError('Staff identity not recognized in our regional database.');
        setIsLoggingIn(false);
        return;
      }
      
      login(user);
      navigate('/dashboard');
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4 py-20 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400 rounded-full blur-[160px] animate-pulse delay-1000"></div>
      </div>

      {/* Login Interface */}
      <div className="w-full max-w-md bg-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] p-12 md:p-14 border border-slate-100 relative z-10 animate-in zoom-in duration-500">
        <div>
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-slate-900 text-white rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl relative overflow-hidden group">
              {isLoggingIn ? (
                <Loader2 size={36} className="animate-spin text-blue-500" />
              ) : (
                <Fingerprint size={40} className="group-hover:scale-110 transition-transform" />
              )}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent"></div>
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Personnel Access</h1>
            <p className="text-slate-400 mt-2 text-sm font-bold uppercase tracking-widest">Staff Identification Hub</p>
          </div>

          <form onSubmit={handleEmailSubmit} className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">Staff Identity Address</label>
              <div className="relative">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                <input 
                  required 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoggingIn}
                  className="w-full pl-16 pr-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-blue-600 focus:bg-white transition-all font-bold text-slate-900 placeholder:text-slate-300 disabled:opacity-50" 
                  placeholder="staff@apdfe.org"
                />
              </div>
            </div>

            {error && (
              <div className="p-5 bg-red-50 rounded-2xl flex gap-4 text-red-600 items-center border border-red-100 animate-in shake duration-300">
                <AlertCircle size={20} className="shrink-0" />
                <span className="text-xs font-bold leading-tight">{error}</span>
              </div>
            )}

            <button 
              type="submit" 
              disabled={isLoggingIn}
              className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl hover:bg-black transition-all flex items-center justify-center gap-3 active:scale-95 disabled:bg-slate-700"
            >
              {isLoggingIn ? 'Identifying Personnel...' : 'Unlock Portal'} 
              {!isLoggingIn && <ChevronRight size={20} />}
            </button>
          </form>
        </div>

        <div className="mt-14 pt-12 border-t border-slate-100">
          <div className="flex items-start gap-4 bg-slate-50 p-6 rounded-3xl border border-slate-100">
            <ShieldCheck size={24} className="text-blue-600 shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Cloud Security Protocol V3</h4>
              <p className="text-[10px] text-slate-400 leading-relaxed font-bold uppercase">
                Access is strictly for authorized A.P.D.F.E personnel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
