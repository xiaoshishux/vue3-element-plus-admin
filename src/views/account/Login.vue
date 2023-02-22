<template>
    <div id="login">


        <div class="form-wrap">
            <ul class="menu-tab">
                <li :class="{ 'current': current_menu === item.type }" v-for="item in data.tab_menu" :key="item.type"
                    @click="toggleMenu(item.type)">{{
                        item.label }}</li>
                <!-- <li>注册</li> -->
            </ul>
            <el-form>
                <el-form-item>
                    <label class="form-label">用户名</label>
                    <el-input />
                </el-form-item>
                <el-form-item>
                    <label class="form-label">密码</label>
                    <el-input type="password" />
                </el-form-item>
                <el-form-item>
                    <label class="form-label">验证码</label>
                    <el-row :gutter="10">
                        <el-col :span="14">
                            <el-input></el-input>
                        </el-col>
                        <el-col :span="10">
                            <el-button type="success" class="el-button-block">获取验证码</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger" @click="onSubmit" class="el-button-block">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

// data存储的是登录与注册的资源，方便v-for循环遍历出来
const data = reactive({
    tab_menu: [
        { type: "login", label: "登录" },
        { type: "register", label: "注册" }
    ]
})
// 默认状态的高亮显示，就不会，两项高亮都显示
let current_menu = ref(data.tab_menu[0].type);
// 创建点击的事件，来回切换高亮状态
const toggleMenu = ((type) => {
    current_menu.value = type
})

// do not use same name with ref
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const onSubmit = () => {
    console.log('submit!')
}

</script>

<style lang="scss" scoped>
#login {
    height: 100vh;
    background-color: #344a5f;
}

.form-wrap {
    width: 320px;
    padding-top: 100px;
    margin: auto;
}

.menu-tab {
    text-align: center;

    li {
        display: inline-block;
        padding: 10px 24px;
        margin: 0 10px;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        cursor: pointer;

        &.current {
            background-color: rgba(0, 0, 0, .1);
        }
    }
}

.form-label {
    display: block;
    color: #fff;
    font-size: 14px;
}
</style>