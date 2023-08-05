export const useBookStore = defineStore('book', {
  state: () => ({}),

  actions: {
    all() {
      return useAsyncState(async () => {
        const res = await useHttp().get('/works/OL45804W/editions.json?size=10');
        return res.data.entries;
      }, []);
    },
  },
});
