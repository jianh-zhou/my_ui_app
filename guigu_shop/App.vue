<script>
	import ajax from './utils/ajax'
	export default {
		onLaunch: function() {
			wx.login({
				async success({code}){
					// console.log(me)
				const result=await ajax('/getOpenId',{code})
				console.log(result)
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="stylus">
	/*每个页面公共css */
	@import url("/static/iconfont/iconfont.styl");
	page
		height 100%
</style>
