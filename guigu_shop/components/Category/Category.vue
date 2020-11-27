<template>
	<view class="category-list-container">
		<view class="category-item-item" v-for="categoryModule in contentData.categoryModule" :key="categoryModule.titleSchemeUrl">
			<image :src="categoryModule.titlePicUrl" mode=""></image>
			<scroll-view scroll-x="true" class="category-scrollView-list" >
				<view class="category-scrollView-item" v-for="item in categoryModule.itemList" :key="item.listPicUrl">
					<image :src="item.listPicUrl" mode=""></image>
					<text>{{item.simpleDesc}}</text>
				</view>
			</scroll-view>	
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			contentData:{
				type:Object
			}
		}
	}
</script>

<style lang="stylus">
.category-list-container
	.category-item-item
		image
			height 340upx
			width 100%
		.category-scrollView-list
			white-space nowrap
			.category-scrollView-item
				display inline-block
				width 200upx
				// height 100%
				height 300upx
				margin 0 10upx
				// background #eeeeee
				text-align center
				vertical-align top
				image
					width 200upx
					height 200upx
					background-color #eeeeee
				text
					display -webkit-box
					text-overflow ellipsis
					-webkit-box-orient vertical
					-webkit-line-clamp 2
					overflow hidden
					font-size 28upx
					white-space: pre-wrap;

			
			
</style>
