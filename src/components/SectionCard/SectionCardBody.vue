<script>
  import { names } from '@/constants/names.js'
  import AppCard from '@/components/AppCard.vue'
  import ButtonIcon from '@/components/ui/ButtonIcon.vue'
  import DeleteIcon from '@/components/icon-svg/DeleteIcon.vue'
  import EditIcon from '@/components/icon-svg/EditIcon.vue'
  import { mapGetters } from "vuex";

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
      },
      name: {
        type: String,
        required: true
      }
    },
    computed: {
      ...mapGetters('company', ['getTransformCompanies']),
      multiCard() {
        return names.USERS === this.name
      }
    },
    methods: {
      companyName(id) {
        return this.getTransformCompanies[id]
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

      <div v-if="multiCard">
        <footer class="card-footer">
          <p class="company-name">{{ companyName(item.companyId) }}</p>
          <div class="divider"></div>
          <p class="name">
            {{ item.name }}
            <span class="birthday">{{ `(${item.birthday})` }}</span>
          </p>
        </footer>
      </div>
      <div v-else>
        {{ item.name }}
      </div>

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

  .card-footer {

    .name {

    }
    .birthday {
      color: $black-color;
      opacity: .7;
    }
  }
  .divider {
    flex: 1 1 0;
    background: $black-color;
    height: 1px;
    opacity: .1;
    margin: 10px 0;
  }
  .company-name {
    font-weight: 700;
    font-size: 20px;
  }
</style>