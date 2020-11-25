<template>
	<view class="index-content" >
		<!-- 头部 -->
		<view class="index-content-header">
			<image src="/static/images/logo.png" mode="" class="header-content-logo"></image>
			<view class="header-content-input">
				<i class="iconfont icon-sousuo"></i>
				<input type="text" value="" placeholder="请输入搜索内容" placeholder-class="header-ipt-pla" class="header-content-ipt" />
			</view>
			<button class="header-content-btn" >哈哈</button>
		</view>
		<!-- 头部导航栏 -->
		<scroll-view scroll-x="true" class="scroll-view-content" v-if="contentData.kingKongModule">
			<view class="scroll-item active">推荐</view>
			<view class="scroll-item"  v-for="(kingKong,index) in contentData.kingKongModule.kingKongList" :key="kingKong.L1Id">{{kingKong.text}}</view>
		</scroll-view>
	</view>
</template>

<script>
	// 引入ajax函数
	import ajax from '../../utils/ajax.js'
	export default {
		data() {
			return {
				title: 'Hello',
				contentData:{}
			}
		},
		// 界面刚好加载的生命周期回调函数
		async onLoad() {
			console.log('onload111')
			const result=await ajax('/getIndexDatas')
			console.log(result)
			// 更新状态数据
			this.contentData=result
		},
		methods: {

		}
	}
</script>

<style lang="stylus" >
	.index-content-header
		display flex
		align-items center
		font-size 24upx
		margin-top 10upx
		.header-content-logo
			width 140upx
			height 40upx
			flex-shrink 0
			margin 0 20upx
		.header-content-input
			border-radius 6upx
			background-color #ededed
			width 100%
			position relative
			.header-ipt-pla
				text-align center
				text-indent -40upx
			.icon-sousuo
				position absolute
				top 50%
				left 20upx
				transform translateY(-50%)
			.header-content-ipt
				padding-left 60upx
		.header-content-btn
			flex-shrink 0
			height 52upx
			line-height 52upx
			text-align center
			margin 0 10upx
			font-size 24upx
	.scroll-view-content
		// margin-top 20upx
		white-space nowrap
		font-size 28upx
		
		.scroll-item
			display inline-block
			width 140upx
			height 80upx
			line-height 80upx
			// padding 0 10upx
			margin 0 10upx
			text-align center
			position relative
			&.active::after
				display block
				height 2upx
				content ''
				position absolute
				bottom 2upx
				background-color #bb2c08
				width 100%
			
</style>
