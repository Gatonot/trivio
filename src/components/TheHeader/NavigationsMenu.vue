<script>
	import SearchIcon from '@/components/icon-svg/SearchIcon.vue'
	import AlertIcon from '@/components/icon-svg/AlertIcon.vue'
	import FavoritesIcon from '@/components/icon-svg/FavoritesIcon.vue'
	import SupportIcon from '@/components/icon-svg/SupportIcon.vue'
	import SettingsIcon from '@/components/icon-svg/SettingsIcon.vue'

	export default {
		name: 'NavigationsMenu',
		data() {
			return {
				color: '#AEB7C2'
			}
		},
		components: {
			SearchIcon,
			AlertIcon,
			FavoritesIcon,
			SupportIcon,
			SettingsIcon
		}
	}
</script>

<template>
	<nav class="navigations-menu">
		<search-icon :color="color" />
		<alert-icon :color="color" />
		<favorites-icon :color="color" />
		<support-icon :color="color" />
		<settings-icon :color="color" />
	</nav>
</template>

<style lang="scss" scoped>
	@import '@/assets/variables.scss';

	.navigations-menu {
		display: flex;
		align-items: center;
		gap: 20px;

		& > * {
			cursor: pointer;
			transition: .3s;

			&:hover {
				color: $primary-color;
			}
		}

		@media (max-width: $breakpoint-md) {
			gap: 10px;
		}
	}
</style>
