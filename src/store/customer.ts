export const useCustomerStore = defineStore('customer', {
  state: () => ({
  }),

  actions: {
    all(params?: any) {
      const abort = new AbortController();

      const control = useAsyncState(async () => {
        const res = await useHttp().get('https://www.primefaces.org/data/customers', {
          params,
          signal: abort.signal,
        });

        return res.data;
      }, {});

      return {
        ...control,
        signal: abort,
      };
    },
  },
});
