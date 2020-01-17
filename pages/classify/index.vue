<template>
	<view class="classify">
		<page-header title="分类"></page-header>
		<view class="search uni-flex">
			<image src="https://img.kemanyun.com/kemanyun/1105/2019-05-28/5cecfc5c2981a.png" mode=""></image>
			<input type="text" value="商品名称" class="uni-flex-item placeholder-class"/>
		</view>
		<view class="center uni-flex-item">
			<view class="left">
				<scroll-view scroll-y="true" class="scroll-Y">
					<view :id="'demo'+item.id" class="scroll-view-item" :class="{active: index==activeIndex}" v-for="(item, index) in classifyList" :key="index" @tap="choose" :data-index="index">{{item.name}}</view>
				</scroll-view>
			</view>
			<view class="right">
				<classify-list :goodsList="goodsList" @godetail="godetail"></classify-list>
			</view>
		</view>
	</view>
</template>

<script>
	import classifyList from '../component/classifyList/index.vue'
	export default{
		components: {
			classifyList
		},
		data() {
			return {
				activeIndex: 0,
				classifyList: [
					{ name: '全部', id: ''},
					{ name: '新品', id: ''},
					{ name: '套餐', id: ''},
					{ name: '水果', id: ''},
					{ name: '奶茶', id: ''},
					{ name: '轻食', id: ''},
					{ name: '甜点', id: ''},
					{ name: '休闲食品', id: ''},
					{ name: '大师系列', id: ''}
				],
				goodsList: [
					{ src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
					price: 12.00, count:200, id: 1, name: '智利车厘子'},
					{ src: 'https://images.pexels.com/photos/5929/food-salad-dinner-eating.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
					price: 12.00, count:56, id: 5, name: '柚子'},
					{ src: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
					price: 12.00, count:23, id: 2, name: '菠萝蜜越吃越美丽'},
					{ src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
					price: 12.00, count:49, id: 3, name: '奶油草莓'},
					{ src: 'https://images.pexels.com/photos/5929/food-salad-dinner-eating.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
					price: 12.00, count:56, id: 5, name: '柚子'},
					{ src: 'https://images.pexels.com/photos/255501/pexels-photo-255501.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
					price: 12.00, count:98, id: 4, name: '雪莲果'},
					{ src: 'https://images.pexels.com/photos/5929/food-salad-dinner-eating.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
					price: 12.00, count:56, id: 5, name: '柚子'},
					
				]
			}
		},
		methods: {
			choose (e) {
				this.activeIndex = e.currentTarget.dataset.index
			},
			godetail(e) {
				console.log('on' , e)
			}
		}
	}
</script>

<style scoped>
	.classify {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.search {
		height: 62upx;
		width: 80%;
		background: #ededed;
		border-radius: 62upx;
		align-items: center;
		padding: 0 30rpx;
		box-sizing: border-box;
		position: fixed;
		top: 112upx;
		left: 10%;
	}
	.search image{
		width: 28upx;
		height: 28upx;
		margin-right: 10upx;
	}
	.center{
		padding-top: 190upx;
	}
	.left{
		position: fixed;
		left: 0;
		width: 200upx;
	}
	.right{
		margin-left: 200upx;
		background: #fff;
		height: 1000upx;
	}
	.scroll-view-item{
		height: 80upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.active{
		background-color: #fff;
		position: relative;
	}
	.active::before{
		display: inline-block;
		content: '';
		width: 3px;
		height: 100%;
		background-color: #c72922;
		position: absolute;
		left: 0;
	}
</style>
