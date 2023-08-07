export const useCustomerStore = defineStore('customer', {
  state: () => ({
  }),

  actions: {
    all(params?: any) {
      return useAsyncState(async () => {
        const res = await useHttp().get('https://www.primefaces.org/data/customers', {
          params,
        });

        return res.data;
      }, {});
    },
  },
});
