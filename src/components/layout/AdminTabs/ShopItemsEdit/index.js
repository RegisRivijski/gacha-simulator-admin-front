import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'ShopItemForm',
  data() {
    return {
      currencyOptions: [
        { value: 'primogems', text: 'Камни истока' },
        { value: 'stardust', text: 'Звёздная пыль' },
        { value: 'starglitter', text: 'Звёздный блеск' },
      ],
    };
  },
  computed: {
    ...mapGetters({
      formData: 'shop/currentShopItem',
    }),
  },
  mounted() {
    const shopItemId = this.$route.params?.shopItemId;
    if (shopItemId) {
      this.fetchShopItemById(shopItemId);
    } else {
      this.setCurrentShopItem({
        order: 0,
        count: 1,
        currencyType: 'primogems',
        starsCost: 0,
      });
    }
  },
  methods: {
    ...mapActions({
      fetchShopItemById: 'shop/fetchShopItemById',
      changeShopItemById: 'shop/changeShopItemById',
      createShopItem: 'shop/createShopItem',
    }),
    ...mapMutations({
      setCurrentShopItem: 'shop/setCurrentShopItem',
    }),
    handleSubmit() {
      const shopItemId = this.$route.params?.shopItemId;
      if (shopItemId) {
        this.changeShopItemById(this.formData)
          .then(() => {
            this.$notify({
              group: 'foo',
              type: 'success',
              title: 'Изменения сохранены!',
              text: 'Товар успешно обновлён.',
            });
            this.$router.push('/gacha-simulator/admin/shop-items');
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
        this.createShopItem(this.formData)
          .then(() => {
            this.$notify({
              group: 'foo',
              type: 'success',
              title: 'Товар создан!',
              text: 'Новый товар добавлен успешно.',
            });
            this.$router.push('/gacha-simulator/admin/shop-items');
          })
          .catch(() => {
            this.$notify({
              group: 'foo',
              type: 'error',
              title: 'Ошибка',
              text: 'Произошла ошибка при сохранении товара.',
            });
          });
      }
    },
    cancel() {
      this.$router.push('/gacha-simulator/admin/shop-items');
    },
  },
};
