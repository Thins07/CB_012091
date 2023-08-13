const fullname = document.getElementById("fullname")
const selecteddate = document.getElementById("selected-date")
const selectedtime = document.getElementById("selected-time")
const duration = document.getElementById("selected-slot")
const mobile = document.getElementById("mobile")
const email = document.getElementById("email")
const gender = document.getElementById("gender")
const recapTable = document.getElementById("recapTable")

window.addEventListener("load", init);

function init(){
    fullname.innerText = localStorage.getItem("fullname")
    selecteddate.innerText = localStorage.getItem("PickedDate")
    email.innerText = localStorage.getItem("email")
    selectedtime.innerText = localStorage.getItem("time")
    gender.innerText = localStorage.getItem("gender")
    duration.innerText = localStorage.getItem("duration")
    mobile.innerText = localStorage.getItem("mobileNumber")
    recapTable.innerHTML += localStorage.getItem("newrecaptable")
}