<template>
	<scroll-view scroll-y="true" class="goods-list uni-inline-item">
		<view class="goods-item" v-for="(item, index) in goodsList" :key="index" :data-id="item.id" @tap="goDetail">
			<image :src="item.src"></image>
			<view class="right">
				<text class="name uni-ellipsis">{{item.name}}</text>
				<view class="price">
					<text class="them-color font-family">¥{{item.price}}</text>
					<text>销售量：{{item.count}}</text>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default{
		props:{
			goodsList: {
				type: Array,
				default: []
			}
		},
		methods: {
			goDetail(e) {
				console.log('出发')
				this.$emit('godetail',e)
			}
		}
	}
</script>

<style scoped>
	.goods-list{
		display: flex;
		flex-direction: column;
		font-size: 24upx;
		color: #666;
		height: 100%;
	}
	.goods-item{
		padding: 20upx;
		display: flex;
		width: 100%;
		box-sizing: border-box;
	}
	.goods-item image{
		width: 160upx;
		height: 160upx;
		margin-right: 20upx;
	}
	.name{
		color: #333;
		font-size: 28upx;
		height: 60upx;
		line-height: 60upx;
	}
	.right{
		height: 160upx;
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-between;
	}
	.price{
		height: 60rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #666;
		font-size: 24upx;
	}
</style>
