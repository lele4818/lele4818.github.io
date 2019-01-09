<template>
	<div id="page" v-cloak>
		<Page :current="1" :total="Math.ceil(meta.count/size)*10" @on-change="changePage" simple />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				current:1//页码
			};
		},
		props:['meta','size'],
		methods:{
			changePage(index){
				this.current = index;
				this.$emit("getIndex",index);
			}
		}
	}
</script>

<style scoped>
	[v-cloak] {
	  display: none;
	}
	#page{
		position: absolute;
		bottom: 0;
		width: 100%;
    text-align: center;
	}
		
</style>
