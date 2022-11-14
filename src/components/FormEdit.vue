<script>
  import AppInput from '@/components/ui/AppInput.vue'
  import AppButton from '@/components/ui/AppButton.vue'
  import AppSelect from '@/components/ui/AppSelect.vue'
  import {mapGetters} from "vuex";

  export default {
    name: 'FormEdit',
    components: {
      AppButton,
      AppInput,
      AppSelect
    },
    props: {
      value: {
        type: Object,
        required: true
      },
      itemId: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        tempEditFormValue: '',
        selectValue: {},
        selectedValue: {},
        dateBirthday: ''
      }
    },
    computed: {
      ...mapGetters('company', ['getCompanies', 'getTransformCompanies']),
      ...mapGetters('user', ['getUsers']),
    },
    created() {
      // FIX: Finds only the first companyId
      const selectedUser = this.getUsers.find(({ companyId }) => companyId === this.itemId)
      this.selectedValue = { id: selectedUser.companyId, name: this.getTransformCompanies[selectedUser.companyId] }
    },
    methods: {
      selectBirthday(date) {
        const splitedDate = date.split('-')
        this.dateBirthday = `${splitedDate[2]}-${splitedDate[1]}-${splitedDate[0]}`
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
      <input
        type="date"
        class="date-field"
        @change="selectBirthday($event.target.value)"
      >
      <app-select
        :options="getCompanies"
        :selected-value="selectedValue"
        @select-option="selectValue = $event"
      />
      <app-button
        label="Сохранить"
        class="mt-4"
        @click="$emit('save', {
          selectValue: selectValue,
          inputValue: tempEditFormValue || value,
          dateBirthday: dateBirthday
        })"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .date-field {
    padding: 12px 20px;
    border: 1px solid silver;
    width: 100%;
    margin: 8px 0;
  }
</style>
