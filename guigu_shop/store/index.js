import Vue from 'vue'
import Vuex from 'vuex'
import cateList from './cartList.js'
Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		cateList
	}
})