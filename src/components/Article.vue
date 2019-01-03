<template>
	<div id="article" v-cloak>
		<h1>{{content.title}}</h1>
		<div v-html="content.body" class="content"></div>
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
	width: 800px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin-top: 15px;
	height: 84%;
	overflow-y: auto;
}
.content{
	font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
	line-height: 25px;
	padding-top: 15px;
	border-top:1px solid #EAEAEA ;
	margin-top: 15px;
}
.content h1{
	margin-bottom: 15px;
}
</style>
