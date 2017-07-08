<template>
  <div>	
  	<div class="match">比赛页面</div>
  	<router-link to="/match/all">所有</router-link>
  	<router-link to="/match/this">这个</router-link>
  	<router-link to="/match/that">那个</router-link>
  	<router-view></router-view>
  </div>
</template>

<script>
import game from '../../components/game/game'
export default {
 data(){
 	return {
 		games:[
 			"第一次",
 			"第一次",
 			"第一次",
 			"第一次",
 			"第一次",
 			"第一次"
 		]
 	}
 },
 components:{
 	game
 }
}
</script>

<style lang='scss' scope>
</style>
