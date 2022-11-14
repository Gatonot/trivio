<script>
	import AppLogo from '@/components/icon-svg/AppLogo.vue'
	import HeaderMenu from './HeaderMenu.vue'
	import NavigationsMenu from './NavigationsMenu.vue'

	export default {
		name: 'TheHeader',
		components: {
			AppLogo,
			HeaderMenu,
			NavigationsMenu
		},
		data() {
			return {
				isMobile: false
			}
		},
		mounted() {
			window.addEventListener('resize', this.setBreakpoint)
			this.setBreakpoint()
		},
		methods: {
			setBreakpoint() {
				this.isMobile = window.innerWidth <= 1024
			}
		}
	}
</script>

<template>
	<header class="header">
		<div class="container">
			<router-link to="/">
				<app-logo />
			</router-link>
			<header-menu class="header-menu" v-if="!isMobile" />
			<navigations-menu class="navigations-menu" v-if="!isMobile" />
			<!-- todo: create component for user-profile -->
			<div class="user-profile">
				aa
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
	@import '@/assets/variables.scss';

	.header {
		background: $white-color;
		padding: 38px 0 22px;

		.container {
			display: flex;
			align-items: center;
		}

		.header-menu {
			margin-left: 60px;

			@media (max-width: $breakpoint-md) {
				margin-left: 30px;
			}
		}
		.navigations-menu {
			margin-left: auto;
		}
		.user-profile {
			margin-left: 22px;
			font-size: 18px;
			font-weight: 700;
			padding: 6px 8px 10px;
			color: $primary-color;
			border-radius: 6px;
			transition: .3s;
			cursor: pointer;

			&:hover {
				background: $primary-color;
				color: $white-color;
			}
		}
	}
</style>
