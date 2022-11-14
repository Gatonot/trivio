<script>
	export default {
		name: 'AppButton',
		props: {
			label: {
				type: String,
				required: true
			}
		}
	}
</script>

<template>
	<button class="app-button">
		{{ label }}
	</button>
</template>

<style lang="scss" scoped>
	@import '@/assets/variables.scss';

	.app-button {
    font-size: 18px;
		border: none;
		background: $primary-color;
		color: #ffffff;
		padding: 12px 20px;
		border-radius: 10px;
		cursor: pointer;
    font-weight: 400;
	}
</style>