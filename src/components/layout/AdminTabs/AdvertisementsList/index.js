import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AdvertisementsList',
  data() {
    return {
      showPreview: false,
      selectedAdvertisement: null,
    };
  },
  computed: {
    ...mapGetters({
      allAdvertisements: 'advertisements/allAdv',
    }),
    compiledMessage() {
      if (this.selectedAdvertisement) {
        return this.selectedAdvertisement.message; // Render HTML if message contains tags.
      }
      return '';
    },
  },
  mounted() {
    this.fetchAllAdvertisements();
  },
  methods: {
    ...mapActions({
      fetchAllAdvertisements: 'advertisements/fetchAllAdv',
      deleteAdvertisementById: 'advertisements/deleteAdvById',
    }),
    previewAdvertisement(advertisement) {
      this.selectedAdvertisement = advertisement;
      this.showPreview = true;
    },
    editAdvertisement(advertisement) {
      this.$router.push(`/gacha-simulator/admin/advertisements/${advertisement._id}`);
    },
    deleteAdvertisement(advertisementId) {
      this.deleteAdvertisementById(advertisementId).then(() => {
        this.fetchAllAdvertisements();
        this.$notify({
          group: 'foo',
          type: 'success',
          title: 'Туда его!',
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
      if (text.length > length) {
        return `${text.substring(0, length)}...`;
      }
      return text;
    },
  },
};
