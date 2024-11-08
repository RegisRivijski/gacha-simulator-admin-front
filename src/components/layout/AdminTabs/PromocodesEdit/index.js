import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      formData: 'promocodes/currentPromocode',
    }),
  },
  mounted() {
    const promocodeId = this.$route.params?.promocodeId;
    if (promocodeId) {
      this.fetchPromocodesById(promocodeId);
    } else {
      this.setCurrentPromocode({
        promocode: '',
        primogems: 0,
        stardust: 0,
        starglitter: 0,
        count: 1, // Минимальное значение для предотвращения ошибок
      });
    }
  },
  methods: {
    ...mapActions({
      fetchPromocodesById: 'promocodes/fetchPromocodesById',
      changePromocodeById: 'promocodes/changePromocodeById',
      createPromocode: 'promocodes/createPromocode',
    }),
    ...mapMutations({
      setCurrentPromocode: 'promocodes/setCurrentPromocode',
    }),
    handleSubmit() {
      const promocodeId = this.$route.params?.promocodeId;
      if (promocodeId) {
        this.changePromocodeById(this.formData)
          .then(() => {
            this.$notify({
              group: 'foo',
              type: 'success',
              title: 'Изменения сохранены!',
              text: 'Промокод успешно обновлён.',
            });
            this.$router.push('/gacha-simulator/admin/promocodes');
          })
          .catch(() => {
            this.$notify({
              group: 'foo',
              type: 'error',
              title: 'Ошибка',
              text: 'Попробуйте ещё раз.',
            });
          });
      } else {
        this.createPromocode(this.formData)
          .then(() => {
            this.$notify({
              group: 'foo',
              type: 'success',
              title: 'Промокод создан!',
              text: 'Промокод добавлен успешно.',
            });
            this.$router.push('/gacha-simulator/admin/promocodes');
          })
          .catch(() => {
            this.$notify({
              group: 'foo',
              type: 'error',
              title: 'Ошибка',
              text: 'Произошла ошибка при сохранении промокода.',
            });
          });
      }
    },
  },
};
