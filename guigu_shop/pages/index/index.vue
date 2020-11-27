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
			<view :class="navIndex===-1?'scroll-item active':'scroll-item'"  @click="handleChangeNavIndex(-1)">推荐</view>
			<view :class="navIndex===index?('scroll-item active'):'scroll-item'"  @click="handleChangeNavIndex(index)" v-for="(kingKong,index) in contentData.kingKongModule.kingKongList" :key="kingKong.L1Id">{{kingKong.text}}</view>
		</scroll-view>
		
		<scroll-view scroll-y="true" class="scroll-view-container" >

			<Recommend :contentData="contentData" v-if="navIndex===-1" />
			<cateList  v-else  :navIndex="navIndex"  />
		</scroll-view>
		
	</view>
</template>

<script>
	// 引入ajax函数
	import ajax from '../../utils/ajax.js'
	// 引入recommend组件
	import Recommend from '../../components/Recommend/Recommend.vue'
	// 引入cateList组件
	import cateList from '../../components/cateList/cateList.vue'
	export default {	
		components:{
			Recommend,
			cateList
		},
		data() {
			return {
				title: 'Hello',
				contentData:{},//所有的请求回来的数据
				navIndex:-1
			}
		},
		// 界面刚好加载的生命周期回调函数
		async onLoad() {
			// console.log('onload111')
			const result=await ajax('/getIndexDatas')
			// console.log(result)
			// 更新状态数据
			this.contentData=result
		},
		methods: {
		// 定义一个方法,用来切换选中的头部导航栏的样式
		handleChangeNavIndex(index){
			this.navIndex=index
			console.log(this.navIndex)
		}
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

	.scroll-view-container
		height calc(100vh - 140upx - var(--window-bottom) - var(--window-top))
</style>
