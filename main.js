function newItem() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let todo = document.createTextNode(inputValue);
    li.appendChild(todo);
    if(inputValue === ''){
        alert("Stop playin!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
}

let list = document.querySelector('ul');

list.addEventListener('click', function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle('checked');
    }
})
