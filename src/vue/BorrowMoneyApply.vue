<template>
  <div class="reimApplyList">
    <Header :navbar="navbar" @btnSubmitClick="btnSubmitClick" @btnGoBack="btnGoBack"/>
    <div class="headDiv">
      {{mesg}}
    </div>
  </div>
</template>

<script>
  import Header from './Header.vue'
  export default {
    data () {
      return {
        mesg: 'Header 测试'
      }
    },
    components: {
      Header
    }
  }
</script>

<style scoped>
</style>