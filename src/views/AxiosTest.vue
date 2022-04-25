<template>
  <div class="about">
    <h1>From Axios...</h1>
    <button type="button" @click="dataFS">클릭</button><br>
    {{result1}}
    <hr>
    <button type="button" @click="dataFSCors">클릭Cors발생</button><br>
    {{result2}}
    <hr>
    <button type="button" @click="dataFSCorsSolve">클릭Cors문제해결</button><br>
    {{result3}}


  </div>
</template>

<script>
import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:8090'; //SpringBoot 서버 주소
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export default ({
   data() {
     return {
       result1 : [],
       result2 : [],
       result3 : [],

     }
   },
   methods: {
     async dataFS() {
           await axios.get("https://a7bd86f7-e477-413d-91eb-6d9c44eb870d.mock.pstmn.io/list")
                      .then(res => {
                          this.result1 = res.data;
                      })
                      .catch(e => {
                        console.log(e);
                      })
                      
       },
      
      async dataFSCors() { // 이것은 cors 문제를 발생시킴
           await axios.get("http://localhost:8090/api/vueget")
                      .then(res => {
                          this.result2 = res.data;
                          console.log(res);
                      })
                      .catch(e => {
                        console.log(e);
                      })
                      
       },

       async dataFSCorsSolve() { //SpringBoot으로 /api/vueget 구현됨
           await axios.get("/api/vueget")
                      .then(res => {
                          this.result3 = res.data;
                          console.log(res);
                      })
                      .catch(e => {
                        console.log(e);
                      })
                      
       }

   }
})
</script>

