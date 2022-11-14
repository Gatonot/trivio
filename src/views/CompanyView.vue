<script>
  import SectionCard from '@/components/SectionCard/Index.vue'
  import { mapGetters } from 'vuex'
  import { names } from '@/constants/names.js'

	export default {
		name: 'CompanyView',
    components: {
      SectionCard
    },
    data() {
      return {
        names
      }
    },
    computed: {
      ...mapGetters('company', ['getCompanies'])
    }
	}
</script>

<template>
  <section-card :name="names.COMPANY" :list="getCompanies"/>
</template>

