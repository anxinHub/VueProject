<template>
    <div>
        <van-row class="exReviewNav">
            <van-col span="8">
                <router-link to="/expenseReview/backlog" tag="span">待办</router-link>
            </van-col>
            <van-col span="8">
                <router-link to="/expenseReview/expenseUnderway" tag="span">进行中</router-link>
            </van-col>
            <van-col span="8">
                <router-link to="/expenseReview/expenseComplete" tag="span">完成</router-link>
            </van-col>
        </van-row>
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
.exReviewNav{
    background: white;
    height: 11.0vw;
    text-align: center;
    line-height: 11.0vw;
}
.router-link-active{
    display: inline-block;
    height: 11.0vw;
    border-bottom: 3px solid #4C95EF;
    color: #4A90E2;
}
</style>