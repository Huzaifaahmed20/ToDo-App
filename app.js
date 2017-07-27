var remove = document.getElementsByClassName("remove");
var i;
for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//Add ToDo
function add() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("name").value;
    var txt = document.createTextNode(inputValue);
    li.appendChild(txt);


    if (inputValue === '') {
        alert("You have to write something!");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("name").value = "";

    var pic = document.createElement("img");
    pic.className = "remove"
    pic.setAttribute("src", "delete.png");
    li.appendChild(pic);

    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function () {
            var divi = this.parentElement;
            divi.style.display = "none";
        }
    }
}




//Delete ToDo
function del(){
    document.getElementById("list").innerHTML="";
    alert("Successfully Deleted");
}