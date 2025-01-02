import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ShopItemsList',
  computed: {
    ...mapGetters({
      allShopItems: 'shop/allShopItems',
    }),
  },
  mounted() {
    this.fetchAllShopItems();
  },
  methods: {
    ...mapActions({
      fetchAllShopItems: 'shop/fetchAllShopItems',
      deleteShopItemById: 'shop/deleteShopItemById',
    }),
    editShopItem(item) {
      this.$router.push(`/gacha-simulator/admin/shop-items/${item.shopItemId}`);
    },
    confirmDelete(itemId) {
      this.deleteShopItem(itemId);
    },
    deleteShopItem(itemId) {
      this.deleteShopItemById(itemId)
        .then(() => {
          this.fetchAllShopItems();
          this.$notify({
            group: 'foo',
            type: 'success',
            title: 'Удалено',
            text: 'Товар успешно удалён.',
          });
        });
    },
    addNewShopItem() {
      this.$router.push('/gacha-simulator/admin/shop-items-add');
    },
    formatLocalTime(utcTimeString) {
      const utcDate = new Date(utcTimeString);
      return utcDate.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    },
  },
};
