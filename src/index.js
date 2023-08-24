"use strict";

import useState from "./modules/useState";
import $ from "./modules/querySelector";

function app() {
    const btn = $(".btn");
    let [count ,setCount]= useState(1)

    btn.addEventListener("click",()=>{
        setCount((e)=>count+=1)
        Render()
    })
    function Render() {
        const div = $("#count")
        div.innerHTML = count
    }

    Render()
}
app()



// ///////////////////////////

// function ListItem(prop) {
//     const { title, list,id } = prop;
//     return `
//     <li  id="${id}">
//         <h4>${title}</h4>
//         <p>${list}</p>
//         <button type="button">Delete</button>
//         <button type="button">edit</button>
//     </li>
//   `;
// }

// let state = [
//     { title: "Task 1", list: "Do something",id:0},
//     { title: "Task 2", list: "Do another thing",id:1}
// ];

// function ListContainer() {
//     // $("li","all").forEach((li,index) => {
//     //     li.addEventListener("click",(e)=>{
//     //         // console.log(e.target.parentNode.getAttribute("id"))
//     //         console.log("fffff")
//     //     })
//     // });
//     return `
//         ${state.map(e=>(
//             ListItem(e)
//         )).join("")}
//     `;
// }
// setState("#list-container",()=>ListContainer())
// // initial render ↖

// function addListItem (e){
//     e.preventDefault()
//     const newList={
//         title:e.target[0].value,
//         list:e.target[1].value,
//         id:state.length
//     }
//     state=[...state,newList]
//     setState("#list-container",()=>ListContainer())
// }
// // function DeleteListItem(e) {
// //     console.log(e)
// // }








// $("form").addEventListener("submit",addListItem)
//     console.log($("li","all"))
