import { mapState, mapActions } from 'vuex';

export default {
  name: 'top',
  computed: {
    ...mapState(['user']),
    adminName() {
      return this.user?.login?.trim() ?? 'Неизвестный (пожалуйста, закрой страницу)';
    },
    isLogged() {
      return Boolean(this.user?.login);
    },
  },
  methods: {
    ...mapActions({
      apiExit: 'user/exit',
    }),
    async exit() {
      await this.apiExit();
      await this.$router.push({ name: 'login' });
    },
  },
};
