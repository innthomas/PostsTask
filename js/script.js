// Language: javascript
// Path: js/script.js
//console.log("hello ")
function getPosts(){
    //console.log("hello from inside getPost function ")

   fetch("https://jsonplaceholder.typicode.com/posts")
   .then(response => response.json())
   .then(data => {
       //console.log(data)
       let postsLayout = document.getElementById("posts-layout");
       let html = "";
         data.forEach(post => {
             //console.log(post.title);
                html += 
                `<div class="col-12 py-5 col-lg-4 col-md-6">
                <div class="h-100 text-center  mx-auto">
                            <div class="card mb-3 shadow-sm col text-center  h-100 py-5">
                                <div class="card-body">
                                    <p class="card-text">${post.title}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                        <button onclick="getDetails(${post.id})" type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                            </div>
                                        </div>
                                   </div>
                                   </div>
                                </div>
                            </div>
                        </div>`
            });
            postsLayout.innerHTML = html;
    })
    .catch(err => console.log(err))

    
}

getPosts();

function getDetails(id){
    console.log("hello from inside getDetails function ")
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log(id)
        console.log(data.title.toUpperCase())
        let detailsLayout = document.getElementById("posts-layout");
        let html = "";
        html += `<div class="container">
        <header>
            <h3 >${data.title}</h3>
            <img src="https://picsum.photos/300/200" alt="image">
        </header>
        <main>
        <p>${data.body}</p>
        </main>
        <button onclick="getPosts()" type="button" class="btn btn-sm btn-outline-secondary">Return</button>

    </div>`
    detailsLayout.innerHTML  = html;
    })
    .catch(err => console.log(err))
}

