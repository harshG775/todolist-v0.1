"use strict";
const listData = [
    {
        title: "name of the title",
        list: "I would like to know, whats the right structure for a list of objects in JSON. We are using to convert the POJO's to JSON.",
    },
    {
        title: "name of the title",
        list: "I would like to know, whats the right structure for a list of objects in JSON. We are using to convert the POJO's to JSON.",
    },
];

function index(element) {
    const Root = document.getElementById("root");
    Root.innerHTML=element.trim();
    return Root.content.firstElementChild
}

index(App())
function App() {
  return (`
    ${FormHeader()}
    ${ListContainer()}
  `)
}



function FormHeader() {
    return `
    <header>
        <form action="" id="form-input">
            <input type="text" placeholder="title" required />
            <input type="text" placeholder="list" required />
            <button type="submit">add</button>
        </form>
    </header>
`;
}

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







// const listData = [
//     {
//         title: "name of the title",
//         list: "I would like to know, whats the right structure for a list of objects in JSON. We are using to convert the POJO's to JSON.",
//     },
//     {
//         title: "name of the title",
//         list: "I would like to know, whats the right structure for a list of objects in JSON. We are using to convert the POJO's to JSON.",
//     },
// ];

// function index() {
//     const Root = document.getElementById("root");
//     Root.innerHTML = App()
// }
// index()

// function App() {
    
//     return `
//     ${FormHeader(listData)}
//     ${ListContainer(listData)}
//     `;
// }

// function FormHeader() {
//     return `
//     <header>
//         <form action="" id="form-input">
//             <input type="text" placeholder="title" required />
//             <input type="text" placeholder="list" required />
//             <button type="submit">add</button>
//         </form>
//     </header>
// `;
// }

// function ListContainer(listData) {
//     return `
//     <main>
//         <ul id="list-container">
//             ${listData.map(d=>(
//                 ListItem(d)
//             ))}
//         </ul>
//     </main>
//     `;
// }

// function ListItem(prop) {
//     const { title, list } = prop;
//     return `
//     <li>
//         <h4>${title}</h4>
//         <p>${list}</p>
//         <button type="button">Delete</button>
//         <button type="button">edit</button>
//     </li>
//   `;
// }

// function appendList(e) {
//         e.preventDefault()
//         const newList ={
//             title: formInput[0].value,
//             list: formInput[1].value
//         }
    
//         console.log(newList)
// }


// const formInput = document.getElementById("form-input")

// formInput.addEventListener("submit",appendList)

