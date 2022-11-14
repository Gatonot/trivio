<script>
  import { mapActions } from 'vuex'
  import { names } from '@/constants/names.js'
  import AppButton from '@/components/ui/AppButton.vue'
  import SectionCardBody from './SectionCardBody.vue'
  import SectionCardFooter from './SectionCardFooter.vue'

  export default {
    name: 'SectionCard',
    props: {
      name: {
        type: String,
        required: true
      },
      list: {
        type: Array,
        required: true
      }
    },
    components: {
      AppButton,
      SectionCardFooter,
      SectionCardBody
    },
    data() {
      return {
        form: {
          editIsShown: false,
          deleteIsShown: false,
          addedIsShown: false
        },
        dialogIsShown: false,
        itemId: null
      }
    },
    methods: {
      ...mapActions('company', ['deleteCompany', 'setNewCompany']),
      ...mapActions('user', ['deleteUser', 'setNewUser']),
      openDialog() {
        this.dialogIsShown = true
      },
      closeDialog() {
        this.dialogIsShown = false
        this.form =  {
          editIsShown: false,
          deleteIsShown: false,
          addedIsShown: false
        }
      },
      editDialog(itemId) {
        this.itemId = itemId
        this.form.editIsShown = true
        this.openDialog()
      },
      deleteDialog(itemId) {
        this.itemId = itemId
        this.form.deleteIsShown = true
        this.openDialog()
      },
      deleteItemById(itemId) {
        if(this.name === names.COMPANY) {
          this.deleteCompany(itemId)
        } else {
          this.deleteUser(itemId)
        }
        this.closeDialog()
      },
      addNewItem(item) {
        if(this.name === names.COMPANY) {
          this.setNewCompany(item)
        } else {
          this.setNewUser(item)
        }
        this.closeDialog()
      }
    }
  }
</script>

<template>
  <div class="section mt-12 container">
    <div class="d-flex align-center justify-space-between">
      <h2>{{ name }}</h2>
      <app-button label="Добавить" @click="openDialog()" />
    </div>

    <section-card-body
      :list="list"
      @edit-dialog="editDialog($event)"
      @delete-dialog="deleteDialog($event)"
      @close-dialog="closeDialog()"
    />

    <section-card-footer
      :item-id="itemId"
      :form="form"
      :name="name"
      :dialog-is-shown="dialogIsShown"
      @delete-by-id="deleteItemById($event)"
      @add-new-item="addNewItem($event)"
      @close-dialog="closeDialog()"
    />
  </div>
</template>
