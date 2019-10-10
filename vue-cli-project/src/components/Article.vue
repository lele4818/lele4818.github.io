<template>
	<div id="article" v-cloak>
		<router-link class="back-btn" to="/">
			<Icon type="md-arrow-round-back" /> Go back
		</router-link>
		<h1 class="title-h1">{{content.title}}</h1>
		<div class="loader" v-if="loading">
			<pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
		</div>
		<div id='content' v-else v-html="content.body" class="content" v-highlight></div>
	</div>
</template>

<script>
import butter from "@/butter.js"
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
	export default {
		data() {
			return {
				content:{},
				color:'#5CACEE',
				loading:true,
				size:"10px"
			};
		},
		components:{
			PulseLoader
		},
		methods:{
			getArticle(){
				document.body.style.cursor = 'wait';
				butter.butter.post.retrieve(this.$route.params.slug).then((res) => {
					this.loading = false;
					this.content = res.data.data;
					document.body.style.cursor = 'default';
				}).catch((res) => {
					console.log(res)
				})
			}
		},
		mounted() {
			this.$nextTick(()=>{
				this.getArticle();
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
#article{
    padding-left: 30px;
	padding-right: 30px;
	margin-right: 15px;
	height: 100%;
	overflow-y: auto;
}
.content{
	line-height: 25px;
	padding-top: 15px;
	border-top:1px solid #EAEAEA ;
	margin-top: 15px;
	font-size: 14px;
}
.content code{
	letter-spacing: initial;
}
.content h1{
	margin-bottom: 15px;
}
.loader{
	width: 100%;
	height: 80%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.back-btn{
	color: #2c3e50;
	font-size: 16px;
	text-decoration: underline;
}
.back-btn:hover {
    color: #57a3f3;
}
.title-h1{
	margin-top: 20px;
}
</style>
