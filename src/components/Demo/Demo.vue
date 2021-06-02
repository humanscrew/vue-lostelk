<template>
  <div class="login-container">
    <div class="login-form-box">
      <h1 class="title-text">登录</h1>

      <el-form
        :model="loginFrom"
        status-icon
        :rules="rules"
        ref="loginFrom"
        label-position="right"
        label-width="auto"
      >
        <el-form-item
          label="用户名"
          prop="userName"
          required
          style="margin: 20px 80px 20px 30px"
        >
          <el-input
            v-model="loginFrom.userName"
            autocomplete="off"
            placeholder="UserName"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
          required
          style="margin: 20px 80px 20px 30px"
        >
          <el-input
            type="password"
            v-model="loginFrom.password"
            autocomplete="off"
            show-password
            placeholder="Password"
          ></el-input>
        </el-form-item>

        <el-button type="primary" @click="submitForm('loginFrom')"
          >提交</el-button
        >
        <el-button @click="resetForm('loginFrom')">重置</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance } from "vue";
import { ElMessage, ElNotification } from "element-plus";
import { login, getPublicKey } from "@/utils/lostelkAPI/login";
import RSA from "@/plugins/crypto-js/RSA";
import AES from "@/plugins/crypto-js/AES";

export default defineComponent({
  data() {
    let validateUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    let validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.loginFrom.userName !== "") {
          this.$refs.loginFrom.validateField("userName");
        }
        callback();
      }
    };
    return {
      loginFrom: {
        password: "",
        userName: "",
        age: "",
      },
      rules: {
        userName: [{ validator: validateUserName, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
      },
    };
  },
  setup() {
    let that = getCurrentInstance();
    let loginRequest = () => {
      getPublicKey({
        username: that.data.loginFrom.userName,
      }).then((res) => {
        let publicKey = res.data.PKey;
        let aesKey = AES.generateKey();
        let password = that.data.loginFrom.password;
        let passwordEncryptByAES = AES.encrypt(password, aesKey);
        let aesKeyEncryptByRSA = RSA.encrypt(aesKey, publicKey);
        login({
          username: that.data.loginFrom.userName,
          password: passwordEncryptByAES,
          aesKey: aesKeyEncryptByRSA,
        })
          .then((res) => {
            if (res.data.msg == "登录成功！") {
              // console.log(res);
              ElMessage.success(res.data.msg);
            } else {
              // console.log(res);
              ElMessage.error(res.data.msg);
            }
          })
          .catch((err) => {
            return;
          });
      });
    };
    let resetForm = (formName) => {
      that.refs[formName].resetFields();
    };
    let submitForm = (formName) => {
      that.refs[formName].validate((valid) => {
        if (valid) {
          // ElMessage("登录中");
          loginRequest();
        } else {
          ElNotification({
            title: "提示",
            type: "warning",
            message: "请填入用户名或密码！",
            duration: 1000,
            offset: 50,
          });
          return false;
        }
      });
    };
    return {
      resetForm,
      submitForm,
    };
  },
});
</script>

<style scoped lang="less">
.login-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  // 设置背景图片
  background: url(~@/static/imgs/loginBackground.png);
  background-size: cover;
  background-attachment: fixed;
}
.login-form-box {
  background-color: rgba(255, 255, 255, 0.3);
  width: 400px;
  height: 400px;
  border-radius: 30px;

  // 水平垂直的居中
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  // 毛玻璃效果
  backdrop-filter: blur(3px);
  border-left: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}
h1 {
  // 标题字体
  margin: 20px;
  font-size: 2em;
}
.title-text {
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  opacity: 0.9;
}
</style>
