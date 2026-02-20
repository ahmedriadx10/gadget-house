//Products add to cart

const cardParentGet = getElement("products-container");

cardParentGet.addEventListener("click", function (event) {
  const clickedButton = event.target;
  if (clickedButton.classList.contains("buy-btn")) {
    if (clickedButton.classList.contains("already-clicked")) {
      return;
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

    // get discount progress bar

    const getProgressBar = getElement("progress-bar-addtoCart");
    const getLefttoGetDiscount = getElement("discount-left-count");
    const getRemainingProgressValue = getProgressBar.getAttribute("value");
    const progressContainer = getElement("discount-progress-container");
    const clacProgress = Number(getRemainingProgressValue) + 1;

    if (clacProgress <= 10) {
      getProgressBar.setAttribute("value", clacProgress);
      getLefttoGetDiscount.innerText = 10 - clacProgress;
      if (Number(getLefttoGetDiscount.innerText) === 0) {
        const newDiscountMessage = document.createElement("p");
        newDiscountMessage.innerText = `
If You don't remove cart from your cart list after 24 hours you will get a 20% discount🔥 voucher
`;
        newDiscountMessage.classList.add("font-italic", "text-lg", "text-info");
        newDiscountMessage.setAttribute("id", "discount-message");
        progressContainer.appendChild(newDiscountMessage);
      }
    }

    userCartDiv.classList.add("cart-card");

    setTotalTk(productPriceNumber);
    cartDataParent.appendChild(userCartDiv);
    cartDataParentSkeletonChild.classList.add("hidden");
    const li = document.createElement("li");
    li.innerHTML = `
<div class="flex justify-between text-lg font-semibold"><span>${productName}</span><span>${productPriceNumber}</span></div>
`;
    getUserCartListUl.appendChild(li);
    clickedButton.classList.add("already-clicked");
    const successMessage = document.createElement("div");
    successMessage.innerHTML = `
    <div role="alert" class="alert alert-success alert-soft">
  <span>Your product has been added on the cart !</span>
</div>
    `;

    const cartTitleParent = getElement("cart-area-title");
cartTitleParent.appendChild(successMessage)

    cartIcon.innerText = getUserCartListUl.children.length - 1;
    cartIconDeep.innerText = getUserCartListUl.children.length - 1;


    setTimeout(() => {
      const cartTitleParent = getElement("cart-area-title");
      cartTitleParent.removeChild(successMessage);
    }, 2000);
  }
});
