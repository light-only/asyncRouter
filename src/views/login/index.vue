<template>
  <div class="app-container">
    <div class="app-content">
      <div class="app-image">产业大脑项目</div>
      <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
        <el-form-item label="用户账号" prop="username">
          <el-input v-model="ruleForm.username" type="username" autocomplete="off" />
        </el-form-item>
        <el-form-item label="用户密码" prop="password">
          <el-input v-model="ruleForm.password" type="password" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="ruleForm.code" />
        </el-form-item>
        <el-form-item prop="remember">
          <el-checkbox v-model="ruleForm.remember">记住密码</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">登录</el-button>
          <el-button @click="resetForm()">没有注册？，去注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import {toRefs,getCurrentInstance,reactive} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import Cookies from 'js-cookie';
import {encrypt} from "../../utils/jsencrypt.js";

const store = useStore();
const router = useRouter();
const {proxy} = getCurrentInstance();
const data = reactive({
  ruleForm:{
    username:'',
    password:"",
    code:'',
    uuid:1,
    remember:false
  },
  rules:{
    username: [{ required: true, trigger: "blur", message: "请输入您的账号" }],
    password: [{ required: true, trigger: "blur", message: "请输入您的密码" }],
  }
});

function submitForm(){
  proxy.$refs['ruleFormRef'].validate(valid=>{
    if(valid){
      if(ruleForm.value.remember){
        // Cookies.set('username',ruleForm.value.username,{exprise:30})
        // Cookies.set('password',encrypt(ruleForm.value.password),{exprise:30});
        // Cookies.set('remember',ruleForm.value.remember,{exprise:30});
      }else{
        //移除
        Cookies.remove('username');
        Cookies.remove('password');
        Cookies.remove('remember');
      }
      ruleForm.value.password = encrypt(ruleForm.value.password);
      //调用 store里面actions登录方法
      store.dispatch('Login',ruleForm.value).then(res=>{
        console.log(res);
        if(res.code === 200){
          router.push('/');
        }else{
          router.push('/login');
          // proxy.resetForm('ruleFormRef');不起作用，不知道为啥。
        }
      });
      // store.dispatch('GenerateRoutes').then(accessRoutes=>{})
    }
  })
}
function resetForm(){

}
const {rules,ruleForm} = toRefs(data);

</script>

<style lang="scss" scoped>
  .app-container{
    width: 100%;
    height: 100%;
    .app-content{
      position: relative;
      width: 30%;
      height: 200px;
      margin: 0 auto;
      padding-top:100px;
      .app-image{
        position: absolute;
        top: 42px;
        left: 230px;
        font-weight: 700;
        color: blue;
      }
    }
  }

</style>