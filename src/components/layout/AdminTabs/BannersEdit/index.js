export default {
  data() {
    return {
      selectedCharacterStars: '4',
    };
  },
  computed: {
    formData() {
      return {
        isActive: '',
        type: '',
        category: '',
        objKey: '',
        translates: {
          en: '',
          id: '',
          ko: '',
          ru: '',
          'zh-hans': '',
        },
        characters: {
          3: [],
          4: [],
          5: [],
        },
        weapons: {
          3: [],
          4: [],
          5: [],
        },
      };
    },
  },
  methods: {
    addCharacter() {
      // Add logic to dynamically add character
      const newCharacter = prompt('Enter the character name:');
      if (newCharacter) {
        this.formData.characters[this.selectedCharacterStars].push(newCharacter);
      }
    },
    removeCharacter() {
      // Add logic to dynamically remove character
      const indexToRemove = prompt('Enter the index to remove:');
      if (indexToRemove !== null) {
        this.formData.characters[this.selectedCharacterStars].splice(indexToRemove, 1);
      }
    },
    // Add similar methods for weapons
    handleSubmit() {
      // Add logic to handle form submission
      console.log('Form submitted:', this.formData);
    },
  },
};
