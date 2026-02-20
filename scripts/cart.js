//Products add to cart

const cardParentGet = getElement("products-container");
let count = 0;
cardParentGet.addEventListener("click", function (event) {
  const clickedButton = event.target;
  if (clickedButton.classList.contains("buy-btn")) {

    if(clickedButton.classList.contains('already-clicked')){
      return
    }

    const mainProductCard = clickedButton.parentNode.parentNode.parentNode;
    const productDetailsCard = clickedButton.parentNode.parentNode;

    const productImg = mainProductCard.children[0].children[0];
    const productImgSrc = productImg.getAttribute("src");

    const productNameHead = productDetailsCard.children[0];
    const productName = productNameHead.innerText;
    const productPrice =
      productNameHead.nextElementSibling.nextElementSibling.children[0]
        .innerText;
    const productPriceNumber = numberConverter(productPrice);

    const cartDataParent = getElement("user-products-cart-container");
    const cartDataParentSkeletonChild = getElement("skeleton-container");
    // const getUserCartListDashboard = getElement("user-order-dashboard");
    const getUserCartListUl = getElement("user-order-list");
    const cartIcon = getElement("cart-count-show");
    const cartIconDeep = getElement("cart-count-items");

   

    const userCartDiv = document.createElement("div");
    userCartDiv.innerHTML = `
    <div class="card card-side   bg-base-100 shadow-sm"> 
  <figure>
    <img
      src="${productImgSrc}" />
  </figure>
  <div class="card-body">
    <div class="flex items-center gap-5"><div class="inline-grid *:[grid-area:1/1]">
  <div class="status status-warning animate-ping"></div>
  <div class="status status-warning"></div>
</div><span class="text-lg font-bold">Your Product 😍</span></div> 
    <h2 class="font-bold text-2xl">${productName}</h2>
    <p class="flex justify-between text-lg">price: <span>$<span>${productPrice}</span></span></p>

    <div class="card-actions justify-end">
      <button class="cart-delete-btn btn btn-primary" >Remove</button>
    </div>
  </div>
</div> 

`;
userCartDiv.classList.add('cart-card')
    count++;
    cartIcon.innerText = count;
    cartIconDeep.innerText = count;
    setTotalTk(productPriceNumber);
    cartDataParent.appendChild(userCartDiv);
    cartDataParentSkeletonChild.classList.add("hidden");
    const li = document.createElement("li");
    li.innerHTML = `
<div class="flex justify-between text-lg font-semibold"><span>${productName}</span> <p class='flex justify-center items-center gap-3'><span>${1}</span> <button class='btn h-5 w-5'><i class="plus-btn fa-solid fa-plus"></i></button><button class=' btn h-5 w-5'><i class="minus-btn fa-solid fa-minus"></i></button></p> <span>${productPriceNumber}</span></div>
`;
    getUserCartListUl.appendChild(li);
    clickedButton.classList.add('already-clicked')
    const successMessage=document.createElement('div')
    successMessage.innerHTML=`
    <div role="alert" class="alert alert-success alert-soft">
  <span>Your product has been added on the cart !</span>
</div>
    `
 
const cartTitleParent= getElement('cart-area-title')
cartTitleParent.appendChild(successMessage)

const getAllMinusIcon=document.getElementsByClassName('minus-btn')

for(const icon of getAllMinusIcon){

  icon.parentNode.setAttribute('disabled',true)
}


    setTimeout(()=>{
      const cartTitleParent= getElement('cart-area-title')
cartTitleParent.removeChild(successMessage)

    },2000)
  }
});
