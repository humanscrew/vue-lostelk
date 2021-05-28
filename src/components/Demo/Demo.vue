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
        class="loginFrom-container"
        style="text-align: center"
      >
        <el-form-item
          label="用户名"
          prop="checkPass"
          required="true"
          style="width: 50%"
        >
          <el-input
            type="password"
            v-model="loginFrom.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass" required="true">
          <el-input
            type="password"
            v-model="loginFrom.pass"
            autocomplete="off"
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
import { defineComponent, SetupContext, reactive, toRefs } from "vue";

export default defineComponent({
  //   name: "",
  //   //   props: {},
  //   //   components: {},
  //   setup(props, ctx: SetupContext) {
  //     return {};
  //   },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.loginFrom.checkPass !== "") {
          this.$refs.loginFrom.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.loginFrom.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      loginFrom: {
        pass: "",
        checkPass: "",
        age: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
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
