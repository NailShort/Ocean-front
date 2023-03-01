<template>
  <div id="login" style="max-width: 100%">
    <div class="container">
      <div class="row items-center justify-center">

        <div class="login-left col-12 col-lg-6">
          <div class="img"><img src="../../../images/LOGO-white.png" alt=""></div>
          <p>OCEAN</p>
        </div>

        <div class="right col-12 col-lg-6"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1000">
          <div class="login ">
            <h1>登入</h1>
            <q-form style="max-width:400px" @submit="login" ref="formEl" class="q-gutter-md">
              <q-input filled v-model="form.account" label="帳號"  :rules="[rules.required, rules.length]"  />
              <q-input filled v-model="form.password" type="password" label="密碼"  :rules="[rules.required, rules.length]"  />
              <div class="btn">
                <q-btn label="會員登入" type="submit" :loading="loading" color="primary"/>
                <q-btn flat label="建立帳號" to="/register" color="primary"/>
              </div>
            </q-form>
            <div class="login01"></div>
            <div class="login02"></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useUserStore } from '../../stores/user'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  window.addEventListener('mousemove', function (e) {
    // console.log(e.pageX, e.pageY)
    // console.log(e.pageX - window.innerWidth / 2)
    gsap.to('.login-left', {
      x: -(e.pageX - window.innerWidth / 2) / 200,
      y: -(e.pageY - window.innerHeight / 2) / 200,
      rotationX: -(e.pageX - window.innerWidth / 2) / 100,
      rotationY: -(e.pageY - window.innerHeight / 2) / 100,
      rotationZ: -(e.pageX - window.innerWidth / 2) / 500,
      skewX: -(e.pageX - window.innerWidth / 2) / 500,
      skewY: -(e.pageY - window.innerHeight / 2) / 500,
      ease: 'back(5)',
      duration: 3
    })
  })
})

const user = useUserStore()

const loading = ref(false)
const form = reactive({
  account: '',
  password: '',
  passwordConfirm: '',
  email: ''
})
const formEl = ref(null)

const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  length (value) {
    return (value.length >= 4 && value.length <= 20) || '長度必須為 4 ~ 20 個字'
  }
}

const login = async () => {
  loading.value = true
  await user.login(form)
  loading.value = false
}

</script>

<!-- css ----------------------------------------------------------------->
<style lang="scss" scoped>

#login{
  .container{
    padding-top: 150px;
    padding-bottom: 150px;
    position: relative;
    min-height: 95vh;
    background: linear-gradient(rgba(20,45,85,0.1),rgba(20,45,85,0.8)), url(../../../images/bg.jpg) no-repeat center/cover ;
    .right{
      position: relative;
      .login{
        margin: auto;
        max-width: 600px;
        height: 600px;
        background: url(../../../images/login.png) no-repeat center/cover;
        filter: drop-shadow(0 5px 10px rgba(20,45,85,0.5)) ;
        text-align: center;
        h1{
          font-size: 30px;
          margin: 0;
        }
        @keyframes moveWave01 {
          0% {
            top: -0px;
            left: -0px;
          }

          100% {
            top: -40px;
            left: -40px;
            opacity: 0;
          }
        }

        @keyframes moveWave02 {
          0% {
            top: 0px;
            left: 0px;
          }

          100% {
            top: 40px;
            left: 40px;
            opacity: 0;
          }
        }
        .login01{
          z-index: -1;
          position: absolute;
          animation: moveWave01 3s infinite linear;
          top: -30px;
          left: -30px;
          width: 600px;
          height: 600px;
          background: url(../../../images/login01.png)no-repeat center/cover;
        }
        .login02{
          z-index: -1;
          position: absolute;
          animation: moveWave02 3s infinite linear;
          top: 30px;
          left: 30px;
          width: 600px;
          height: 600px;
          background: url(../../../images/login01.png)no-repeat center/cover;
        }
        .q-form{
          margin: auto;
        }
      }
    }
    .login-left{
      // border: 1px solid white;
      font-size: 30px;
      color: white;
      text-align: center;
      margin-bottom: 50px;
      font-weight: 900;
      .img{
        width: 200px;
        height: 200px;
        margin: auto;
        img{
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
    .btn{
      padding-top: 20px;
      text-align: left;
    }
  }
}

@media (min-width:1440px) {
  #login{
    .container{
      .login-left{
        font-size: 70px;
        .img{
          width: 500px;
          height: 500px;
        }
      }
    }
  }
}

</style>
