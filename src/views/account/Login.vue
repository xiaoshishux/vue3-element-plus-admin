<template>
    <div class="form-wrap">
        <ul class="menu-tab">
            <li class="current">登录</li>
            <li>注册</li>
        </ul>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.menu-tab{
    text-align: center;
    li{
        display: inline-block;
        padding: 10px 24px;
        margin: 0 10px;
        color: red;
        font-size: 14px;
        border-radius: 5px;
        cursor: pointer;
        &.current{background-color: rgba(0,0,0, .1);}
    }
}
</style>