let listItems=`  <span class="listcontainer">
                        <br>
                        <input type="checkbox">
                        <span>
                            <label>List</label>
                            <button class="delete">X</button>
                        </span>
                    </span>
                `;

document.querySelector("#lists").innerHTML=listItems;

document.querySelector("#myBtn").addEventListener("click",function(ev){
    addlists();
})
document.querySelector("#listInput").addEventListener("keypress",function(ev){
    if (ev.key=="Enter") {
        addlists()
    }
})
let listNumb=0;
function addlists(){
    newInput=document.querySelector("#listInput").value
    console.log(document.querySelector("#listInput").value)
    
    listItems +=(`  <span class="listcontainer${listNumb}">
                        <br>
                        <input type="checkbox">
                        <span>
                            <label>${newInput}</label>
                            <button class="delete">X</button>
                        </span>
                    </span>
                `);
    listNumb +=1

    document.querySelector("#lists").innerHTML=listItems;   
    
    document.querySelector("#listInput").value=""
}