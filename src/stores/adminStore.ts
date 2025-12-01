import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Plan, FAQ, AdminSettings } from '../types';
import { plans as defaultPlans } from '../data/plans';
import { faqs as defaultFaqs } from '../data/faq';

interface AdminState {
  isAuthenticated: boolean;
  plans: Plan[];
  faqs: FAQ[];
  settings: AdminSettings;
  login: (password: string) => boolean;
  logout: () => void;
  updatePlan: (id: string, plan: Partial<Plan>) => void;
  addPlan: (plan: Plan) => void;
  deletePlan: (id: string) => void;
  updateFaq: (id: string, faq: Partial<FAQ>) => void;
  addFaq: (faq: FAQ) => void;
  deleteFaq: (id: string) => void;
  updateSettings: (settings: Partial<AdminSettings>) => void;
  resetToDefaults: () => void;
}

const ADMIN_PASSWORD = 'tawana2025';

const defaultSettings: AdminSettings = {
  primaryColor: '#22c55e',
  accentColor: '#8b5cf6',
  logoText: 'TawanaProxy',
  telegramLink: 'https://t.me/TawanaProxy',
  paymentLink: 'https://t.me/TawanaProxy',
};

export const useAdminStore = create<AdminState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      plans: defaultPlans,
      faqs: defaultFaqs,
      settings: defaultSettings,

      login: (password: string) => {
        if (password === ADMIN_PASSWORD) {
          set({ isAuthenticated: true });
          return true;
        }
        return false;
      },

      logout: () => {
        set({ isAuthenticated: false });
      },

      updatePlan: (id: string, updates: Partial<Plan>) => {
        set((state) => ({
          plans: state.plans.map((plan) =>
            plan.id === id ? { ...plan, ...updates } : plan
          ),
        }));
      },

      addPlan: (plan: Plan) => {
        set((state) => ({ plans: [...state.plans, plan] }));
      },

      deletePlan: (id: string) => {
        set((state) => ({
          plans: state.plans.filter((plan) => plan.id !== id),
        }));
      },

      updateFaq: (id: string, updates: Partial<FAQ>) => {
        set((state) => ({
          faqs: state.faqs.map((faq) =>
            faq.id === id ? { ...faq, ...updates } : faq
          ),
        }));
      },

      addFaq: (faq: FAQ) => {
        set((state) => ({ faqs: [...state.faqs, faq] }));
      },

      deleteFaq: (id: string) => {
        set((state) => ({
          faqs: state.faqs.filter((faq) => faq.id !== id),
        }));
      },

      updateSettings: (updates: Partial<AdminSettings>) => {
        set((state) => ({
          settings: { ...state.settings, ...updates },
        }));
      },

      resetToDefaults: () => {
        set({
          plans: defaultPlans,
          faqs: defaultFaqs,
          settings: defaultSettings,
        });
      },
    }),
    {
      name: 'tawana-admin-storage',
      partialize: (state) => ({
        plans: state.plans,
        faqs: state.faqs,
        settings: state.settings,
      }),
    }
  )
);
