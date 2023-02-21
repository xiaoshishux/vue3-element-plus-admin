<template>
    <div id="login">


        <div class="form-wrap">
            <ul class="menu-tab">
                <li class="current">登录</li>
                <li>注册</li>
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
                    <el-button type="primary" @click="onSubmit">Create</el-button>
                    <el-button>Cancel</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

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