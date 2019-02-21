<template>
	<div id="home">
		<div class="top">
			<div class="pic"></div>
			<div class="info">
				<h1>
					<a class="link_a" @click="showDrawer=true">Tree</a>
					<a href="https://github.com/lele4818" target="_blank" class="link_a">
						<Icon type="logo-github" />
					</a>
				</h1>
				<p class="tag">some notes for growing up...</p>
			</div>
		</div>
		<pulse-loader v-if="loading" :loading="loading" :color="color" :size="size" class="loading-style"></pulse-loader>
		<ul v-else>
			<li v-for="item in list" :key="item.slug">
				<router-link :to="'/article/' + item.slug" class="link">{{item.title}}</router-link>
				<span v-html="getDate(item.published)" class="date"></span>
			</li>
		</ul>
		<iview-page :meta='meta' @getIndex="getIndex" :size='pageSize'></iview-page>
		<Drawer title="Intro" placement="left" :closable="false" v-model="showDrawer">
			<div class="spin-wrapper">
				<p># 一个渴望不断成长的前端爱好者</p>
				<Spin></Spin>
			</div>
		</Drawer>
	</div>
</template>

<script>
import butter from "@/butter.js"
import Page from "./Page"
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default{
	name: 'Home',
	components:{
		'iview-page':Page,
		PulseLoader
	},
	data(){
		return{
			list:[],//博客列表
			meta:{},//博客数量
			index:1,//页码
			pageSize:7,//每页显示数量(iview分页simple版本,每页显示数量无法更换,人为写死)
			loading:true,//加载状态
			color:"#5CACEE",//加载项颜色
			size:"8px",//加载项尺寸
			showDrawer:false//侧栏抽屉
		}
	},
	methods:{
		getData(index,size){
			butter.butter.post.list({page: index, page_size: size}).then((response) =>{
				this.list = response.data.data;
				this.meta = response.data.meta;
				this.loading = false;
			});
		},
		getDate(time){
			let d = new Date(time);
			return "/"+ d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
		},
		getIndex(index){
			this.index = index
		}
	},
	mounted(){
		this.$nextTick(()=>{
			this.getData(this.index,this.pageSize);
		});
	},
	watch:{
		index(val,oldVal){
			this.loading = true;
			this.getData(val,this.pageSize);
		}
	}
}

</script>

<style scoped>
	html,body{
		width: 100%;
		height: 100%;
	}
	body{
		margin: 0;
	}
	#home{
		margin: 0 auto;
		height: 100%;
		position: relative;
	}
	#home li{
		line-height: 40px;
		list-style: none;
	}
	#home .link{
		font-size: 18px;
		color: #2c3e50;
	}
	#home .link:hover,.info a:hover{
		color: #409eff!important;
	}
	#home .date{
		color: #9a9a9a;
	}
	#home .top{
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		height: 40%;
	}
	#home .pic{
		width: 150px;
		height: 150px;
		background-image: url(../assets/AE86.png);
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		border-radius: 50%;
		box-shadow: 0 2px 12px 0 rgba(0,0,0,.5);
	}
	#home .info{
		margin-top: 25px !important;
		margin-bottom: 25px !important;
	}
	#home ul{
		height: 50%;
		overflow: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.info a{
		color: #2c3e50
	}
	.info .drawerSpan{
		cursor: pointer;
	}
	.info h1{
		line-height: 27px;
		display: inline-flex;
	}
	.info h1 a:last-child{
		margin-left: 15px;
	}
	#home .tag{
		color: #9a9a9a;
	}
	.spin-wrapper{
		width: 100%;
		height: 95%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.spin-wrapper p{
		margin-bottom: 30px;
	}
	.loading-style{
		text-align: center;
	}
</style>
