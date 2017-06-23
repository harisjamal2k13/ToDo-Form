function myName(){
var nam = document.getElementById("name").value; 
var node = document.createElement("h4");
var txt = document.createTextNode(nam);
var image = document.createElement("img");
image.src="images/del.png";
node.appendChild(image);
node.appendChild(txt);
document.getElementById("name1").appendChild(node);
document.getElementById("name").value = "";
image.onclick=function(){
var td= this.parentNode;
var tr = td.parentNode;
tr.removeChild(td);
 }
}
function myRoll(){
var nam = document.getElementById("roll").value; 
var node = document.createElement("h4");
var txt = document.createTextNode(nam);
var image = document.createElement("img");
image.src="images/del.png";
node.appendChild(image);
node.appendChild(txt)
document.getElementById("roll1").appendChild(node)
document.getElementById("roll").value = "";
image.onclick=function(){
var td= this.parentNode;
var tr = td.parentNode;
tr.removeChild(td);
 }
}
function myPhone(){
var nam = document.getElementById("phone").value;
var node = document.createElement("h4");
var txt = document.createTextNode(nam);
var image = document.createElement("img");
image.src="images/del.png";
node.appendChild(image);
node.appendChild(txt)
document.getElementById("phone1").appendChild(node)
document.getElementById("phone").value = "";
image.onclick=function(){
var td= this.parentNode;
var tr = td.parentNode;
tr.removeChild(td);
 }
}
function deleteAll(){
    document.getElementById("del").style.display='none';

}
