import { mapState, mapActions } from 'vuex';

export default {
  name: 'top',
  computed: {
    ...mapState(['user']),
    adminName() {
      return this.user?.fio?.trim() ?? '';
    },
    isExitBtnDisabled() {
      return !this.user?.userId;
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
