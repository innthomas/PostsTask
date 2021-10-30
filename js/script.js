

let postsLayout = document.getElementById("posts-layout");
let detailsLayout = document.getElementById("posts-layout");
let html = "";

function getPosts() {
  window.location.hash = "AllPosts";
  //if posts is not in localstorage
  if (!localStorage.getItem("posts")) {
    //get posts from server
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data)
        //set local storage
        localStorage.setItem("posts", JSON.stringify(data));
        //console.log(localStorage.getItem("posts"))
        let postsLayout = document.getElementById("posts-layout");
        let html = "";
        data.forEach((post) => {
          //console.log(post.title);
          html += `
                <div class="col-12 py-5 col-lg-4 col-md-6">
                                <div class="h-100 text-center  mx-auto">
                                            <div class="card mb-0 shadow-lg col text-center  h-100 py-5" style="width: 18rem;">
                                                <div class="card-body py-0">
                                                <img src="https://picsum.photos/300/200?random=${post.id}" class="card-img-top">
                                                    <h5 class="card-title text-capitalize">${post.title}</h5>
                                                    <p class="card-text col-sm-3 font-italic text-truncate">${post.body}</p>
                                                        <div class="btn-group">
                                                        <button onclick="getDetails(${post.id})" type="button" class="btn btn-sm btn-outline-secondary card-link">View Post</button>
                                                            </div>
                                                        </div>
                                                   </div>
                                                   </div>
                                                </div>
                                            </div>
                                        </div>
                
                `;
        });
        postsLayout.innerHTML = html;
      })
      .catch((err) => console.log(err));
  } else {
    //fetch from localstorage
    let posts = JSON.parse(localStorage.getItem("posts"));
    console.log(posts[0].title);
    posts.forEach((post) => {
        //console.log(post.title);
        html += `
              <div class="col-12 py-5 col-lg-4 col-md-6">
                              <div class="h-100 text-center  mx-auto">
                                          <div class="card mb-0 shadow-lg col text-center  h-100 py-5" style="width: 18rem;">
                                              <div class="card-body py-0">
                                              <img src="https://picsum.photos/300/200?random=${post.id}" class="card-img-top img-fluid" >
                                                  <h5 class="card-title text-capitalize">${post.title}</h5>
                                                  <p class="card-text col-sm-3 font-italic text-truncate">${post.body}</p>
                                                      <div class="btn-group">
                                                      <button onclick="getDetails(${post.id})" type="button" class="btn btn-sm btn-outline-secondary card-link">View Post</button>
                                                          </div>
                                                      </div>
                                                 </div>
                                                 </div>
                                              </div>
                                          </div>
                                      </div>
              
              `;
      });
      postsLayout.innerHTML = html;
  }
}

getPosts();

function getDetails(id) {
  window.location.hash = `Post:${id}`;
  if (!localStorage.getItem("posts")) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(id)
        // console.log(data.title.toUpperCase())
        let detailsLayout = document.getElementById("posts-layout");
        let html = "";
        html += `<div class="container">
        <header>
            <h3 class="display-4 text-capitalize" >${data.title}</h3>
            <img class="mb-2 rounded mx-auto d-block img-fluid" src="https://picsum.photos/300/200?random=${id}" alt="image">
        </header>
        <main>
        <p class="pt-2 fs-4">${data.body}</p>
        </main>
        <button onclick="getPosts()" type="button" class="btn btn-sm btn-outline-secondary">Return</button>

    </div>`;
        detailsLayout.innerHTML = html;
      })
      .catch((err) => console.log(err));
  } else {
    //fetch from localstorage
    let posts = JSON.parse(localStorage.getItem("posts"));
    // console.log(posts + "from details");
    let pstDetail = posts[id];
    console.log(" {Data from localstorage - single post details}" + pstDetail.title.toUpperCase() );
    let detailsLayout = document.getElementById("posts-layout");
    let html = "";
    html += `<div class="container">
        <header>
            <h3 class="display-4 text-capitalize" >${pstDetail.title}</h3>
            <img class="mb-2 rounded mx-auto d-block img-fluid" src="https://picsum.photos/300/200?random=${id}" alt="image">
        </header>
        <main>
        <p class="pt-2 fs-4">${pstDetail.body}</p>
        </main>
        <button onclick="getPosts()" type="button" class="btn btn-sm btn-outline-secondary">Return</button>

    </div>`
    detailsLayout.innerHTML  = html;
  }
}
