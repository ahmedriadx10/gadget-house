//cart remove

const cartContainer = getElement("user-products-cart-container");

cartContainer.addEventListener("click", function (event) {
  const getTargeRemoveButton = event.target;
  if (getTargeRemoveButton.classList.contains("cart-delete-btn")) {
    const cart_card_container =
      getTargeRemoveButton.parentNode.parentNode.parentNode.parentNode;

    cartContainer.removeChild(cart_card_container);

    const userCartDashBoradUl = getElement("user-order-list");

    // we can use here .find() method
    // আমরা এখানে ইভেন্ট টারগেট এর বাটন থেকেই কিন্তু পেরেন্ট নোড অ্যাক্সেস করতে পারছি এখানে পেরেন্ট নোড বলতে সেই  কার্ড টা যেটা ইউজার এর প্রোডাক্ট কার্ডস এর মেইন কন্টেইনার এর প্রত্যেক কার্ড কে বুঝাচ্ছে
    //আমরা সেখান থেকে প্রাইস তা এক্সসেস করে জাস্ট ইউজার কার্ট ডাশবোর্ড এর মোট প্রাইস থেকে বাদ দিয়ে দিব

    const getCardPrice =
      getTargeRemoveButton.parentNode.previousElementSibling.children[0]
        .children[0].innerText;

    // here just calculated immediate dashboard total tk and and
    // the removed product tk then the result just passed as a argument of reduceTkFromDashBorad the function sets every single call passed argument as a dashborad total
    const getTotalPrice = getDashBoardTotal();
    const clacReducePrice = getTotalPrice - Number(getCardPrice);
    reduceTkFromDashBoard(clacReducePrice);

    // here card icon count reduced

    const cartIconCartCount = getElement("cart-count-show");
    const cartIconCartCountNumber = Number(cartIconCartCount.innerText);
 const cartIconDeep = getElement("cart-count-items");
    cartIconCartCount.innerText = cartIconCartCountNumber - 1;
cartIconDeep.innerText=Number(cartIconDeep.innerText)-1
    // now delete the every single product name and price list item from user cart dashboard ul
    const ulAllList = userCartDashBoradUl.children;
    const getCartItemName =
      getTargeRemoveButton.parentNode.parentNode.children[1].innerText;

    // just used a for loop all over the dashboard product list and mathed name product is removed every single remove button click event

    for (const x of ulAllList) {
      const liProductName = x.children[0].children[0].innerText;

      if (liProductName.toLowerCase() === getCartItemName.toLowerCase()) {
        userCartDashBoradUl.removeChild(x);
      }
    }

 const cartDataParentSkeletonChild = getElement("skeleton-container");

if(cartContainer.children.length===1){
  cartDataParentSkeletonChild.classList.remove('hidden')
}

// limited discout feature

const getProgressBar=getElement('progress-bar-addtoCart')
const getLefttoGetDiscount=getElement('discount-left-count')
const getRemainingProgressValue=getProgressBar.getAttribute('value')
const progressContainer=getElement('discount-progress-container')



if(Number(Number(getRemainingProgressValue)===10)){
  const getDiscountMessage=getElement('discount-message')
getDiscountMessage.innerText='Ahhh! you missed 20% discount 🥱'
return

}

const calcProgress=Number(getRemainingProgressValue)-1
getProgressBar.setAttribute('value',calcProgress)

  const calcLeftDiscount=Number(getLefttoGetDiscount.innerText)+1
getLefttoGetDiscount.innerText=calcLeftDiscount





    // warning cart delete
    const warningDiv = document.createElement("div");
    warningDiv.innerHTML = `
    <div role="alert" class="alert alert-warning alert-soft">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
  <span class='text-lg'>Warning: Cart Deleted 😧</span>
</div>
  `;
    warningDiv.classList.add("w-[90%]", "max-w-[500px]", "mx-auto");
    cartContainer.parentNode.prepend(warningDiv);
    setTimeout(() => {
      cartContainer.parentNode.removeChild(warningDiv);
    }, 2000);
  }
});
