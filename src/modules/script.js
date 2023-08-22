"use strict"
const formInput = document.getElementById("form-input");
const listContainer = document.getElementById("list-container");


const listData = [
    {
        title: "name of the title",
        list: "I would like to know, whats the right structure for a list of objects in JSON. We are using to convert the POJO's to JSON.",
    },
];


function ListContainer() {
    return `
    <main>
        <ul id="list-container">
            ${listData.map(d=>(
                ListItem(d)
            ))}
        </ul>
    </main>
    `;
}

function ListItem(prop) {
    const { title, list } = prop;
    return `
    <li>
        <h4>${title}</h4>
        <p>${list}</p>
        <button type="button">Delete</button>
        <button type="button">edit</button>
    </li>
  `;
}


formInput.addEventListener("submit",function (ev) {
    ev.preventDefault()
    console.log(ev)
})
