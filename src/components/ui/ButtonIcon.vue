<script>
	export default {
		name: 'ButtonDelete'
	}
</script>

<template>
	<button class="button">
		<slot />
	</button>
</template>

<style lang="scss" scoped>
	.button {
		border: none;
		background: transparent;
		border-radius: 6px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 8px;
		cursor: pointer;
		transition: .3s;

		&:hover {
			filter: brightness(.9)
		}
	}
</style>