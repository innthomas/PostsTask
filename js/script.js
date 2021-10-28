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
                html += `<div class="col-md-4">
                            <div class="card mb-4 shadow-sm p-2">
                                <div class="card-body">

                               
                                <div class="card-body">
                                
                                    <p class="card-text">${post.title}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                        <a href="postBody.html" onclick="postOnClick(${post.id})" class="btn btn-sm btn-outline-secondary">View Post</a>
                                            
                                           

                                        </div>
                                        <small class="text-muted">9 mins</small>
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
//post onclick function
function postOnClick(postId){
    console.log(postId);

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let postBody = document.getElementById("post-body");
        postBody.innerHTML = data.body;
    }
    )
    .catch(err => console.log(err))

}