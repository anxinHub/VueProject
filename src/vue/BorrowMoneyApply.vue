<template>
  <div class="reimApplyList">
    <!-- 子类使用父类data
      <h3>{{navbar.changeNumber}}</h3>
      <input @click="navbar.changeNumber++" type="button" value="这是改变父类">
      <Header :navbar="navbar"/> -->

    <Header :navbar="navbar" @btnSubmitClick="btnSubmitClick" @btnGoBack="btnGoBack"/>

  </div>
</template>

<script>
  import Header from './Header.vue'
  export default {
    data () {
      return {
        navbar: {//导航栏数据
          title: '借款申请',
          submit: '新建',
          changeNumber: 100
        },
      }
    },
    methods:{
      btnSubmitClick: function (data) {//header右侧新建按钮点击事件
        if (data === this.navbar.title){
          this.newApplyClick = true
        }
      },
      btnGoBack:function (data) {//header左侧返回按钮
        if (data === this.navbar.title){
          this.$router.push({path: `/navigation`})
        }
      },
      popClick:function () {//弹出层点击事件
        this.newApplyClick = false
      },
      gotoNewApply:function () {
        this.$router.push({path: `/newApplication`})
      },
      gotoNewTraApply: function () {
        this.$router.push({path: `/newTravelApplication`})
      },
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading = false;
          this.reload();
        }, 500);
      }
    },
    components: {
      Header
    }
  }
</script>

<style scoped>
</style>