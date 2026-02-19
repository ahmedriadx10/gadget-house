//Products add to cart

const cardParentGet = getElement("products-container");
let count = 0;
cardParentGet.addEventListener("click", function (event) {
  const clickedButton = event.target;
  if (clickedButton.classList.contains("buy-btn")) {
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
    const getUserCartListDashboard = getElement("user-order-dashboard");
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
    <p class="flex justify-between text-lg">price: <span id="products-price-cart">$${productPriceNumber}</span></p>

    <div class="card-actions justify-end">
      <button class="cart-delete-btn btn btn-primary" >Remove</button>
    </div>
  </div>
</div> 

`;
    count++;
    cartIcon.innerText = count;
    cartIconDeep.innerText = count;
    setTotalTk(productPriceNumber);
    cartDataParent.appendChild(userCartDiv);
    cartDataParentSkeletonChild.classList.add("hidden");
    const li = document.createElement("li");
    li.innerHTML = `
<li><div class="flex justify-between text-lg font-medium"><span>${productName}</span> <span>${productPriceNumber}</span></div> </li>
`;
    getUserCartListUl.appendChild(li);
  }
});
