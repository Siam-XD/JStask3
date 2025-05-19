let body = document.getElementById("body");
let header = document.getElementById("header");
let parent = document.getElementById("parent")
let list = document.getElementsByClassName("itemList")

// body
body.style.backgroundColor = "#ffe3ba"
body.style.display = "flex"
body.style.flexDirection = "column"
body.style.alignItems = "center"

// header
header.style.backgroundColor = "#c94732"
header.style.textAlign = "center"
header.style.padding = "1px 0"
header.style.width = "60%"
header.style.color = "white"

// section
parent.style.display = "flex"
parent.style.flexWrap = "wrap"

// list
list.style.backgroundColor = "white"
list.style.width = "30%"