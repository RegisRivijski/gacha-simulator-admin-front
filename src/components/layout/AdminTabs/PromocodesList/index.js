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
    confirmDelete(promocodeId) {
      // eslint-disable-next-line no-restricted-globals
      if (confirm('Вы уверены, что хотите удалить этот промокод?')) {
        this.deletePromocode(promocodeId);
      }
    },
    deletePromocode(promocodeId) {
      this.deletePromocodeById(promocodeId)
        .then(() => {
          this.fetchAllPromocodes();
          this.$notify({
            group: 'foo',
            type: 'success',
            title: 'Удалено',
            text: 'Промокод успешно удалён.',
          });
        });
    },
    addNewPromocode() {
      this.$router.push('/gacha-simulator/admin/promocodes-add');
    },
    formatLocalTime(utcTimeString) {
      const utcDate = new Date(utcTimeString);
      return utcDate.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    },
  },
};
