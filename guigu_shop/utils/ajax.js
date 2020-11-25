// 引入对应的请求地址对象
import config from './config.js'
let baseUrl
console.log(uni.getSystemInfoSync().platform)
let systemInfo= uni.getSystemInfoSync().platform;
if(systemInfo==="devtools"){
	// systenInfo的值是devtools说明是微信小程序工具运行的
	baseUrl=config.mpHost
}else if((systemInfo==="ios"||systemInfo==="android")&&process.env.NODE_ENV==="development"){
	baseUrl=config.h5Host
}

// 暴露一个函数,用来发送请求
export default function (url,data={},method="GET"){
	return new Promise((resolve,reject)=>{
		uni.request({
			method,
			url:baseUrl+url
		}).then((res)=>{
			// console.log('请求成功')
			resolve(res[1].data)
		}).catch(err=>{
			// console.log('请求失败')
			reject(err)
		})
	})

}
