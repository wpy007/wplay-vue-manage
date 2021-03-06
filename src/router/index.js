import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 声明一堆路由对应的路径
// const home = r => require.ensure( [], () => r( require('@components/home') ), 'home' )
import Defaults from '../pages/404.vue'

import	Main from '../components/Main.vue'

import RouterA from '../pages/Router-a.vue'
import BDsearch from '../pages/BDsearch.vue'
import TMsearch from '../pages/TMallSearch.vue'

import Hackbg from '../pages/HackBg.vue'

import page1 from '../pages/page1.vue'
import page2 from '../pages/page2.vue'

// 上传图片
import PushImg from '../pages/PushImg.vue'

import highcharts from '../pages/highcharts.vue'
import table from '../pages/table.vue'

import music from '../pages/music.vue'
import video from '../pages/video.vue'

// 登录注册页面
import LR from '../components/LR.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'

const routes = [
	// 登录注册
	{
		path: '/LR',
		component: LR,
		/*
		 * 当你把路径放在child里面的时候，会自动识别router-view的层级的
		 */
		children: [
			{
				// 在children中，如果/login，那么router-link中to="/login"就可用了
				// 如果是login，那么to必须是/LR/Login
				// 上面就是children中path有没有 "/"的区别，有 / 代表子，没有代表可以自力更生
				path: '/Login',
				component: Login
			},
			{
				path: '/Register',
				component: Register
			},
			{
				path: '/',  // 可以取代父级path(这里是/LR)的存在
				redirect: '/Login'  // 这里只能写path里面的路径，不能写component里面的内容，并且，不能重定向到父级，这里的父级名为"/LR"
		
			}
		]	
	},
	// main页面
	{
		path: '/main',
		component: Main,
		children: [
			{path: '/BDsearch', component: BDsearch},
			{
				path: '/TMsearch',   //不知道:id怎么用，用了就会错，不用但是为什么会有那个api呢？
				component: TMsearch,
				children: [
					{
						path: 'page1',
						component: page1
					},
					{
						path: 'page2',
						component: page2
					}	

				]
			},
			{path: '/RouterA', component: RouterA},

			{path: '/hack-bg', component: Hackbg},

			// 音频视频
			{path: '/music', component: music},
			{path: '/video', component: video},
			// 导航二 ——ElementUI上传图片吧
			{path: '/pushImg', component: PushImg},

			// ：highcharts和table
			{path: '/highcharts', component: highcharts},
			{path: '/table', component: table},

			{path: '/', redirect: '/hack-bg'},  // 因为这句话的存在，访问/main默认来到这里
			{path: '/defaults', component: Defaults}
		]
	},
	
	
	// 原来重定向放在底部也是没有关系的啊
	// 窝草？这么写，竟然能够识别/defaults，明明是别人家的子层啊
	{path: '/', redirect: '/hack-bg'},  
	{path: '*', redirect: '/defaults'},	
	
]

// export
export default new VueRouter({
	// 使用mode去除#号
	mode: 'history',
	routes
})