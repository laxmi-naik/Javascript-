let button=document.querySelector("button");
let mode="light";
button.addEventListener("click",()=>{
if(mode==="light"){
    mode="dark";
   // document.querySelector("body").style.backgroundColor="black";
   document.querySelector("body").classList.add("dark").classList.remove("light");
}else{
    mode="light";
    document.querySelector("body").classList.add("light").classList.remove("dark");
   // document.querySelector("body").style.backgroundColor="white";
}
console.log(mode);
});