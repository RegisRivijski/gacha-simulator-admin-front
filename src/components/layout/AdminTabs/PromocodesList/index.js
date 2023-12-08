import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'PromocodesList',
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      allPromocodes: 'promocodes/allPromocodes',
    }),
  },
  mounted() {
    this.fetchAllPromocodes();
  },
  methods: {
    ...mapActions({
      fetchAllPromocodes: 'promocodes/fetchAllPromocodes',
      deletePromocodeById: 'promocodes/deletePromocodeById',
    }),
    editPromocode(promocode) {
      this.$router.push(`/gacha-simulator/admin/promocodes/${promocode._id}`);
    },
    deletePromocode(promocodeId) {
      this.deletePromocodeById(promocodeId)
        .then(() => {
          this.fetchAllPromocodes();
          this.$notify({
            group: 'foo',
            type: 'success',
            title: 'Туда его!',
            text: 'Промокод успешно удалён.',
          });
        });
    },
    addNewPromocode() {
      this.$router.push('/gacha-simulator/admin/promocodes-add');
    },
    formatLocalTime(utcTimeString) {
      const utcDate = new Date(utcTimeString);
      return utcDate.toLocaleString();
    },
  },
};
