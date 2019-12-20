<template>
  <div>
    <!-- <h1 class="title">{{name}}</h1>
    <button @click="increment">按钮</button>
    <h2>{{message}}</h2> -->
    <Cpn/>
  </div>
</template>

<script>
  import Cpn from "./Cpn"
  export default {
    name: "axCompApp",
    components:{
      Cpn
    },
    data() {
      return {
        message: "正在使用main引入.vue文件，该文件定义了data、methods、template及其他.vue文件的引入",
        name: "Hello components template .Vue"
      };
    },
    methods: {
      increment: function() {
        console.log("按钮被执行");
      }
    }
  };
</script>

<style scoped>
  /* .title {
    color: red;
  } */
</style>

