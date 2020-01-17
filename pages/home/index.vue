<template>
	<view class="home">
		<page-header title="首页"></page-header>
		<swiper class="swiper" autoplay="true" indicator-dots="false">
			<swiper-item>
				<view class="swiper-item">
					<image src="https://images.pexels.com/photos/3467150/pexels-photo-3467150.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://images.pexels.com/photos/3499174/pexels-photo-3499174.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="goods">
			<image src="../../static/images/goods.png" mode="aspectFit"></image>
			<text>为你推荐</text>
		</view>
		<goods-list :goodsList="goodsList"></goods-list>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import goodsList from "../component/goodsList/index.vue"
	export default {
		components: { uniIcons, goodsList },
		data() {
			return {
				keyWords: '',
				goodsList: [
					{ src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
					price: 12.00, count:200, id: 1, name: '智利车厘子'},
					{ src: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
					price: 12.00, count:23, id: 2, name: '菠萝蜜越吃越美丽'},
					{ src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
					price: 12.00, count:49, id: 3, name: '奶油草莓'},
					{ src: 'https://images.pexels.com/photos/255501/pexels-photo-255501.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
					price: 12.00, count:98, id: 4, name: '雪莲果'},
					{ src: 'https://images.pexels.com/photos/5929/food-salad-dinner-eating.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
					price: 12.00, count:56, id: 5, name: '柚子'},
				]
			}
		},
		onLoad() {
			uni.setTabBarBadge({
			  index: 2,
			  text: '1'
			})
		},
		methods: {
			onKeyInput: function(event) {
				this.keyWords = event.target.value
			},
		}
	}
</script>

<style scoped >
	.home {
		padding: 0 30upx;
	}
	.swiper{
		margin-top: 112upx;
	}
	.swiper image{
		width: 100%;
		height: 300upx;
		border-radius: 30upx;
	}
	.goods{
		display: flex;
		align-items: center;
		height: 80upx;
		padding: 0 40upx;
		color: #c72922;
	}
	.goods::after,.goods::before{
		display: flex;
		content: '';
		height: 1px;
		flex: 1;
		background: #c72922;
	}
	.goods image{
		width: 48upx;
		height: 48upx;
		margin-left: 30upx;
	}
	.goods text{
		margin-right: 30upx;
	}
</style>
