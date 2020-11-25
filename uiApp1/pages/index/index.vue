<template>
	<view class="home-container">
		<!-- 头部-->
		<view class="home-container-header">
			<view class="home-container-logo">
				<image src="/static/images/logo.png" mode=""></image>
			</view>
			<view class="home-header-input">
				<i class="iconfont icon-sousuo"></i>
				<input type="text" value="" placeholder="搜索商品" placeholder-class="header-input-pla" />
			</view>
			<view class="hone-header-btn">
				哈哈
			</view>	
		</view>
		<!-- 头部导航栏 -->
		<view class="home-header-nav" v-if="indexData.kingKongModule">
			<scroll-view scroll-x="true" class="home-scroll-view">
				<view class="scroll-item-nav active">推1221荐</view>
				<view class="scroll-item-nav" v-for="kingKong in indexData.kingKongModule.kingKongList" :key="kingKong.L1Id">{{kingKong.text}}</view>
			</scroll-view>
		</view>
	</view>

</template>

<script>
	//  引入ajax
	import ajax from '../../utils/ajax.js'
	export default {
		data() {
			return {
				title: 'Hello',
				indexData:{}
			}
		},
		async	onLoad() {
		const result=await ajax()
		console.log(result)
		this.indexData=result
		},
		methods: {

		}
	}
</script>

<style lang="stylus">
.home-container-header
	font-size 24upx
	display flex
	align-items center
	padding 20upx 0
	.home-container-logo
		flex-shrink 0
		padding 0 20upx
		image
			width 140upx
			height 40upx
	.home-header-input
		background-color #ededed
		position relative
		width 100%
		border-radius 10upx
		input
			padding-left 60upx
			text-indent -40upx
			
		.header-input-pla
			text-align center
		.icon-sousuo
			position absolute
			top 50%
			transform translateY(-50%)
			left 20upx
		
	.hone-header-btn
		flex-shrink 0
		text-align center
		margin 0 20upx
		box-sizing border-box
		width 144upx
		height 52upx
		line-height 52upx
		border 2upx solid #ddd
		border-radius 10upx
//头部导航栏
.home-scroll-view
	white-space nowrap
	.scroll-item-nav
		font-size 28upx
		display inline-block
		width 140upx
		height 60upx
		line-height 60upx
		text-align center
		margin 0 10upx
		position relative
		&.active::after
			content ""
			display block
			height 2upx
			width 100%
			background-color #bb2c08
			position absolute
			bottom 2upx
		
	
</style>
		
			
			
