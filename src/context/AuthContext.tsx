import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: { email: string; password: string }) => Promise<{ success: boolean; message: string }>;
  loginWithGoogle: () => Promise<{ success: boolean; message: string }>;
  loginWithTelegram: () => Promise<{ success: boolean; message: string }>;
  loginWithPhone: (phone: string) => Promise<{ success: boolean; message: string }>;
  register: (data: { name: string; email: string; password: string }) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('user');
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  });

  const login = useCallback(async (credentials: { email: string; password: string }) => {
    // Mock login - replace with actual API call
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        name: 'کاربر تست',
        email: credentials.email,
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      
      return { success: true, message: 'ورود موفقیت‌آمیز بود' };
    } catch (error) {
      return { success: false, message: 'خطا در ورود به سیستم' };
    }
  }, []);

  const loginWithGoogle = useCallback(async () => {
    // Mock Google OAuth - replace with actual implementation
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const mockUser: User = {
        id: '2',
        name: 'کاربر گوگل',
        email: 'user@gmail.com',
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return { success: true, message: 'ورود با گوگل موفقیت‌آمیز بود' };
    } catch (error) {
      return { success: false, message: 'خطا در ورود با گوگل' };
    }
  }, []);

  const loginWithTelegram = useCallback(async () => {
    // Mock Telegram login - replace with actual implementation
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const mockUser: User = {
        id: '3',
        name: 'کاربر تلگرام',
        email: 'user@telegram.org',
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return { success: true, message: 'ورود با تلگرام موفقیت‌آمیز بود' };
    } catch (error) {
      return { success: false, message: 'خطا در ورود با تلگرام' };
    }
  }, []);

  const loginWithPhone = useCallback(async (phone: string) => {
    // Mock phone login - replace with actual SMS verification
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const mockUser: User = {
        id: '4',
        name: 'کاربر موبایل',
        phone,
        email: '',
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return { success: true, message: 'کد تأیید ارسال شد' };
    } catch (error) {
      return { success: false, message: 'خطا در ارسال کد' };
    }
  }, []);

  const register = useCallback(async (data: { name: string; email: string; password: string }) => {
    // Mock registration - replace with actual API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const mockUser: User = {
        id: '5',
        name: data.name,
        email: data.email,
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return { success: true, message: 'ثبت‌نام موفقیت‌آمیز بود' };
    } catch (error) {
      return { success: false, message: 'خطا در ثبت‌نام' };
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('user');
  }, []);

  const updateUser = useCallback((updates: Partial<User>) => {
    setUser((prev) => {
      if (!prev) return null;
      const updated = { ...prev, ...updates };
      localStorage.setItem('user', JSON.stringify(updated));
      return updated;
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        loginWithGoogle,
        loginWithTelegram,
        loginWithPhone,
        register,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
