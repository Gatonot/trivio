<script>
  import SectionCard from '@/components/SectionCard/Index.vue'
  import { mapGetters } from 'vuex'
  import { names } from '@/constants/names.js'

  export default {
    name: 'UsersView',
    components: {
      SectionCard
    },
    data() {
      return {
        names
      }
    },
    computed: {
      ...mapGetters('user', ['getUsers'])
    }
  }
</script>

<template>
  <section-card :name="names.USERS" :list="getUsers" />
</template>

