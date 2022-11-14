<script>
  import { mapGetters, mapActions } from 'vuex'
  import AppInput from '@/components/ui/AppInput.vue'
  import AppButton from '@/components/ui/AppButton.vue'

  export default {
    name: 'FormEdit',
    components: {
      AppButton,
      AppInput
    },
    data() {
      return {
        tempEditFormValue: ''
      }
    },
    props: {
      value: {
        type: Object,
        required: true
      }
    }
  }
</script>

<template>
  <div>
    <h3>Редактировать</h3>

    <div class="single-form d-flex flex-column">
      <app-input
        type="text"
        class="mt-3"
        :value="value"
        @updated-value="tempEditFormValue = $event"
      />
      <app-button
        label="Сохранить"
        class="mt-4"
        @click="$emit('save', tempEditFormValue)"
      />
    </div>
  </div>
</template>
