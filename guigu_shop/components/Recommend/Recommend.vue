<template>
	<view class="recommend-container">
		<!-- 头部轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="header-nav-banner">
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/1a75b1f4017cc206b5f397b23545da3b.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/13659fc9e3918cb9bc9d1338a27ad8f2.png?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/4a2f6e6678fb8e37d69142505f90294d.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="recommend-good-server">
			<view class="recommend-server-item" v-for="policyDesc in contentData.policyDescList" :key="policyDesc.icon">
				<image :src="policyDesc.icon" mode=""></image>
				<text>{{policyDesc.desc}}</text>
			</view>
		</view>
		<view class="recommend-nav-container" v-if="contentData.kingKongModule">
			<view class="recommend-nav-item" v-for="kingKong in contentData.kingKongModule.kingKongList" :key="kingKong.L1Id">
				<image :src="kingKong.picUrl" mode=""></image>
				<text>{{kingKong.text}}</text>
			</view>
		</view>
		<Category :contentData="contentData"/>
	</view>
</template>

<script>
// 引入category组件
import Category from '../Category/Category.vue'
export default{
data(){
	return {
	
	}
},
components:{
	Category
},
props:{
	contentData:{
		type:Object
	}
}

}
</script>

<style lang="stylus">
	.header-nav-banner
		.swiper-item
			width 100%
			height 100%
			image
				width 100%
				height 100%
	.recommend-good-server
		display flex
		justify-content space-around
		.recommend-server-item
			font-size 28upx
			height 50upx
			line-height 50upx
			image
				width 40upx
				height 40upx
				vertical-align middle
			text
				vertical-align middle
	.recommend-nav-container
		display flex
		flex-wrap wrap
		font-size 28upx
		.recommend-nav-item
			width 20%
			display flex
			flex-direction column
			align-items center
			image
				width 100upx
				height 100upx
				
</style>
