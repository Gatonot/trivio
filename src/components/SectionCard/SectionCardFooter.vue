<script>
  import AppDialog from '@/components/ui/AppDialog.vue'
  import AppButton from '@/components/ui/AppButton.vue'
  import AppInput from '@/components/ui/AppInput.vue'
  import FormEdit from '@/components/FormEdit.vue'
  import {mapActions, mapGetters} from 'vuex'
  import { names } from '@/constants/names.js'

  export default {
    name: 'SectionCardFooter',
    components: {
      AppDialog,
      AppButton,
      AppInput,
      FormEdit
    },
    props: {
      form: {
        type: Object,
        required: true
      },
      itemId: {
        type: Number,
        validator(value) {
          return !isNaN(value) ?? null
        }
      },
      dialogIsShown: {
        type: Boolean,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        tempNewValue: '',
        value: ''
      }
    },
    computed: {
      ...mapGetters('company', ['getCompanies']),
      ...mapGetters('user', ['getUsers'])
    },
    methods: {
      ...mapActions('company', ['setCompany']),
      ...mapActions('user', ['setUsers']),
      findName(itemId) {
        const collections = this.name === names.COMPANY ? this.getCompanies : this.getUsers
        return collections.find(({ id }) => id === itemId)
      },
      saveAfterEdit(item) {
        if(this.name === names.COMPANY) {
          this.setCompany(item)
        } else {
          this.setUsers(item)
        }
        this.$emit('close-dialog')
      }
    }
  }
</script>

<template>
  <app-dialog
      v-model="dialogIsShown"
      @click-outside="$emit('close-dialog')"
  >
    <!-- TODO: added notification for success message -->
    <form-edit
      v-if="form.editIsShown"
      :item-id="itemId"
      :value="findName(itemId)"
      @save="saveAfterEdit($event)"
    />

    <template v-else-if="form.deleteIsShown">
      <h3>Вы действительно хотите удалить?</h3>
      <div class="button-actions">
        <app-button class="cancel" label="Отменить" @click="$emit('close-dialog')" />
        <app-button class="delete" label="Удалить" @click="$emit('delete-by-id', itemId)"/>
      </div>
    </template>

    <template v-else>
      <h3>Добавить</h3>
      <div class="company-actions mt-3 flex-column">
        <app-input type="text" @updated-value="tempNewValue = $event"/>
        <app-button label="Добавить" @click="$emit('add-new-item', tempNewValue)"/>
      </div>
    </template>
  </app-dialog>
</template>

<style lang="scss" scoped>
  @import '@/assets/variables.scss';

  .company-actions {
    display: flex;
    gap: 8px;
  }
  .button-actions {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 20px;

    & .cancel {
      border: 1px solid silver;
      color: silver;
      background: transparent;
      padding: 8px 16px;
    }
    & .delete {
      border: 1px solid $red-color;
      color: $white-color;
      background: $red-color;
      padding: 8px 16px;
    }
  }
</style>