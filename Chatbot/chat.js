console.log("hello");
let chat=document.querySelector(".outcomeing");
 let text =document.querySelector(".text");
let box1 =document.querySelector(".box");
 
 let elem;
let api_key=""; 
function response()
{
   let api_url="";
   const requestOptions={
    method:"post"
   headers:{
       "Content-Type":"application/json";
       "Authorization":`Bearer${api_key}`;
}
}
 body:JSON:stringify({
   
})
 fetch(api_key,requestOptions)
.then((res){res.json()})
.then((data){console.log(data)})
.catch((err){console.log()})
}

 function demo()
{
 elem = text.value;
 
let li= document.createElement("li");


li.style.width="fit-content";
li.style.position="relative";
  li.style.top="-55px";
 li.style.margin="7px";
 
li.className="outcomeing";
box1.appendChild(li);

 console.log(elem);
setTimeout(()=>{
  let li=  document.createElement("li");
  
  li.style.position="relative";
  li.style.top="-40px";
  li.style.width="fit-content";
  li.className="incomeing";
  li.innerHTML="thinking.."
   box1.appendChild(li);
  },600);

text.value="";
  
}
  