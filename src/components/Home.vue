<template>
	<div id="home">
		<div class="top">
			<div class="pic"></div>
			<div class="info">
				<h1>Tree
					<a href="https://github.com/lele4818" target="_blank" class="link">
						<i class="icon"></i>
					</a>
				</h1>
				<p class="tag">some notes for growing up...</p>
			</div>
		</div>
		<ul>
			<li v-for="(item,index) in list">
				<router-link :to="'/article/' + item.slug" class="link">{{item.title}}</router-link>
				<span v-html="getDate(item.published)" class="date"></span>
			</li>
		</ul>
	</div>
</template>

<script>
import butter from "@/butter.js"
export default{
	name: 'Home',
	data(){
		return{
			list:[],//博客列表
		}
	},
	methods:{
		getData(){
			butter.butter.post.list({page: 1, page_size: 10}).then((response) =>{
				console.log(response)
				this.list = response.data.data;
			});
		},
		getDate(time){
			let d = new Date(time);
			return "/"+ d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
		}
	},
	mounted(){
		this.$nextTick(()=>{
			this.getData();
		});
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
		margin-top: 50px;
	}
	#home li{
		line-height: 40px;
		list-style: none;
	}
	#home .link{
		font-size: 18px;
		color: #2c3e50;
		text-decoration: none;
	}
	#home .link:hover{
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
	#home.info{
		padding-left: 50px;
		margin-top: 15px;
	}
	.info h1{
		line-height: 27px;
		display: inline-flex;
	}
	.info h1 a{
		margin-left: 15px;
	}
	.icon{
		display: inline-block;
		width: 30px;
		height: 30px;
		background-image: url(../assets/github.png);
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}
	.icon :hover{
		background-color:red ;
	}
	#home .tag{
		color: #9a9a9a;
	}
</style>
