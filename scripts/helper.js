//reusable code


function getElement(putId){

  const foundElement=document.getElementById(putId)
  return foundElement

}

function numberConverter(getValue){
  return Number(getValue)
}

function getDashBoardTotal(){
  const dashBoardPrice=document.getElementById('user-total-price')
  return Number(dashBoardPrice.innerText)
}

function setTotalTk(getPrice){
  const dashBoardPrice=document.getElementById('user-total-price')
const setTotalTk=Number(dashBoardPrice.innerText)+getPrice
dashBoardPrice.innerText=setTotalTk
const totalShowInCartIcon=getElement('total-cart')
totalShowInCartIcon.innerText=setTotalTk
}

function reduceTkFromDashBoard(getTk){
    const dashBoardPrice=document.getElementById('user-total-price')
dashBoardPrice.innerText=getTk
const totalShowInCartIcon=getElement('total-cart')
totalShowInCartIcon.innerText=getTk
}


//     <div class="card card-side   bg-base-100 shadow-sm"> 
//   <figure>
//     <img
//       src="./assets/camera.png"
//       alt="Movie" />
//   </figure>
//   <div class="card-body">
//     <div class="flex items-center gap-5"><div class="inline-grid *:[grid-area:1/1]">
//   <div class="status status-warning animate-ping"></div>
//   <div class="status status-warning"></div>
// </div><span class="text-lg font-bold">Your Product 😍</span></div> 
//     <h2 class="font-bold text-2xl">Drone </h2>
//     <p class="flex justify-between text-lg">price: <span id="products-price-cart">0</span></p>

//     <div class="card-actions justify-end">
//       <button class="cart-delete-btn btn btn-primary" >Remove</button>
//     </div>
//   </div>
// </div> 