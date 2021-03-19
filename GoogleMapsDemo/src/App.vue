<template>
  <div>
    <Header />

    
    

    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>


<script>

import Header from './components/Header'






export default {
  name:'app',
  components:{
    Header,
  },

  
}
</script>

<style>
#app{
  height: 100%;
  display: grid;
}
</style>
