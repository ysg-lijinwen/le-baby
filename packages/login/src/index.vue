<template>
  <div class="login-layer">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
      class="login-container">
      <el-form-item label="账号" prop="account">
        <el-input v-model.number="ruleForm.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import leAxios from './leAxois'
import lmd5 from './lmd5'

export default {
  name: 'le-login',
  data() {
    var checkAccount = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          //   if (value < 18) {
          //     callback(new Error('必须年满18岁'));
          //   } else {
          //     callback();
          //   }
          callback();
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    return {
      ruleForm: {
        pass: '',
        account: ''
      },
      rules: {
        pass: [{
          validator: validatePass,
          trigger: 'blur'
        }],
        account: [{
          validator: checkAccount,
          trigger: 'blur'
        }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //   alert('submit!');
            this.login()
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    test() {
      console.log(lmd5.hex_md5('111111'))
      //96e79218965eb72c92a549dd5a330112
      console.log(lmd5.b64_md5('111111'))
      //lueSGJZetyySpUndWjMBEg
      console.log(lmd5.str_md5('111111'))
      //ç^·,¥IÝZ3
      console.log(lmd5.hex_hmac_md5('lele', '111111'))
      //7b8e3fa71ee92abfff8ba35f72565abd
      console.log(lmd5.b64_hmac_md5('lele', '111111'))
      //e44/px7pKr//i6NfclZavQ
      console.log(lmd5.str_hmac_md5('lele', '111111'))
      //{?§é*¿ÿ£_rVZ½
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    login() {
      //   this.$axios.defaults.baseURL = 'http://114.115.213.166:8088';
      //   this.$axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

      //   this.$axios.post('http://114.115.213.166:8088/invoice/user/login', {
      //     account: this.form.account,
      //     password: '96E79218965EB72C92A549DD5A330112',//96E79218965EB72C92A549DD5A330112 96e79218965eb72c92a549dd5a330112
      //     role: 1, //标识
      //   }).then(function (response) {
      //     if (response) {
      //       console.log(JSON.stringify(response))
      //       console.log('登录成功')
      //     }
      //   }).catch(function (error) {
      //     console.log('登录失败');
      //     console.log(error);
      //   });
      let paramObj = {
        httpUrl: 'http://114.115.213.166:8088/invoice/user/login',
        type: 'post',
        data: {
          account: this.ruleForm.account,
          password: lmd5.hex_md5(this.ruleForm.pass), //96E79218965EB72C92A549DD5A330112 96e79218965eb72c92a549dd5a330112
          role: 1, //标识
        }
      }
      /*请求调用*/
      leAxios.httpRequest(paramObj, function (respondDada) {
        //这里编写成功的回调函数
        console.log(respondDada)
      }, function () {
        alert('网络错误')
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.login-layer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(#91c3e5, #1160af);
  background-size: 100% 100%;
  align-items: flex-end;
}
.login-container {
  width: 30%;
  height: 30%;
  padding: 40px 0;
  margin-top: calc(100vh * 0.3);
  margin-right: calc(100vw * 0.1);
}
.login-btn {
  width: 100%;
}
</style>