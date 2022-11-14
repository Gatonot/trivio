<script>
  import { mapGetters } from 'vuex'
  import AppCard from '@/components/AppCard.vue'
  import ButtonIcon from '@/components/ui/ButtonIcon.vue'
  import DeleteIcon from '@/components/icon-svg/DeleteIcon.vue'
  import EditIcon from '@/components/icon-svg/EditIcon.vue'

  export default {
    name: 'SectionCardBody',
    components: {
      AppCard,
      ButtonIcon,
      DeleteIcon,
      EditIcon
    },
    props: {
      list: {
        type: Array,
        required: true
      }
    }
  }
</script>

<template>
  <div class="section-card-body">
    <app-card
        v-for="(item, index) in list"
        :key="index"
        class="app-card"
        @click="$emit('edit-dialog', item.id)"
    >
      {{ item.name }}

      <template #actions>
        <div class="actions">
          <button-icon class="delete-icon" @click.stop="$emit('delete-dialog', item.id)">
            <delete-icon color="#fff" />
          </button-icon>
          <button-icon class="edit-icon" @click.stop="$emit('edit-dialog', item.id)">
            <edit-icon color="#fff" />
          </button-icon>
        </div>
      </template>
    </app-card>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/variables.scss';

  .section-card-body {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .app-card {
    flex: 1 1 calc(100% / 4 - 20px);
    cursor: pointer;

    .actions {
      opacity: 0;
      transition: .3s;
    }
    &:hover .actions {
      opacity: 1;
    }
  }
  .delete-icon {
    background: rgb(243, 73, 73);
    position: absolute;
    top: -5px;
    right: 10px;
  }
  .edit-icon {
    background: rgb(37, 98, 211);
    position: absolute;
    top: -5px;
    right: 50px;
  }
</style>