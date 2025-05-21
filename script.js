let passInput = document.getElementById("input")
let eye = document.getElementById("eye")
let body = document.querySelector("body")
let commentInput = document.getElementById("commentInput")
let addComment = document.getElementById("addComment")

passInput.style.height = "30px"
passInput.style.margin = "10px"
eye.addEventListener("click", () => {
    if(passInput.type === "password"){
        passInput.type = "text";
        eye.classList.remove("fa-eye")
        eye.classList.add("fa-eye-slash")
    } else {
        passInput.type = "password";
        eye.classList.remove("fa-eye-slash")
        eye.classList.add("fa-eye")
    }
})

addComment.addEventListener("click", () => {
    let comment = document.createElement("h5")
    comment.innerText = commentInput.value;
    commentInput.value = ""
    body.appendChild(comment)
})