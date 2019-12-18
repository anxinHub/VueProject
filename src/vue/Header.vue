<template>
    <div class="headNavBar">
        <van-nav-bar
                :title="title"
                :right-text="button"
                left-arrow
                fixed
                :z-index="zIndex"
                @click-left="onClickLeft"
                @click-right="onClickRight"
        />
    </div>
</template>

<script>
    export default {
        props :{navbar: Object},
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