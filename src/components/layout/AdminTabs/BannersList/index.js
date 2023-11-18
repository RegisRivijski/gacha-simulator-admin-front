import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'BannersList',
  data() {
    return {
    };
  },
  created() {
    this.fetchAllBanners();
  },
  computed: {
    ...mapGetters({
      allBannersData: 'banners/allBannersData',
    }),
  },
  methods: {
    ...mapActions({
      fetchAllBanners: 'banners/fetchAllBanners',
    }),
  },
};
