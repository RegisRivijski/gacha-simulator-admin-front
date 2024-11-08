import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AdvertisementsList',
  data() {
    return {
      fullMessage: '', // Для предпросмотра полного текста сообщения
    };
  },
  computed: {
    ...mapGetters({
      allAdvertisements: 'advertisements/allAdv',
    }),
  },
  mounted() {
    this.fetchAllAdvertisements();
  },
  methods: {
    ...mapActions({
      fetchAllAdvertisements: 'advertisements/fetchAllAdv',
      deleteAdvertisementById: 'advertisements/deleteAdvById',
    }),
    editAdvertisement(advertisement) {
      this.$router.push(`/gacha-simulator/admin/advertisements/${advertisement._id}`);
    },
    deleteAdvertisement(advertisementId) {
      this.deleteAdvertisementById(advertisementId)
        .then(() => {
          this.fetchAllAdvertisements();
          this.$notify({
            group: 'foo',
            type: 'success',
            title: 'Удаление успешно',
            text: 'Реклама успешно удалена.',
          });
        });
    },
    addNewAdvertisement() {
      this.$router.push('/gacha-simulator/admin/advertisements-add');
    },
    formatLocalTime(utcTimeString) {
      const utcDate = new Date(utcTimeString);
      return utcDate.toLocaleString();
    },
    truncateText(text, length) {
      return text.length > length ? `${text.substring(0, length)}...` : text;
    },
    previewMessage(message) {
      this.fullMessage = message;
      this.$bvModal.show('previewModal');
    },
    badgeClass(status) {
      return status ? 'badge badge-success' : 'badge badge-secondary';
    },
  },
};
