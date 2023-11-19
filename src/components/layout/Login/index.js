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
        const loginResponse = await this.apiLogin({
          login: this.login,
          password: this.password,
        });
        if (loginResponse?.login) {
          this.$notify({
            group: 'foo',
            type: 'success',
            title: `Привет, ${loginResponse.login}!`,
            text: 'Ты делаешь этот мир лучше.',
          });
          localStorage.setItem('login', loginResponse.login);
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
