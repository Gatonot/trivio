<script>
	export default {
		name: 'AppCard'
	}
</script>

<template>
	<div class="card">
		<slot />

		<slot name="actions" />
	</div>
</template>

<style lang="scss" scoped>
	@import '@/assets/variables.scss';

	.card {
		padding: 36px 48px;
		border-radius: 20px;
		background: $white-color;
		position: relative;

		&::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 50%;
			width: 90%;
			margin: 0 auto;
			transform: translate(-50%, 30%);
			filter: blur(10px);
			height: 50px;
			background: rgba(120 120 120 / 10%);
			border-radius: 20px;
			z-index: -1;
		}
	}
</style>