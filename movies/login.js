const { createApp } = Vue;

        const app = createApp({
            data(){
                return{
                    username:"",
                    password:""
                }
            },
            methods: {
                login(e){
                    e.preventDefault;

                    
                    var data = new FormData();
                    data.append('username', this.username);
                    data.append('password', this.password);
                    data.append('request_token', '');

                    var config = {
                        method: 'post',
                        url: 'https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=8222147f508c762ed048e8c7e5aa6f09',
                        data : data
                    };
                    var username = this.username
                    axios(config)
                    .then(function (response) {
                        if(response.data.success){
                            
                            localStorage.setItem("nombre", username);
                            window.location.href="pelis.html";
                        }
                        console.log(JSON.stringify(response.data));
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                }
            }
        }).mount("#login");