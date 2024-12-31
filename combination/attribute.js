// let btn=document.createElement("button");
// btn.innerText="click me";
// console.log(btn);
// let div=document.querySelector("div");
// // div.append(btn);//add at end
// //div.prepend(btn);// add at start
// div.before(btn);
let newHeading=document.createElement("h1");
newHeading.innerHTML="Job Application";
document.querySelector("body").prepend(newHeading);
//delete

newHeading.remove();