<template name="page-header">
	<view class="uni-page-head">
		<uni-icons :type="icon"></uni-icons>
		<text class="uni-page-head-title title-style">{{title}}</text>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		components: {uniIcons},
		name: "page-header",
		props: {
			title: {
				type: String,
				default: ""
			},
			icon: {
				type: String,
				default: ""
			}
		}
	}
</script>

<style>
	.uni-page-head{
		position: fixed;
		top: 0;
		width: 100%;
		box-sizing: border-box;
		left: 0;
		z-index: 999;
		background: #f7f7f7;
	}
</style>
