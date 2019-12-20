<template>
  <div class="headNavBar">
    <van-nav-bar
      :title="title"
      :right-text="button"
      left-text="返回"
      left-arrow
      fixed
      :z-index="zIndex"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 
    <h3>这是导入子类------子类使用父类data</h3>
    <h3>{{navbar.changeNumber}}</h3> -->
  </div>
</template>

<script>
  export default {
    props :{
      navbar: Object ,
    },
    data (){
      return {
        title: 'loading...',
        button: 'loading...',
        zIndex: 100
      }
    },
    mounted: function () {
      this.title = this.navbar.title
      this.button = this.navbar.submit
    },
    methods: {
      onClickLeft() {
        this.$emit('btnGoBack', this.navbar.title)
      },
      onClickRight() {
        this.$emit('btnSubmitClick', this.navbar.title)
      }
    }
  }
</script>

<style>
</style>