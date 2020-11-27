<template>
	<view class="cartContainer">
		<view class="title">购物车</view>
		
		<!-- 未登录时候的购物车 -->
		<block v-if="!userInfo.nickName">
			<view class="header">
				<text>30天无忧退货</text>
				<text>48小时快速退货</text>
				<text>满99元免邮费</text>
			</view>
			<view class="contentContainer">
				<image class="cartImg" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp" mode=""></image>
				<button @click="toLogin">登录</button>
				<view class="addMore">去添加点什么吧</view>
			</view>
		</block>
		
		<!-- 登陆之后的购物车 -->
		<block v-else>
			<view class="cartList">
				<view class="cartItem" v-for="(cart,index) in cateList" :key="cart.id" >
					<text  :class="(cart.selected?'iconfont icon-xuanzhong selected':'iconfont icon-xuanzhong')" @click="selected(index)" ></text>
					<view class="shopItem">
						<image class="shopImg" :src="cart.listPicUrl" mode=""></image>
						<view class="shopInfo">
							<text>{{cart.name}}</text>
							<text class="price">￥{{cart.retailPrice}}</text>
						</view>
					</view>
					<!-- 控制数量 -->
					<view class="countCtrl">
						<text class="add" @click="changeNum(true,index)"> + </text>
						<text class="count"> {{cart.count}} </text>
						<text class="del" @click="changeNum(false,index)"> - </text>
					</view>
				</view>
			</view>
			<!-- 底部下单 -->
			<view class="cartFooter">
				<text class='iconfont icon-xuanzhong' :class="isSelectedAll?'selected':''" @click="selectedAll(isSelectedAll)"></text>
				<text class="allSelected">已选 {{slecetGoodsNum}}</text>
				<view class="right">
					<text class="totalPrice">合计: ￥{{selectedGoodsPirce}}</text>
					<text class="preOrder">下单</text>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	// 引入辅助函数
	import {mapState,mapGetters,mapMutations} from 'vuex'
	export default {
		data() {
			return {
				userInfo:{},
			};
		},
		computed:{
			...mapState({cateList:state=>state.cateList.cateList}),
			...mapGetters(['isSelectedAll','slecetGoodsNum','selectedGoodsPirce'])
		},
		onLoad(){
			// getStorageSync
			const userInfo=uni.getStorageSync('userInfo')
			// console.log(userInfo)
			if(userInfo){
			this.userInfo=JSON.parse(userInfo)
					// console.log(userInfo)
			}
			console.log(this.cateList,'cateList')
		},
		methods:{
			// 使用辅助函数获取对应的mutations
			...mapMutations(['CHANGE_NUM','SELECTED','SELECTED_ALL']),
			// 点击登录
			toLogin(){
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},
			// 点击增加或者减少购物车数量
			changeNum(type,index){
				this.CHANGE_NUM({type,index})
			},
			// 修改对应商品的选中状态
			selected(index){
				this.SELECTED(index)
			},
			// 全选或者不全选商品选中状态
			selectedAll(slectedState){
				this.SELECTED_ALL(slectedState)
			}
		}
	}
</script>

<style lang="stylus">
	/* iconfont 公共样式 */
	.cartImg
		display block
		width 248upx
		height 248upx
		margin 300upx auto 50upx
		
		
	.cartContainer
		position relative
		background #f4f4f4
		height 100%
		.title
			font-size 32upx
			line-height 80upx
			margin-left 30upx
		.header
			display flex
			background #eee
			text
				width 33.333%
				height 80upx
				line-height 80upx
				text-align center
				font-size 26upx
		.contentContainer
			
			button
				width 480upx
				height 92upx
				background #DD1A21
				color #fff
				font-size 32upx
				line-height 92upx
			.addMore
				text-align center
				font-size 26upx
				color #7f7f7f
				line-height 60rpx
		.cartList
			.cartItem
				position relative
				display flex
				height 172upx
				background #fff
				margin-top 20upx
				padding 20upx
				.iconfont
					font-size 40upx
					line-height 172upx
					margin 0 40upx
					color #999
					&.selected
						color: #BB2C08
				.shopItem
					display flex 
					.shopImg
						width 172upx
						height 172upx
						background #eee
					.shopInfo
						font-size 28upx
						display flex
						flex-direction column
						margin-left 20upx
						text
							line-height 60upx
						.price
							color: #BB2C08
				.countCtrl
					position absolute
					right 20upx
					bottom 30upx
					text
						display inline-block
						width 60upx
						height 50upx
						text-align center
						line-height 50upx
						border 1upx solid #EEEEEE
						&:nth-child(2)
							border none
							border-top 1upx solid #EEEEEE
							border-bottom 1upx solid #EEEEEE
		.cartFooter
			position absolute
			display flex	
			bottom 0
			height 96upx
			line-height 96upx
			width 100%
			background #fff
			font-size 30upx
			.iconfont
				font-size 40upx
				margin 0 20upx
				color: #999
				&.selected
					color: #BB2C08
			.right 
				height 96upx
				position absolute
				right 0
				.totalPrice
					display inline-block
					height 96upx
					line-height 96upx
				.preOrder
					display inline-block
					background #DD1A21
					width 225upx
					height 96upx
					line-height 96upx
					text-align center
					font-size 28upx
					color #fff
					margin-left 30upx
		.hint
			text-align center
			font-size 28upx
					
</style>
