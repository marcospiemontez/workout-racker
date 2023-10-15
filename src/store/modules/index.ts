import { defineStore } from 'pinia';
import { User } from '@/types/User.ts';

export const userStore = defineStore({
  id: 'user',
  state: () => ({
    user: null as User | null,
  }),

  actions: {
    setUser(payload: User | null) {
      this.user = payload;
    },
  },

  getters: {
    getUser(): User | null {
      return this.user;
    },
  },
});
