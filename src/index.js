"use strict";
const $ = (e, all) =>all ? document.querySelectorAll(e) : document.querySelector(e);

function setState(selector,callback){
    const targetElement = $(selector)
    let innerHtml = callback().toString()
    function updateTargetElement(newHtml) {
        targetElement.innerHTML=""
        targetElement.innerHTML=newHtml
    }
    updateTargetElement(innerHtml)
}
///////////////////////////



function ListItem(prop) {
    const { title, list,id } = prop;
    return `
    <li id="${id}">
        <h4>${title}</h4>
        <p>${list}</p>
        <button type="button">Delete</button>
        <button type="button">edit</button>
    </li>
  `;
}

let state = [
    { title: "Task 1", list: "Do something",id:0},
    { title: "Task 2", list: "Do another thing",id:1}
];

function ListContainer() {
    return `
        ${state.map(e=>(
            ListItem(e)
        )).join("")}
    `;
}
setState("#list-container",()=>ListContainer())
// initial render

const addListItem = (e)=>{
    e.preventDefault()
    const newList={
        title:e.target[0].value,
        list:e.target[1].value,
        id:state.length
    }
    state=[...state,newList]
    setState("#list-container",()=>ListContainer())
}
// const DeleteListItem= async () => {
    
//     setState("#list-container",()=>ListContainer())
// }



$("form").addEventListener("submit",addListItem)
