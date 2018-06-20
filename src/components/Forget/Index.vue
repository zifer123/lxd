<template>
  <div class="box">
    <div class="login-box">
      <div class="login-header">
        <span>{{ $t('forget.retrieve') }}</span>
        <div class="register-type">
          <span style="cursor: pointer;" :class="{'phone-active': isPhone}" @click="changeType(true)">{{ $t('register.login') }}</span>
          <span style="cursor: pointer;" :class="{'phone-active': !isPhone}" @click="changeType(false)">{{ $t('register.email') }}</span>
        </div>
      </div>

      <div class="login-body">
        <div class="flex-box align-items-center custom-input-wrap">
          <Icon type="person" size="18"></Icon><input v-model.trim="postData.userName" class="custom-input flex-1" type="text" :placeholder="isPhone?$t('register.inputMobile'):$t('register.inputEmail')">
        </div>
        <div class="flex-box align-items-center custom-input-wrap">
          <input class="custom-input flex-1" type="text" v-model.number="postData.verifyCode" :placeholder="$t('register.verifyCode')">
          <Button @click.native="fetchValid" type="warning" :disabled="!fetchPermission?true:false" v-text="fetchPermission?$t('register.fetchCode'):timerNum"></Button>
        </div>
        <div class="flex-box align-items-center custom-input-wrap">
          <Icon type="ios-locked" size="18"></Icon><input class="custom-input flex-1" v-model="postData.password" type="password" :placeholder="$t('register.password1')">
        </div>
        <div class="flex-box align-items-center custom-input-wrap">
          <Icon type="ios-locked" size="18"></Icon><input @keyup.enter="sure" class="custom-input flex-1" v-model="postData.againPassword" type="password" :placeholder="$t('register.password2')">
        </div>
      </div>

      <div class="login">
        <Button type="warning" long @click.native="sure">{{ $t('forget.confirm') }}</Button>
      </div>

      <div class="split">
        <div class="line"></div>
        <div class="split-text">乐享动</div>
        <div class="line"></div>
      </div>

      <div class="login-footer">
        <Button type="warning" style="margin: 9px;" @click.native="$router.push('/login')">{{ $t('forget.back') }}</Button>
      </div>
    </div>
  </div>
</template>

