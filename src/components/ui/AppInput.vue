<script>
  export default {
    name: 'AppInput',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: Object,
        default: () => ({})
      }
    },
    methods: {
      updateValue(event) {
        this.$emit('updated-value', {
          id: this.value?.id || Date.now(),
          name: event.target.value
        })
      }
    }
  }
</script>

<template>
  <input
      class="app-input"
      :type="type"
      :value="value.name"
      @input="updateValue($event)"
  >
</template>

<style lang="scss" scoped>
  @import '@/assets/variables.scss';

  .app-input {
    border: 1px solid silver;
    padding: 12px 20px;
    border-radius: 4px;
    outline: none;
  }
  .app-input:focus,
  .app-input:active {
    border: 1px solid $primary-color;
  }
</style>