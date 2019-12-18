<template>
    <div style="background: white;" class="login">
        <van-image
                width="16vw"
                height="16vw"
                :src="img"
                class="logo"
        />
        <div class="logoTitle">
            <span class="font-size-35 font-green-1">Hi ! </span>
            <span class="font-size-20 font-green-1">欢迎使用医疗全面预算管理</span>
        </div>
        <van-cell-group class="loginVanCellGroup">
            <van-field
                    v-model="username"
                    label="工号"
                    placeholder="请输入登录工号"
            />
            <van-field
                    v-model="password"
                    :type="text"
                    label="密码"
                    :right-icon="icon"
                    placeholder="请输入登录密码"
                    @click-right-icon="turnText"
            />
            <van-field
                    v-model="department"
                    label="科室"
                    placeholder="请选择登录科室"
                    @focus="choiceDepartment"
            />
            <van-field/>
        </van-cell-group>
        <div class="loginFooter">
            <button class="font-green-1 font-size-16" @click="loginIn">登录</button>
            <van-checkbox v-model="checked" icon-size="4.0vw" class="font-size-14 loginFooterCheck">&nbsp;记住我</van-checkbox>
        </div>
        <van-popup v-model="showPicker" position="bottom">
            <van-picker
                    show-toolbar
                    :columns="columns"
                    @cancel="onCancel"
                    @confirm="onConfirm"
            />
        </van-popup>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                //img:require('../assets/img/LOGO.png'),
                username:'',
                password:'',
                department:'',
                text: 'password',//密码显示模式
                icon: 'closed-eye', //图标样式
                checked:false,//记住我checkboxvw
                showPicker:false,//科室列表弹出层
                columns:['科室一','科室二','科室三','科室四','科室五']//选择科室列表
            }
        },
        methods:{
            turnText: function () {//点击密码右侧按钮事件
                if (this.text === 'password'){
                    this.text = 'text'
                    this.icon = 'eye-o'
                }else {
                    this.text = 'password'
                    this.icon = 'closed-eye'
                }
            },
            choiceDepartment: function () {//点击科室事件
                this.showPicker = true
            },
            onCancel: function () {//选择科室列表取消按钮
                this.showPicker = false
            },
            onConfirm: function (value) {//选择科室列表确定按钮
                this.department = value
                this.showPicker = false
            },
            loginIn: function () {
                this.$router.push({path: `/navigation`})
            }
        }
    }
</script>

<style scoped>
.logo{
    margin-top: 15%;
    margin-left: 6.4%
}
.logoTitle{
    margin-left: 9.3%;
    margin-top: 7%
}
.loginVanCellGroup{
    margin-top: 15%;
}
.loginFooter {
    text-align: center;
    margin-top: 28.8%;
}
.loginFooter>button{
    width: 81.3%;
    height: 12.0vw;
    background: #F5FAFF;
    border: 0;
    margin-bottom: 2%;
}
.loginFooterCheck{
    margin-top: 2%;
    margin-left: 40%;
}
</style>