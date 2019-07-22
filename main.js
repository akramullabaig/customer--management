import {savePost, getPosts, deletecustomer } from "./lib.js";

document.body.onload = async function(){
 
    async function deleteCurrentClick(id){
        let res=await deletecustomer(id);
    } 
     let customers = await getPosts();

if (customers.length == 0) {
    document.getElementById("custTable").style.display = "none";

    document.getElementById("customers").innerHTML = "No customers to display";
} else {
    var table = document.getElementById("custTable");

    for (let i = 0; i < customers.length; i++) {

        let tr = document.createElement("tr");

        let ID = document.createElement("td");
        ID.textContent = customers[i].id;
        tr.appendChild(ID);

        let First = document.createElement("td");
        First.textContent = customers[i].fn;
        tr.appendChild(First);

        let Last = document.createElement("td");
        Last.textContent = customers[i].ln;
        tr.appendChild(Last);

        let Email = document.createElement("td");
        Email.textContent = customers[i].em;
        tr.appendChild(Email);

        let Mobile = document.createElement("td");
        Mobile.textContent = customers[i].te;
        tr.appendChild(Mobile);

        let tdButton = document.createElement("input");
        tdButton.setAttribute("type", "button");
        tdButton.setAttribute("value", "Delete")
        tdButton.setAttribute("id", customers[i].id);
        tdButton.setAttribute("class", "btn btn-info");

        // tdButton.setAttribute("onclick", `deleteCurrentClick(${customers[i].id})`);
        //tdButton.setAttribute("onclick", `deleteCurrentClick(${customers[i].id})`);
        tdButton.onclick = deleteCurrentClick.bind(null, customers[i].id);
        tr.appendChild(tdButton);

        table.appendChild(tr);
    }
}
    document.forms[0].addEventListener("submit", async function submitForm(e) {
        console.log(e);
        e.preventDefault();

        let fn = document.querySelector("#firstName").value;
        
        let ln = document.querySelector("#lastName").value;
        let te = document.querySelector("#tel").value;
        let teError = document.querySelector("#tel_errors");

        var reg=/^[6-9]\d{9}$/;
        if(te.length != 10&&reg.test(te)){
            document.getElementById("tel_errors").style.visibility="visible"
            teError.style.color = "red";
            teError.textContent = "Please enter valid mobile number";
            return false;
        }else{
            document.getElementById("tel_errors").style.display="none"
        } 

        let em = document.querySelector("#email").value;
        
        let body = { fn, ln, te, em };
        let createPost = await savePost(body);
        let { id } = createPost;
        let message = `Post save succesfully with id ${id}`;
        alert(message);
    });
};

