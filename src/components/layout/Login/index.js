import { mapActions } from 'vuex';

export default {
  name: 'login',
  data() {
    return {
      login: '',
      password: '',
      errorLogin: false,
      noSet: false,
    };
  },
  methods: {
    ...mapActions({
      apiLogin: 'user/login',
    }),
    async loginSend(e) {
      e.preventDefault();

      this.errorLogin = false;
      this.noSet = false;

      if (this.login && this.password) {
        const { data, status } = await this
          .apiLogin({ login: this.login, password: this.password }) ?? {};
        if (status === 200) {
          localStorage.setItem('adminId', data.user_id);
          this.$router.push('/');
        } else {
          this.errorLogin = true;
        }
      } else {
        this.noSet = true;
      }
    },
  },
};
