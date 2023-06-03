let btn = document.querySelector(".btn");
let usernameinp = document.querySelector(".usrname");
let profilepic = document.querySelector(".avatar");
let namehld = document.querySelector(".name");
let date = document.querySelector(".date");
let username = document.querySelector(".username");
let bio = document.querySelector(".bio");
let switcher  = document.querySelector(".switcher")
let body = document.querySelector("body")
btn.onclick = () => {
    fetch(`https://api.github.com/users/${usernameinp.value}`)
        .then(response => response.json())
        .then(data => {
            profilepic.src = data['avatar_url']
            namehld.innerHTML = data['name']
            date.innerHTML = data['created_at'].split("T")[0]
            username.innerHTML = `@${data['login']}`
            if (data['bio']) {
                bio.innerHTML = data['bio'] 
            }
            repocount.innerHTML = data['public_repos'] 
            flwcount.innerHTML = data['followers']
            flwgcount.innerHTML = data['following']
            address.innerHTML = data['location']
            // website.innerHTML = data['']
            twitter.innerHTML = data['twitter_username']
            if (data['company']) {
                // bio.innerHTML = data['bio']
                company.innerHTML = data['company']
            }
            console.log(data);
        })
        .catch(error => {
            console.log(`Error fetching GitHub user information: ${error}`);
        });

}

switcher.onclick = () => {
    switch (switcher.id) {
        case "dark":
            body.style.backgroundColor  = "var(--bg-2)";
            switcher.id = "light"
            break;
        case  "light":
            switcher.id = "dark"
            break;
        default:
            break;
    }
}