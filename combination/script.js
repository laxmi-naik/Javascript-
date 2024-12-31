// let  h2=document.querySelector ("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText+" from apan college";

let dev=document.querySelectorAll(".box");
console.log(dev);
// dev[0].innerText=dev[0].innerText+ "new unique value 1";
// dev[1].innerText=dev[1].innerText+ "new unique value 2";
// dev[2].innerText=dev[2].innerText+ "new unique value 3";
// let index=0;
// for(div of dev  ){
// div.innerText=div.innerText+ `new key  ${index}`;
// index++;
// }
let index=0;
for(div of dev  ){
div.innerText=`new key  ${index}`;
index++;
}