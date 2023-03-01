<template>
  <!-- 註冊頁 -->
  <div id="register" style="max-width: 100%">
    <div class="container">
      <div class="row items-center justify-center">

        <div class="text col-12 col-lg-6">
          <p>Ocean</p>
        </div>

        <div class="right col-12 col-lg-6"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1000">
          <div class="login">
            <h6>註冊</h6>
            <q-form style="width:400px" @submit="register" ref="formEl" class="q-gutter-md">

              <q-input filled v-model="form.email" type="email" label="信箱"  :rules="[rules.email, rules.required]"  />
              <q-input filled v-model="form.name" label="名稱"  :rules="[rules.required]"  />
              <q-input filled v-model="form.account" label="帳號"  :rules="[rules.required, rules.length]"  />
              <q-input filled v-model="form.password" type="password" label="密碼"  :rules="[rules.required, rules.length]"  />
              <q-input filled v-model="form.passwordConfirm" type="password" label="密碼確認"  :rules="[rules.required, rules.length, rules.passwordConfirm]"/>

              <div class="btn">
                <q-btn label="註冊會員" type="submit" :loading="loading" color="primary"/>
                <q-btn flat  label="會員登入" to="/login" color="primary"/>
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
import { ref, reactive } from 'vue'
import validator from 'validator'
import { api } from '../../boot/axios'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

const router = useRouter()

const loading = ref(false)
const form = reactive({
  account: '',
  name: '',
  password: '',
  passwordConfirm: '',
  email: ''
})
const formEl = ref(null)

const rules = {
  email (value) {
    return validator.isEmail(value) || '格式錯誤'
  },
  required (value) {
    return !!value || '欄位必填'
  },
  length (value) {
    return (value.length >= 4 && value.length <= 20) || '長度必須為 4 ~ 20 個字'
  },
  passwordConfirm (value) {
    return (value === form.password) || '密碼不一致'
  }
}

const register = async () => {
  if (!await formEl.value.validate()) return
  loading.value = true
  try {
    await api.post('/users', form)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '註冊成功'
    })
    router.push('/')
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
  loading.value = false
}
</script>

<!-- css ----------------------------------------------------------------->
<style lang="scss" scoped>

#register {
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
        max-height: 600px;
        background: url(../../../images/login.png) no-repeat center/cover;
        filter: drop-shadow(0 5px 10px rgba(20,45,85,0.5)) ;
        text-align: center;
        h6{
          font-size: 30px;
          margin: 20px 0 0 0;
          padding-top: 20px;
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
    .text{
      // border: 1px solid white;
      font-size: 30px;
      color: white;
      text-align: center;
      margin-bottom: 50px;
    }
    .btn{
      text-align: left;
      padding-bottom: 30px;
    }
  }
}

</style>
