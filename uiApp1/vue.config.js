// module.exports={
// 	devServer:{
// 		proxy:{
// 			'/api':{
// 				target:"http://localhost:1234",
// 				changeOrigin:true,
// 				ws:true,
// 				pathRewrite:{
// 				'^/api':'',
// 				}
// 			}
// 		}
// 	}
// }
module.exports={
	devServer:{
		proxy:{
			'/api':{
				target:"http://localhost:1234",
				changeOrigin:true,
				ws:true,
				pathRewrite:{
					'^/api':''
				}
			}
		}
	}
}