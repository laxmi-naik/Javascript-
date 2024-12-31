//js node event
// let button=document.querySelector("button");
// button.onclick=()=>{
//    console.log("button is clicked");
// //    alert("hello......");
// prompt("say hiii............");
    
// };
//let div=document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside div");
// };
//event object
//button.onclick=(evt)=>{
//     console.log(evt);
// console.log(evt.type);
// console.log(evt.target);
// console.log(evt.clientX,e.clientY);

// };
// event listenser
let button=document.querySelector("button");
button.addEventListener("click",() =>{
console.log("button1 is clicked1");
});

button.addEventListener("click",(evt) =>{
    
console.log("button12 is clicked2");
// console.log(evt);
//     console.log(evt.type);
// console.log(evt.traget);
});
let handler3=()=>{

    console.log("button1 is clicked3");
    };
    button.addEventListener("click",handler3);
    button.addEventListener("click",() =>{
        console.log("button1 is clicked4");
        });
        button.removeEventListener("click",handler3);