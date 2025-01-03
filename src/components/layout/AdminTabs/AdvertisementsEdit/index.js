import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      formData: 'advertisements/currentAdv',
    }),
  },
  mounted() {
    const advId = this.$route.params?.advId;
    if (advId) {
      this.fetchAdvById(advId);
    } else {
      this.setCurrentAdv({
        imageLink: '',
        message: '',
        groups: true,
        users: true,
        delivered: false,
        sendAfter: '',
      });
    }
  },
  methods: {
    ...mapActions({
      fetchAdvById: 'advertisements/fetchAdvById',
      changeAdvById: 'advertisements/changeAdvById',
      createAdv: 'advertisements/createAdv',
    }),
    ...mapMutations({
      setCurrentAdv: 'advertisements/setCurrentAdv',
    }),
    handleSubmit() {
      const advId = this.$route.params?.advId;
      if (advId) {
        this.changeAdvById(this.formData)
          .then(() => {
            this.fetchAdvById(advId);
            this.$notify({
              group: 'foo',
              type: 'success',
              title: 'Изменения успешно сохранены!',
              text: 'Теперь мы будет следить за тобой.',
            });
            this.$router.push('/gacha-simulator/admin/advertisements');
          })
          .catch(() => {
            this.$notify({
              group: 'foo',
              type: 'error',
              title: 'Что-то пошло не так...',
              text: 'Попробуйте снова.',
            });
          });
      } else {
        this.createAdv(this.formData)
          .then(() => {
            this.$notify({
              group: 'foo',
              type: 'success',
              title: 'Реклама успешно создана!',
              text: 'Спасибо, за то что злишь игроков.',
            });
            this.$router.push('/gacha-simulator/admin/advertisements');
          })
          .catch(() => {
            this.$notify({
              group: 'foo',
              type: 'error',
              title: 'Ошибка!',
              text: 'Во время сохранения произошла ошибка.',
            });
          });
      }
    },
  },
};
