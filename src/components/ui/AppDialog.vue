<script>
  export default {
    name: 'AppDialog',
    props: {
      modelValue: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closeDialog() {
        this.$emit('update:modelValue', false)
        this.$emit('click-outside')
      }
    }
  }
</script>

<template>
  <div class="dialog" v-if="modelValue" @click="closeDialog()">
    <div class="dialog-container" @click.stop>
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .dialog {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: rgba(0 0 0 / .3);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;

    &-container {
      min-width: 400px;
      background: #fff;
      border-radius: 16px;
      padding: 20px;
    }
  }
</style>