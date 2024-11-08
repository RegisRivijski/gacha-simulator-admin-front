import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      formData: 'banners/currentBanner',
      characters: 'staticData/characters',
      weapons: 'staticData/weapons',
    }),
  },
  mounted() {
    const bannerId = this.$route.params?.bannerId;
    if (bannerId) {
      this.fetchBannerById(bannerId);
    } else {
      this.setCurrentBanner({
        isActive: true,
        type: 'character',
        category: 'event',
        objKey: '',
        translates: {
          en: '',
          id: '',
          ko: '',
          ru: '',
          'zh-hans': '',
        },
        characters: {
          4: [],
          5: [],
        },
        weapons: {
          3: [],
          4: [],
          5: [],
        },
      });
    }
    this.getAllItems();
  },
  methods: {
    ...mapActions({
      fetchBannerById: 'banners/fetchBannerById',
      getAllItems: 'staticData/getAllItems',
      changeBannerById: 'banners/changeBannerById',
      createBanner: 'banners/createBanner',
    }),
    ...mapMutations({
      setCurrentBanner: 'banners/setCurrentBanner',
    }),
    handleSubmit() {
      const bannerId = this.$route.params?.bannerId;
      if (bannerId) {
        this.changeBannerById(this.formData).then(() => this.redirectToList());
      } else {
        this.createBanner(this.formData).then(() => this.redirectToList());
      }
    },
    redirectToList() {
      this.$router.push('/gacha-simulator/admin/banners');
    },
    optionsCharacter(stars) {
      return this.characters
        .filter(({ rarity }) => Number(rarity) === Number(stars))
        .map(({ objKey }) => ({ text: objKey, value: objKey }));
    },
    addCharacter(stars) {
      this.formData.characters[stars].push('');
    },
    removeCharacter(stars, index) {
      this.formData.characters[stars].splice(index, 1);
    },
    optionsWeapon(stars) {
      return this.weapons
        .filter(({ rarity }) => Number(rarity) === Number(stars))
        .map(({ objKey }) => ({ text: objKey, value: objKey }));
    },
    addWeapon(stars) {
      this.formData.weapons[stars].push('');
    },
    removeWeapon(stars, index) {
      this.formData.weapons[stars].splice(index, 1);
    },
  },
};
