export const useCounterStore = defineStore('counter', {
  state: () => ({
    _count: 0,
  }),

  getters: {
    count(): number {
      return this._count * 2;
    },
  },

  actions: {
    increment() {
      this._count++;
    },
    decrement() {
      this._count--;
    },
  },
});
