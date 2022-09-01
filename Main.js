let baseURL = 'https://api.themoviedb.org/3/';
        let configData = null;
        let baseImageURL = null;
        const key = "34bff23dc0e6e198d082c23f332be9b2"
        var array = []
        let getPopular = function() {
            console.log(array)
        let getConfig = function () {
            let url = "".concat(baseURL, 'configuration?api_key=', key); 
            fetch(url)
            .then((result)=>{
                return result.json();
            })
            .then((data)=>{
                baseImageURL = data.images.secure_base_url;
                configData = data.images;
                console.log('config:', data);
                console.log('config fetched');
                runSearch()
            })
            .catch(function(err){
                alert(err);
            });
        }
        
        let runSearch = function () {
            let url = ''.concat(baseURL, 'movie/popular?api_key=', key);
            fetch(url)
            .then(result=>result.json())
            .then((data)=>{
                //process the returned data
                
              var Results = data.results
              var i = 0
              while(i<Results.length) {
              var what = data.results[i].title
              array.push(what)
              i++
              }                
            })
        }
        getConfig()
    }
