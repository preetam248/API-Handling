let imageEle = document.getElementById("image");
let nameEle = document.getElementById("name");
let bioEle = document.getElementById("bio");
let followersEle = document.getElementById("followers");
let followingEle = document.getElementById("following");

let reqUrl = "https://api.github.com/users/hiteshchoudhary"

fetch(reqUrl)
    .then((data) => { 
        return data.json();
    }).then((jsonData) => {
        setImage(jsonData);
        setDetails(jsonData);
    })
    .catch((data) => {
        alert("Server Failure Occur")
     });

function setImage(receivedData) {
    // console.log(receivedData.name)
    imageEle.setAttribute("src", `${receivedData.avatar_url}`);
    imageEle.setAttribute("alt", `${receivedData.name}`);
}

function setDetails(receivedData) {
    // console.log(receivedData.name)
    nameEle.textContent = receivedData.name;
    bioEle.textContent = receivedData.bio;
    followersEle.textContent = receivedData.followers;
    followingEle.textContent = receivedData.following;
}