<script>
  export default {
    name: 'HeaderMenu',
    data() {
      return {
        navigationsLinks: [
          { routeName: '/', name: 'Рабочий стол' },
          { routeName: '/company', name: 'Компании' },
          { routeName: '/users', name: 'Пользователи' },
        ]
      }
    }
  }
</script>

<template>
  <div class="header-menu">
    <router-link
      v-for="(link, index) in navigationsLinks"
      :key="index"
			:to="link.routeName"
			class="header-menu__item"
    >
      {{ link.name }}
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
	@import '@/assets/variables.scss';

	.header-menu {
		display: flex;
		gap: 20px;

		&__item {
			color: $gray-color;
			font-size: 14px;
			padding: 6px 0;
			border-bottom: 1px solid transparent;
			transition: .3s;

			&:hover {
				color: $primary-color;
				border-bottom: 1px solid $primary-color;
			}
		}

    @media (max-width: $breakpoint-md) {
      gap: 10px;
    }
	}
</style>