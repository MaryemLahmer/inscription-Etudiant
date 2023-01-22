let ajoutBtn=document.querySelector("button");
let etudiantList=document.querySelector("ul");
let input=document.getElementById("ns");
let file=document.getElementById("img");
let uploadedImage="";
let display=document.createElement("img");
ajoutBtn.addEventListener("click",addEtudiant);
file.addEventListener("change",function(){
    const reader=new FileReader();
    reader.addEventListener("load",()=>{
        uploadedImage=reader.result;
        display=`url(${uploadedImage})`;
    });
    reader.readAsDataURL(this.files[0]);

});
input.addEventListener("keypress",function(e){
    if (e.key=="Enter"){
        addEtudiant();
    }
});
let i=0;
function addEtudiant(e){
    if (input.value==""){
        alert("no can do");
        return;
    }
    if (file.files.length==0){
        alert("must upload file");
        return;
    }
    let element=document.createElement("li");
    element.id="etudiant"+i;
    i++;
    let NameSurname=document.createElement("span");
    NameSurname.innerHTML=input.value;
    let deleteBtn=document.createElement("button");
    deleteBtn.innerText="delete";
    deleteBtn.classList.add("deleted");
    element.appendChild(NameSurname);
    let picture=document.createElement("div");
    picture.style.backgroundImage=display;
    //picture.style.border="10px solid black";
    //picture.style.width="300px";
    //picture.style.height="300px";
    picture.classList.add("picture");
    element.appendChild(picture);
    element.appendChild(deleteBtn);
    etudiantList.appendChild(element);
    deleteBtn.addEventListener("click",deleteEtudiant);
    input.value="";

}
function deleteEtudiant(e){
    let id=e.target.parentElement.id;
    document.getElementById(id).remove();
}