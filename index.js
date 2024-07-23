function showlist() {
    const user = document.querySelector(".user").value;
    
    if(!user){
        return alert("write to do list for today!!")
    }
    // console.log(user);
    const listitem = document.querySelector(".listitem");
    listitem.style.display = "block"
    const check = document.createElement("INPUT");
    check.setAttribute("type", "checkbox");
    const ulElement = document.createElement("ul");
    const liElement = document.createElement("li");
    liElement.style.paddingBottom = "5px";
    const hrElement = document.createElement("hr");
    const doList = document.createTextNode(user);
    // console.log(doList);
    liElement.appendChild(check)
    liElement.appendChild(doList);
    ulElement.appendChild(liElement);
    ulElement.appendChild(hrElement);

    let dataEntry = [];
    let storedEntry = [];
    storedEntry.push(user)
    localStorage.setItem("todos", storedEntry);
    let newTodo = localStorage.getItem("todos")
dataEntry.push(newTodo)
    if (storedEntry.length > 0){
        storedEntry.forEach((data) => {
            console.log(data);
        })
    }


    document.querySelector(".user").value = '';
    listitem.appendChild(ulElement);
    

    check.addEventListener("click", function(event){
        liElement.classList.toggle("linetext");
    })
}

function playit(){
    const main = document.querySelector(".main");
    const inputside = document.querySelector(".inputside");
    const listitem = document.querySelector(".listitem");
    const tlogo = document.querySelector(".tlogo");
    const btn = document.querySelector(".btn");
    const sun = document.querySelector(".sun");
    const moon = document.querySelector(".moon");

    main.classList.toggle("light-mode");
    inputside.classList.toggle("gray-mode");
    listitem.classList.toggle("gray-mode");
    tlogo.classList.toggle("chgcolo");
    btn.classList.toggle("unbtn");
    sun.classList.toggle("hide");
    moon.classList.toggle("show");
    
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