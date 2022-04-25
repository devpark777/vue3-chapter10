// const target = 'http://127.0.0.1:3000';
// const target = 'http://localhost:8090';
// SpringBoot으로 vueServer 구현했음 : 8090

module.exports = {
   devServer : {
    //    port : 8090,
       proxy : {
           '^/api' : {
               target : 'http://localhost:8090',
               changeOigin : true
           }
       }
   }
}
