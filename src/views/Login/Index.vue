<template>
  <div>
    <br>
    <b-row>
      <b-col cols="3"></b-col>
      <b-col cols="6">
        <b-card style="margin-top: 10%;">
          <img src="/static/img/dt.svg" style="width: 100%;border-style:none;border: none;">

          <form @submit.prevent="onSubmit">
            <p v-if="isFormInvalid" style="color: #F04E23;" class="text-center">* Invalid Email or Password</p>
             <br>
              <br>
            <b-form-input v-model="username"
                          type="text" placeholder="Username"
                          class="inline-form-control"></b-form-input>
            <br>
            <br>
            <b-form-input v-model="password"
                          type="password"
                          placeholder="Password"
                          class="inline-form-control"></b-form-input>
            <br>
            <br>
            <br>
            <button class="login-button">Login
            </button>
          </form>
        </b-card>
      </b-col>
      <b-col cols="3"></b-col>
    </b-row>
  </div>
</template>

<script>
  import axios from 'axios'
  // import queryString from 'query-string'
  const qs = require('querystring');

  export default {
    name: "LoginIndex",
    data() {
      return {
        isFormInvalid: false,
        username: '',
        password: ''
      }
    },
    methods: {
      onSubmit() {
        const url = 'http://127.0.0.1:8090/api/v1/user/login'
        const requestBody = {
          username: this.username,
          password: this.password
        }
        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        axios.post(url,qs.stringify(requestBody), config)
          .then((result) => {
            console.log("results", result)
            if(result.statusText === 'OK'){
              sessionStorage.setItem('token', result.data)
              this.$router.push('/dashboard')
            }
          })
          .catch((err) => {
            console.log("Error ======>", err.response.data)
            // Do somthing
          })
      }
    }
  }
</script>

<style scoped>
.login-button {
    position: relative;
    background-color: #435e8f;
    border: none;
    font-size: 18px;
    color: #FFFFFF;
    padding: 12px;
    width: 100%;
    text-align: center;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    border-radius: 8px;
}
.login-button:after {
    content: "";
    background: #435e8f;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px!important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
}
.login-button:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
}

</style>
