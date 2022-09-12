const { createApp } = Vue;
    const app = createApp({
        data(){
            return{
                user:localStorage.getItem("nombre"),
                popular:[],
                peli:[{title:"", release_date:"", poster_path:""}],
                detailView: false
            }
        },
        methods: {
            verDetalles(peli){
                this.detailView = true;
                this.peli.title = peli.title;
                this.peli.release_date = peli.release_date;
                this.peli.poster_path = peli.poster_path; 
            },
            cerrar(){
                this.detailView = false;
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
                console.log(JSON.stringify(response.data.results));
            })
            .catch(function (error) {
                console.log(error);
            });
            
        }
    }).mount("#contenedor")