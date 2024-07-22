function showlist() {
    const user = document.querySelector(".user").value;
    
    if(!user){
        return alert("write to do list for today!!")
    }
    console.log(user);
    const listitem = document.querySelector(".listitem");
    listitem.style.display = "block"
    const check = document.createElement("INPUT");
    check.setAttribute("type", "checkbox");
    const ulElement = document.createElement("ul");
    const liElement = document.createElement("li");
    liElement.style.paddingBottom = "5px";
    const hrElement = document.createElement("hr");
    const doList = document.createTextNode(user);
    console.log(doList);
    liElement.appendChild(check)
    liElement.appendChild(doList);
    ulElement.appendChild(liElement);
    ulElement.appendChild(hrElement);
    document.querySelector(".user").value = '';
    listitem.appendChild(ulElement);
    

    check.addEventListener("click", function(event){
        liElement.classList.toggle("linetext")
    })
}







// const userinp = document.querySelector(".user");
// userinp.addEventListener("keypress", function(event){
//     const user = document.querySelector(".user").value;
    
//     if(!user){
//        alert("write to do list for today!!")
//     }
//     console.log(user);
//     const listitem = document.querySelector(".listitem");
//     listitem.style.display = "block"
//     const check = document.createElement("INPUT");
//     check.setAttribute("type", "checkbox");
//     const ulElement = document.createElement("ul");
//     const liElement = document.createElement("li");
//     liElement.style.paddingBottom = "5px";
//     const hrElement = document.createElement("hr");
//     const doList = document.createTextNode(user);
//    if (event.key === "Enter"){
//     event.preventDefault()
//     console.log(doList);
//     liElement.appendChild(check)
//     liElement.appendChild(doList);
//     ulElement.appendChild(liElement);
//     ulElement.appendChild(hrElement);
//     document.querySelector(".user").value = '';
//     listitem.appendChild(ulElement);
//    }
    

//     check.addEventListener("click", function(event){
//         liElement.classList.toggle("linetext")
//     })
// });