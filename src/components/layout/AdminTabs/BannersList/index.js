import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'BannersList',
  data() {
    return {
      filterIsActive: '',
      filterObjKey: '',
      filterType: '',
      filterCategory: '',
      filterIsActiveOptions: [
        { text: 'Все', value: '' },
        { text: 'Активные', value: 'true' },
        { text: 'Неактивные', value: 'false' },
      ],
      filterTypeOptions: [
        { text: 'Все', value: '' },
        { text: 'Баннер Персонажей', value: 'character' },
        { text: 'Баннер Оружия', value: 'weapon' },
      ],
      filterCategoryOptions: [
        { text: 'Все', value: '' },
        { text: 'Игровой', value: 'event' },
        { text: 'Универсальный', value: 'universal' },
      ],
    };
  },
  mounted() {
    this.fetchAllBanners();
  },
  computed: {
    ...mapGetters({
      allBannersData: 'banners/allBannersData',
    }),
    filteredBanners() {
      return this.allBannersData.filter(banner => {
        const isActiveFilter = this.filterIsActive === '' || banner.isActive.toString() === this.filterIsActive;
        const objKeyFilter = this.filterObjKey === '' || banner.objKey.toLowerCase().includes(this.filterObjKey.toLowerCase());
        const typeFilter = this.filterType === '' || banner.type.toLowerCase().includes(this.filterType.toLowerCase());
        const categoryFilter = this.filterCategory === '' || banner.category.toLowerCase().includes(this.filterCategory.toLowerCase());

        return isActiveFilter && objKeyFilter && typeFilter && categoryFilter;
      });
    },
  },
  methods: {
    ...mapActions({
      fetchAllBanners: 'banners/fetchAllBanners',
      deleteBannerById: 'banners/deleteBannerById',
      changeBannerById: 'banners/changeBannerById',
    }),
    addBanner() {
      this.$router.push('/gacha-simulator/admin/banners-add');
    },
    editBanner(banner) {
      this.$router.push(`/gacha-simulator/admin/banners/${banner?._id}`);
    },
    deleteBanner(banner) {
      this.deleteBannerById(banner?._id)
        .then(() => {
          this.fetchAllBanners();
          this.$notify({
            group: 'foo',
            type: 'success',
            title: 'Туда его!',
            text: 'Баннер успешно удалён.',
          });
        });
    },
    toggleActivation(banner) {
      this.changeBannerById({
        ...banner,
        isActive: !banner?.isActive,
      })
        .then(() => {
          this.fetchAllBanners();
        });
    },
  },
};
