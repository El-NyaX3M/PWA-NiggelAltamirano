const { createApp } = Vue;
    const app = createApp({
        data(){
            return{
                user:localStorage.getItem("nombre"),
                popular:[],
                peli:[],
                rate:5,
                detailView: false
            }
        },
        methods: {
            menos(){
                if(this.rate > 1){
                    this.rate--;
                }
            },
            mas(){
                if(this.rate < 10){
                    this.rate++;
                }
            },
            ratear(){
                var data = new FormData();
                data.append('value', parseInt(this.rate));

                var config = {
                    method: 'post',
                    url: 'https://api.themoviedb.org/3/movie/'+this.peli.id+'/rating?api_key=8222147f508c762ed048e8c7e5aa6f09',
                    headers: { 
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjIyMTQ3ZjUwOGM3NjJlZDA0OGU4YzdlNWFhNmYwOSIsInN1YiI6IjYzMWQxYWJlOWMyNGZjMDA3ZDc3MTcxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UflnCScTidL_L1rp_C05duZR9AytlvCUy2MFAxf-u_A', 
                        
                    },
                    data: data
                };

                axios(config)
                .then(function (response) {
                    if(response.data.success){
                        alert("Calificado con éxito")    
                    }
                    
                    console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            verDetalles(peli){
                this.detailView = true;
                

                var config = {
                    method: 'get',
                    url: 'https://api.themoviedb.org/3/movie/985939?api_key=8222147f508c762ed048e8c7e5aa6f09&language=en-US',
                    headers: { 
                      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjIyMTQ3ZjUwOGM3NjJlZDA0OGU4YzdlNWFhNmYwOSIsInN1YiI6IjYzMWQxYWJlOWMyNGZjMDA3ZDc3MTcxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UflnCScTidL_L1rp_C05duZR9AytlvCUy2MFAxf-u_A'
                    }
                  };
                  var self = this
                  axios(config)
                  .then(function (response) {
                    self.peli = response.data;
                    console.log(JSON.stringify(response.data));
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
                  this.peli = self.peli;
                
            },
            cerrar(){
                this.detailView = false;
            },
            desratear(){
                var config = {
                method: 'delete',
                url: 'https://api.themoviedb.org/3/movie/'+this.peli.id+'/rating?api_key=8222147f508c762ed048e8c7e5aa6f09',
                headers: { 
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjIyMTQ3ZjUwOGM3NjJlZDA0OGU4YzdlNWFhNmYwOSIsInN1YiI6IjYzMWQxYWJlOWMyNGZjMDA3ZDc3MTcxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UflnCScTidL_L1rp_C05duZR9AytlvCUy2MFAxf-u_A'
                }
                };
    
                axios(config)
                .then(function (response) {
                    if(response.data.success){
                        alert("Calificación eliminada con éxito");
                    }
                    console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        },
        mounted() {
            var config = {
            method: 'get',
            url: 'https://api.themoviedb.org/3/movie/popular?api_key=8222147f508c762ed048e8c7e5aa6f09&language=&page=',
            headers: { 
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjIyMTQ3ZjUwOGM3NjJlZDA0OGU4YzdlNWFhNmYwOSIsInN1YiI6IjYzMWQxYWJlOWMyNGZjMDA3ZDc3MTcxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UflnCScTidL_L1rp_C05duZR9AytlvCUy2MFAxf-u_A'
            }
            };

            var self = this
            axios(config)
            .then(function (response) {
                self.popular = response.data.results;
                //console.log(JSON.stringify(response.data.results));
            })
            .catch(function (error) {
                console.log(error);
            });
            
        }
    }).mount("#contenedor")