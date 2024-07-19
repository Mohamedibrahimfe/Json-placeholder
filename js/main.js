getAllPosts(1);
function getAllPosts(id) {
    let request=new XMLHttpRequest();
    request.open('GET',"https://jsonplaceholder.typicode.com/posts?userId="+id);
    request.send();
    request.onload = () => {
        document.getElementById('content').innerHTML = '';
        if (request.status === 200) {
            let posts = JSON.parse(request.response);
            for(post of posts) {
                const content = `
            <div class="post">
                <h1 class="post-title">${post.title}</h1>
                <hr>
                <p class="post-body">${post.body}</p>
            </div> 
            `
            document.getElementById('content').innerHTML += content;
            }
            

        } else {
            console.log('error ${request.status}');
        }
    }
}

function getAllUsers() {
    let request=new XMLHttpRequest();
    request.open('GET',"https://jsonplaceholder.typicode.com/users");
    request.send();
    request.onload = () => {
        // document.getElementById('names').innerHTML = '';
        if (request.status === 200) {
            let posts = JSON.parse(request.response);
            for(post of posts) {
                const usersContent = `
            <li id=${post.id} onClick="getId(${post.id})" class=""><a href="#">${post.name}<p id="subTitle">${post.email}</p></a> </li> 
            `
            document.getElementById('toShowTitles').innerHTML += usersContent;
            }
            

        } else {
            console.log('error ${request.status}');
        }
    }
}
getAllUsers();
function getId(id) {
    getAllPosts(id)
    selectUser(id)
}
function selectUser(id) {
    let users = document.querySelectorAll('#names li');
    for(user of users) {
        user.classList.remove('selected');
    }
    document.getElementById(id).classList.toggle('selected');

}
