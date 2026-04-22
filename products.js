// var students=[
//     {
//         id:1,
//         name:"anu",
//         course:"python",
//         image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
//     },
//     {
//         id:1,
//         name:"aagana",
//         course:"mern",
//         image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"

//     },
//     {
//         id:1,
//         name:"appu",
//         course:"python",
//         image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
//     }
// ]

// let studentlist=""
// for(let p of students){
//     studentlist=studentlist+`<div> 
//     <h1>${p.name}</h1>
//     <h3>${p.course}</h3>
//     <img src="${p.image}"  style="width:200px">
//     </div>`
// }

// document.getElementById("produts_space").innerHTML=studentlist

async function getallproducts(){
   var produts=await fetch("https://fakestoreapi.com/products",{
    method:"GET"
})

var data=await produts.json()
let studentlist=""
for(let p of data){
    studentlist=studentlist+`<div class="card" style="width: 18rem;">
  <img src="${p.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${p.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-danger">Go somewhere</a>
  </div>
</div>`
}

 document.getElementById("produts_space").innerHTML=studentlist



}

getallproducts()





