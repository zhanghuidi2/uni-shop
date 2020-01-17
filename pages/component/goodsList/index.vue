<template>
	<view class="goods-list uni-inline-item">
		<view class="goods-item" v-for="(item, index) in goodsList" :key="index" :data-id="item.id" @tap="goDetail">
			<image :src="item.src"></image>
			<text class="name uni-ellipsis">{{item.name}}</text>
			<view class="price">
				<text class="them-color font-family">¥{{item.price}}</text>
				<text>销售量：{{item.count}}</text>
			</view>
		</view>
	</view>
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
				console.log(e)
			}
		}
	}
</script>

<style scoped>
	.goods-list{
		font-size: 24upx;
		color: #666;
		display: flex;
		flex-wrap: wrap;
	}
	.goods-item{
		margin-right: 20upx;
		padding: 20upx;
		width: 330upx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}
	.goods-item image{
		width: 100%;
		height: 280upx;
		border-radius: 5upx;
	}
	.goods-item:nth-child(2n){
		margin-right: 0;
	}
	.name{
		color: #333;
		font-size: 28upx;
		height: 60upx;
		line-height: 60upx;
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
