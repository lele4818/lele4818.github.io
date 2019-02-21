<template>
  <div id="app" v-cloak>
		<div class="wrapperDiv">
			<router-view></router-view>
		</div>
		<footer>
			<span class="labspan">Copyright © 2019 | Powered by</span>
			<a href="https://buttercms.com" target="_blank">
				<img class="butter-logo" src="./assets/butter-b.png" alt="">
			</a>
		</footer>
  </div>
</template>

<script>
export default {
  name: 'App',
	data(){
		return{
			
		}
	},
	methods:{},
	mounted(){}
}
</script>

<style>
[v-cloak] {
  display: none;
}
html,body{
 height: 100%;
}
#app{
	font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	color: #2c3e50;
	width: 100%;
	height: 100%;
	min-height: 610px;
}
#app .labspan{
	vertical-align: middle;
}
#app footer{
	height: 10%;
	flex-wrap: wrap;
	vertical-align: middle;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
}
#app .butter-logo{
	margin-left: 15px;
	width: 130px;
	display: inline-block;
	vertical-align: middle;
}
#app .wrapperDiv{
	position: relative;
	padding-top: 30px;
}
#app .wrapperDiv,footer{
	margin: 0 auto;
}
#app .wrapperDiv{
	height: 90%;
	width: 100%;
}
::-webkit-scrollbar  
{  
    width: 5px;  /*滚动条宽度*/
    height: 5px;  /*滚动条高度*/
}  
  
/*定义滚动条轨道 内阴影+圆角*/  
::-webkit-scrollbar-track  
{  
    border-radius: 2.5px;  /*滚动条的背景区域的圆角*/
    background-color: #FFFFFF;/*滚动条的背景颜色*/  
}  
  
/*定义滑块 内阴影+圆角*/  
::-webkit-scrollbar-thumb  
{  
    border-radius: 2.5px;  /*滚动条的圆角*/
    background-color: #D3D3D3;  /*滚动条的背景颜色*/
}
</style>
