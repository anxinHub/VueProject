<template>
  <div id="app">
    <!-- <BorrowMoneyApply/> -->
    <!-- 
      <h2>----这是vuex的store里的属性</h2>
      <h2>{{$store.state.message}}</h2> 
    -->
    <Test/>
  </div>
</template>

<script>
  import BorrowMoneyApply from "./vue/BorrowMoneyApply"
  import Test from "./vue/test/vanNavBatTest"
  export default {
    components:{
      BorrowMoneyApply,
      Test
    }
  }
</script>

