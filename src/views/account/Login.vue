<template>
    <div id="login">


        <div class="form-wrap">
            <ul class="menu-tab">
                <li :class="{ 'current': current_menu === item.type }" v-for="item in data.tab_menu" :key="item.type"
                    @click="toggleMenu(item.type)">{{
                        item.label }}</li>
                <!-- <li>注册 current_menu = item.type</li> -->
            </ul>
            <el-form ref="form" :model="data.form" :rules="data.form_rules">
                <el-form-item prop="username">
                    <label class="form-label">用户名</label>
                    <el-input v-model="data.form.username" />
                </el-form-item>
                <el-form-item prop="password">
                    <label class="form-label">密码</label>
                    <el-input type="password" v-model="data.form.password" />
                </el-form-item>
                <el-form-item v-if="current_menu === 'register'" prop="passwords">
                    <label class="form-label">确认密码</label>
                    <el-input type="password" v-model="data.form.passwords" />
                </el-form-item>
                <el-form-item prop="code">
                    <label class="form-label">验证码</label>
                    <el-row :gutter="10">
                        <el-col :span="14">
                            <el-input v-model="data.form.code"></el-input>
                        </el-col>
                        <el-col :span="10">
                            <el-button type="success" class="el-button-block" @click="handlerGetCode">获取验证码</el-button>
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
import { reactive, ref, toRefs, getCurrentInstance } from 'vue'
import { validate_email, validate_password, validate_code } from "../../utils/validate.js"
import {GetCode} from "@/api/common"
const instance = getCurrentInstance()
const { ctx } = getCurrentInstance()
console.log(instance)
console.log(ctx)
// 获取验证码
const {proxy} = getCurrentInstance()
const  handlerGetCode = ()=>{
    // proxy.$axios.post("http://v3.web-jshtml.cn/api/getCode/")
    GetCode()
}
// 校验邮箱
const validate_name_rules = (rule, value, callback) => {
    let regEmail = validate_email(value)
    if (value === '') {
        callback(new Error("请输入邮箱"))
    } else if (!regEmail) {
        callback(new Error("邮箱格式不正确"))
    } else {
        callback()
    }
}
// 校验密码
const validate_password_rules = (rule, value, callback) => {
    let regPassword = validate_password(value);
    // 获取“正确密码”
    const passwordsValue = data.form.passwords
    if (value === "") {
        callback(new Error("请输入密码"))
    } else if (!regPassword) {
        callback(new Error("请输入>=6并且<=20位的密码，包含数字、字母"))
    } else {
        callback()
    }
}
// 校验确认密码
const validate_passwords_rules = (rule, value, callback) => {
    // 如果是登录，不需要校验确认密码，默认通过
    if (data.current_menu === "login") { callback() }
    let regPassword = validate_password(value);
    // 获取“密码”
    const passwordValue = data.form.password
    if (value === "") {
        callback(new Error("请输入密码"))
    } else if (!regPassword) {
        callback(new Error("请输入>=6并且<=20位的密码，包含数字、字母"))
    } else if (passwordValue && passwordValue !== value) {
        callback(new Error("两次密码不一致"))
    } else {
        callback()
    }
}

// 校验验证码
const validate_code_rules = (rule, value, callback) => {
    let regCode = validate_code(value);
    if (value === "") {
        callback(new Error("请输入验证码"))
    } else if (!regCode) {
        callback(new Error("请输入6位的验证码"))
    } else {
        callback()
    }
}
// data存储的是登录与注册的资源，方便v-for循环遍历出来
const data = reactive({
    form: {
        username: "",  //用户名
        password: "",  //密码
        passwords: "", //确认密码
        code: "",      //验证码
    },
    form_rules: {
        username: [  //校验规则
            { validator: validate_name_rules, trigger: 'change' },
            // { required: true, message: "请输入活动名称", trigger: 'change' },
            // { min: 3, max: 5, message: "长度在3到5个字符", trigger: 'change' }
            //简单来说就是，当mput输入值时’便会开始执行第＿条校验规则＿校验必填项’如果输
            // 入空的字符串，则触发required显示message;如果输入不为空’则不会触发第＿条校验规则，
            // 而会触发第二条校验规则的mm和max，妇果不符合mjn或max规定的长度字等，便会显示第
            // 二条校验规则的mcssage;如果有第三条校验规则出现，以此类推即可。ElemenˉPlus提供的校
            // 验规则相对比较简单’如果是无法满足校验需求田复杂情况，就需要自定义校验规则°
        ],
        password: [
            { validator: validate_password_rules, trigger: 'change' },
        ],
        passwords: [
            { validator: validate_passwords_rules, trigger: 'change' },
        ],
        code: [
            { validator: validate_code_rules, trigger: 'change' },
        ]
    },
    tab_menu: [
        { type: "login", label: "登录" },
        { type: "register", label: "注册" }
    ],
    current_menu: 'login'
})

// 默认状态的高亮显示，就不会，两项高亮都显示
let current_menu = ref(data.tab_menu[0].type);
// 创建点击的事件，来回切换高亮状态
const toggleMenu = ((type) => {
    current_menu.value = type
})

// do not use same name with ref
// const form = reactive({
//     item: {
//         username: "",  //用户名
//         password: "",  //密码
//         passwords: "", //确认密码
//         code: ""       //验证码
//     }
// })
const dataItem = toRefs(data)
// return {
//     ...dataItem
// }
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