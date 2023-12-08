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
        count: 0,
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
            this.fetchPromocodesById(promocodeId);
            this.$notify({
              group: 'foo',
              type: 'success',
              title: 'Твои изменения успешно внесены!',
              text: 'Теперь мы будет следить за тобой.',
            });

            this.$router.push('/gacha-simulator/admin/promocodes');
          })
          .catch(() => {
            this.$notify({
              group: 'foo',
              type: 'success',
              title: 'Но вериться с трудом...',
              text: 'Не переживай бусинка, попробуй ещё раз.',
            });
          });
      } else {
        this.createPromocode(this.formData)
          .then(() => {
            this.$notify({
              group: 'foo',
              type: 'success',
              title: 'Баннер успешно создан!',
              text: 'Спасибо, за то что радуешь игроков.',
            });

            this.$router.push('/gacha-simulator/admin/promocodes');
          })
          .catch(() => {
            this.$notify({
              group: 'foo',
              type: 'error',
              title: 'Что-то пошло не так...',
              text: 'Во время сохранения твоей информации произошла ошибка.',
            });
          });
      }
    },
  },
};
