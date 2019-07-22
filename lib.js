import config from "./config.js"


export function savePost(posts){
    return fetch(`${config.endpoint}/posts`, {
    method: "POST",
    body: JSON.stringify(posts),
    headers: {
        "Content-Type": "application/json"
        }
    }).then(res => res.json());
}

export function getPosts(){
    return fetch("http://localhost:3000/posts", 
    {   method: "GET",
        headers: { 
            "Content-Type": "application/json"
        }
    }).then(res => res.json());
}

export function deletecustomer(id){
    debugger;
    return fetch(`http://localhost:3000/posts/${id}`,{
        method:"DELETE",
   }) .then(res => res.json());
}



