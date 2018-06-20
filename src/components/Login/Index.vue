<template>
  <div class="box">
    <div class="login-box">
      <div class="login-header">
        <span :class="{'active': isLogin}">{{ $t("login.login") }}</span>
        <span>·</span>
        <span :class="{'active': !isLogin}">
          <router-link to="/register" style="color: #9E9B96;">{{ $t("login.register") }}</router-link>
        </span>
      </div>

      <div class="login-body">
        <div class="flex-box align-items-center first-input">
          <Icon type="person" size="18"></Icon><input v-model="postData.userName" autofocus class="custom-input flex-1" type="text" :placeholder="$t('login.placeholder1')">
        </div>
        <div class="flex-box align-items-center second-input">
          <Icon type="ios-locked" size="18"></Icon><input @keyup.enter="login" v-model="postData.password" class="custom-input flex-1" type="password" :placeholder="$t('login.placeholder2')">
        </div>
      </div>

      <div class="login">
        <Button type="warning" long @click.native="login">{{ $t('login.login') }}</Button>
        <div class="remenber-me">
          <Checkbox v-model="postData.remember">{{ $t('login.rememberMe') }}</Checkbox>
          <div style="cursor: pointer;" @click="forget">{{ $t('login.forget') }}？</div>
        </div>
      </div>

      <div class="split">
        <div class="line"></div>
        <div class="split-text">{{ $t('login.socialAccount') }}</div>
        <div class="line"></div>
      </div>

      <div class="login-footer">
        <a href="https://open.weixin.qq.com/connect/qrconnect?appid=wx1eda2538cf0f77da&redirect_uri=http%3a%2f%2fappt.igeekery.com%2fuser%2fgetWxCode.json%3fgw_mark%3dGW&response_type=code&scope=snsapi_login">
          <img src="./imgs/weixin.png" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        isLogin: true,
        postData: {
          userName: '',
          password: '',
          remember: true
        }
      }
    },
    mounted() {
      console.log(this.$route.query);
    },
    methods: {
      forget() {
        this.$router.push('/forget');
      },
      login() {
        // 判断
        if(!this.postData.userName) {
          this.$Message.error('请输入用户名');
          return;
        }
        if(!this.postData.password) {
          this.$Message.error('请输入用户密码');
          return;
        }
        this.$http.get('/api/login',{
          params: {
            email: this.postData.userName,
            password: this.postData.password
          }
        }).then((body) => {
          if(!body.data.code) {
            this.$Message.success('登录成功');
            this.$store.commit('changeLoginState',true);
            this.$store.commit('changeUserData',body.data);
            if(this.postData.remember) {
              // 把用户名和密码记住
              localStorage.setItem('userName',this.postData.userName);
              localStorage.setItem('password',this.postData.password);
            }
            this.$router.push('/my');
          }else {
            this.$Message.error('登陆失败，手机/邮箱或者密码不正确');
          }

        });
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
    flex: 1; /* 为了map地图引用（解决苹果下不占满屏幕的bug） */
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
    border: 1px solid rgb(255,158,67);
    border-radius: 4px;
  }
  .first-input {
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
</style>
