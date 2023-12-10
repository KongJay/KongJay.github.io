var posts=["2023/12/10/hello-world/","2023/12/05/后端/vvvvvv/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };