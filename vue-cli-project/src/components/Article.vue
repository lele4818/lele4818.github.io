<template>
	<div id="article" v-cloak>
		<router-link class="back-btn" to="/">
			<Icon type="md-arrow-round-back" /> Back
		</router-link>
		<h1 class="title-h1">{{content.title}}</h1>
		<div v-html="content.body" class="content" v-highlight></div>
	</div>
</template>

<script>
import butter from "@/butter.js"	
	export default {
		data() {
			return {
				content:{},
			};
		},
		methods:{
			getArticle(){
				butter.butter.post.retrieve(this.$route.params.slug).then((res) => {
					this.content = res.data.data;
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
	font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
	line-height: 25px;
	padding-top: 15px;
	border-top:1px solid #EAEAEA ;
	margin-top: 15px;
}
.content code{
	letter-spacing: initial;
}
.content h1{
	margin-bottom: 15px;
}
.back-btn{
	color: #2c3e50;
	font-size: 16px;
}
.back-btn:hover {
    color: #57a3f3;
}
.title-h1{
	margin-top: 20px;
}
</style>