<script>
  let timer; // 60秒定时器
  export default {
    data() {
      return {
        ruleForm: {
          userName: '',
          pwd: ''
        },
        rules: {
          userName: [
            { required: true, message: 'Please fill in the user name', trigger: 'blur' }
          ],
          pwd: [
            { required: true, message: 'Please fill in the password.', trigger: 'blur' },
            { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ]
        },
        postData: {
          userName: '',
          password: '',
          againPassword: '',
          verifyCode: ''
        },
        isLogin: false,
        isPhone: true,
        agree: true,
        fetchPermission: true, // 60秒限制
        timerNum: 60
      }
    },
    methods: {
      changeType(isPhone) {
        if(isPhone) {
          this.isPhone = true;
        }else {
          this.isPhone = false;
        }
      },
      /* 获取验证码 */
      fetchValid() {
        let valid = this.validUserName();
        if(!valid) {
          return;
        }
        if(this.isPhone) {
          // 手机验证码
          this.$http.get('/api/getVerifyCode/mobile',{
            params: {
              mobile: this.postData.userName
            }
          }).then((body) => {
            // code为0代表成功
            if(!body.data.code) {
              this.$Message.success('成功发送');
              // 生成60秒限制
              this.fetchPermission = false;
              timer = setInterval(() => {
                  this.timerNum--;
                if(this.timerNum == 0) {
                  this.fetchPermission = true;
                  this.timerNum = 60;
                  clearInterval(timer);
                }
              },1000);
            }
          });
        }else {
          // 邮箱验证码
          this.$http.get('/api/getVerifyCode/email',{
            params: {
              email: this.postData.userName
            }
          }).then((body) => {
            // code为0代表成功
            if(!body.data.code) {
              this.$Message.success('成功发送');
              // 生成60秒限制
              this.fetchPermission = false;
              timer = setInterval(() => {
                this.timerNum--;
                if(this.timerNum == 0) {
                    this.fetchPermission = true;
                    this.timerNum = 60;
                    clearInterval(timer);
                }
              },1000);
            }
          });
        }
      },
      /* 确认 */
      sure() {
        let valid = this.validAll();
        if(!valid) {
          return;
        }
        const msg = this.$Message.loading({
          content: '修改ing',
          duration: 0
        });
        if(this.isPhone) {
          // 手机修改
          this.$http.post('/api/forget/mobile',{
            mobile: this.postData.userName,
            newPwd: this.postData.password,
            verifyCode: this.postData.verifyCode
          }).then((body) => {
            msg();
            if(body.data.code == 1000) {
              this.$Message.error(body.data.msg);
            }else {
              this.$Message.success('修改成功');
              this.$router.push('/login');
            }
          }).catch(() => {

          });
        }else {
          // 邮箱修改
          this.$http.post('/api/forget/email',{
            email: this.postData.userName,
            newPwd: this.postData.password,
            verifyCode: this.postData.verifyCode
          }).then((body) => {
            msg();
            if(body.data.code == 1000) {
              this.$Message.error(body.data.msg);
            }else {
              this.$Message.success('修改成功');
              this.$router.push('/login');
            }
          }).catch(() => {

          });
        }
      },
      validUserName() {
        if(this.isPhone) {
          // 手机号码验证
          if (!this.postData.userName) {
            this.$Message.error('请输入手机号码');
            return false;
          }
          if (!/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/.test(this.postData.userName)) {
            this.$Message.error('请输入正确形式的手机号码');
            return false;
          }
        }else {
          // 手机号码验证
          if (!this.postData.userName) {
            this.$Message.error('请输入邮箱地址');
            return false;
          }
          if (!/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(this.postData.userName)) {
            this.$Message.error('请输入正确形式的邮箱地址');
            return false;
          }
        }
        return true;
      },
      /* 验证所有 */
      validAll() {
        // 第一步判断是否输入正确形式
        if(!this.validUserName()) {
          return false;
        }
        // 第二步判断是否输入验证码
        // 验证码是否输入
        if (!this.postData.verifyCode) {
          this.$Message.error('请输入验证码');
          return false;
        }

        // 第三步判断是否输入密码
        if (!this.postData.password) {
          this.$Message.error('请输入密码');
          return false;
        }

        // 第四步判断再次输入的密码是否与第一次相同
        if (this.postData.password && this.postData.password!=this.postData.againPassword) {
          this.$Message.error('两次输入的密码不同，请核对之后在注册');
          return false;
        }


        // 什么都通过
        return true;
      }
    }
  }
</script>

<style scoped>
  .box {
    background-image: url(./imgs/warp_1@2.jpg);
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-box {
    width: 350px;
    background-color: rgba(10,10,10,0.5);
    color: #9E9B96;
    padding: 0 40px 40px 40px;
    border-radius: 5px;
  }
  .register-type {
    margin: 20px;
  }
  .register-type span {
    margin: 0 20px;
    font-size: 16px;
  }
  .login-header {
    margin: 30px 0;
    text-align: center;
    font-size: 18px;
  }
  .custom-input {
    width: 100%;
    height: 39px;
    color: #fff;
    padding: 10px;
    border-radius: 4px;
    background-color: transparent;
    border: none;
  }
  .custom-input:focus {
    outline:none
  }
  .login-body {

  }
  .custom-input-wrap {
    border-bottom: 1px solid rgb(255,158,67);
  }
  .login {
    margin: 20px 0;
  }
  .remenber-me {
    display: flex;
    justify-content: space-between;
  }
  .split {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .split .line {
    flex: 1;
    height: 1px;
    border: 1px solid #ccc;
  }
  .split .split-text {
    padding: 0 10px;
  }
  .login-footer {
    text-align: center;
    /*justify-content: space-between;*/
  }
  .login-footer img {
    width: 40px;
    height: 40px;
  }
  .active {
    color: rgb(221,130,51);
    padding: 5px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: rgb(253,200,70);
  }
  .phone-active {
    color: rgb(221,130,51);
  }
</style>
