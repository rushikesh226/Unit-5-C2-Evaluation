// fill in javascript code here


document.querySelector("form").addEventListener("submit",displayInfo);

function displayInfo(){
    event.preventDefault();
    var name=document.querySelector("#name").value;
    var docID=document.querySelector("#docID").value;
    var dept=document.querySelector("#dept").value;
    var exp=document.querySelector("#exp").value;
    exp=+exp;
    var email=document.querySelector("#email").value;
    var mbl=document.querySelector("#mbl").value;
    var role;
    if(exp>5){
        role="Senior";
    }
    else if(exp<=5 && exp>=2){
        role="Junior";
    }
    else{
        role="Trainee";
    }
    var tr=document.createElement("tr");

    var td1=document.createElement("td");
    td1.innerText=name;
    var td2=document.createElement("td");
    td2.innerText=docID;
    var td3=document.createElement("td");
    td3.innerText=dept;
    var td4=document.createElement("td");
    td4.innerText=exp;
    var td5=document.createElement("td");
    td5.innerText=email;
    var td6=document.createElement("td");
    td6.innerText=mbl;
    var td7=document.createElement("td");
    td7.innerText=role;
    var td8=document.createElement("td");
    td8.innerText="Delete";
    td8.style.color="black";
    td8.style.backgroundColor="red";
    td8.addEventListener("click",deleteRow);
    
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(tr);
}

function deleteRow(){
    event.target.parentNode.remove();
}