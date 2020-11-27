import ajax from '../utils/ajax.js';
// import {
// 	SETINDEXDATAS
// } from '../mutation-types.js'
import Vue from 'vue'
const state ={
	cateList:[
		{
			"count":2,
		    "promId": 0,
		    "showPoints": false,
			"selected":false,
		    "itemTagList": [
		        {
		            "itemId": 1535004,
		            "tagId": 128111157,
		            "freshmanExclusive": false,
		            "name": "暖冬特惠",
		            "subType": 204,
		            "forbidJump": false,
		            "type": 2
		        }
		    ],
		    "rank": 1,
		    "id": 1535004,
		    "sellVolume": 4001,
		    "primaryPicUrl": "https://yanxuan-item.nosdn.127.net/f79906f1b1fe86420ea40473de66ec0e.png",
		    "soldOut": false,
		    "sortFlag": 0,
		    "commentCount": 0,
		    "onSaleTime": 1538101761748,
		    "picMode": 1,
		    "commentWithPicCount": 0,
		    "underShelf": false,
		    "status": 2,
		    "couponConflict": true,
		    "forbiddenBuy": false,
		    "promotionDesc": "暖冬特惠",
		    "limitedFlag": 204,
		    "pieceNum": 0,
		    "itemSizeTableDetailFlag": false,
		    "forbidExclusiveCal": false,
		    "rewardShareFlag": false,
		    "updateTime": 1575893634989,
		    "showCommentEntrance": true,
		    "pieceUnitDesc": "件",
		    "specialPromTag": "",
		    "counterPrice": 299,
		    "categoryL2Id": 0,
		    "retailPrice": 209,
		    "primarySkuPreSellPrice": 0,
		    "preLimitFlag": 0,
		    "itemPromValid": true,
		    "promTag": "暖冬特惠",
		    "source": 0,
		    "points": 0,
		    "primarySkuPreSellStatus": 0,
		    "extraServiceFlag": 0,
		    "flashPageLink": "",
		    "autoOnsaleTimeLeft": 0,
		    "innerData": {},
		    "saleCenterSkuId": 0,
		    "pointsStatus": 0,
		    "extraPrice": "",
		    "colorNum": 0,
		    "showTime": 0,
		    "autoOnsaleTime": 0,
		    "preemptionStatus": 1,
		    "isPreemption": 0,
		    "zcSearchFlag": false,
		    "name": "男式色拉姆内衣套装2.0",
		    "appExclusiveFlag": false,
		    "itemType": 1,
		    "listPicUrl": "https://yanxuan-item.nosdn.127.net/c2eeb1b872af1b8efc179a7515aacdaa.png",
		    "pointsPrice": 0,
		    "simpleDesc": "色拉姆发热面料，加厚升级",
		    "seoTitle": "",
		    "newItemFlag": false,
		    "buttonType": 0,
		    "primarySkuId": 1636062,
		    "displaySkuId": 1636056,
		    "productPlace": "",
		    "itemSizeTableFlag": false
		},
		{
			"count":5,
		    "promId": 0,
		    "showPoints": false,
			"selected":true,
		    "itemTagList": [
		        {
		            "itemId": 1536001,
		            "tagId": 128111157,
		            "freshmanExclusive": false,
		            "name": "暖冬特惠",
		            "subType": 204,
		            "forbidJump": false,
		            "type": 2
		        }
		    ],
		    "rank": 1,
		    "id": 1536001,
		    "sellVolume": 3634,
		    "primaryPicUrl": "https://yanxuan-item.nosdn.127.net/32b8b2d07b1c4327593a4a70993eeac2.png",
		    "soldOut": false,
		    "sortFlag": 0,
		    "commentCount": 0,
		    "onSaleTime": 1538101896296,
		    "picMode": 1,
		    "commentWithPicCount": 0,
		    "underShelf": false,
		    "status": 2,
		    "couponConflict": true,
		    "forbiddenBuy": false,
		    "promotionDesc": "暖冬特惠",
		    "limitedFlag": 204,
		    "pieceNum": 0,
		    "itemSizeTableDetailFlag": false,
		    "forbidExclusiveCal": false,
		    "rewardShareFlag": false,
		    "updateTime": 1575894115275,
		    "showCommentEntrance": true,
		    "pieceUnitDesc": "件",
		    "specialPromTag": "",
		    "counterPrice": 299,
		    "categoryL2Id": 0,
		    "retailPrice": 209,
		    "primarySkuPreSellPrice": 0,
		    "preLimitFlag": 0,
		    "itemPromValid": true,
		    "promTag": "暖冬特惠",
		    "source": 0,
		    "points": 0,
		    "primarySkuPreSellStatus": 0,
		    "extraServiceFlag": 0,
		    "flashPageLink": "",
		    "autoOnsaleTimeLeft": 0,
		    "innerData": {},
		    "saleCenterSkuId": 0,
		    "pointsStatus": 0,
		    "extraPrice": "",
		    "colorNum": 0,
		    "showTime": 0,
		    "autoOnsaleTime": 0,
		    "preemptionStatus": 1,
		    "isPreemption": 0,
		    "zcSearchFlag": false,
		    "name": "女式色拉姆内衣套装2.0",
		    "appExclusiveFlag": false,
		    "itemType": 1,
		    "listPicUrl": "https://yanxuan-item.nosdn.127.net/02b61fb5700aed6761b7524d98ed0837.png",
		    "pointsPrice": 0,
		    "simpleDesc": "色拉姆发热面料，加厚升级",
		    "seoTitle": "",
		    "newItemFlag": false,
		    "buttonType": 0,
		    "primarySkuId": 1634105,
		    "displaySkuId": 1634104,
		    "productPlace": "",
		    "itemSizeTableFlag": false
		}
	]
}

const mutations ={
	//添加购物车
	ADD_SHOP_CART(state,goodItem){
		console.log(goodItem)
		const good=state.cateList.find(item=>item.id===goodItem.id)
		 if(good){
			 good.count=good.count+1
		 }else{
			 Vue.set(goodItem,'count',1)
			 Vue.set(goodItem,'selected',false)
			 state.cateList.push(goodItem)
			}
			console.log(state.cateList)
	},
	// 修改购物车商品数量
	CHANGE_NUM(state,{type,index}){
		// 判断是增加还是减少
		if(type){
			state.cateList[index].count+=1
		}else{
			const count=state.cateList[index].count
			// 判断数量是否小于1,如果小于1,则直接让对应购物车数据消失
			if(count<=1){
				state.cateList.splice(index,1)
				return
			}
			state.cateList[index].count=count-1
		}
	},
	// 修改当前商品是否被选中的状态
	SELECTED(state,index){
		const selectedState=state.cateList[index].selected
		state.cateList[index].selected=!selectedState
	},
	// 修改所有商品选中状态
	SELECTED_ALL(state,selectedAll){
		state.cateList.forEach(item=>item.selected=!selectedAll)
	}
}

const actions ={
	
}

const getters ={
	//根据数据计算出全选的状态
	isSelectedAll(state){
		return state.cateList.length&&state.cateList.every(item=>item.selected)
	},
	
	// 根据数据计算出商品的的总件数
	slecetGoodsNum(state){
		return state.cateList.reduce((pre,item)=>{
			pre=pre+(item.selected?item.count:0)
			return pre
		},0)
	},
	//计算所有商品的价格
	selectedGoodsPirce(state){
		return state.cateList.reduce((pre,item)=>{
			pre=pre+(item.selected?item.count:0)*item.retailPrice
			return pre
		},0)
	}
}

export default{
	state,
	mutations,
	actions,
	getters
}