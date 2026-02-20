//cart product plus / minus
// here i setting eventlistener ul because have to increse clicked li button price and quantity increase decrease and as if ul previousElementSibling is dashboard total price container i can easily access

const getDashBoardUl = getElement("user-order-list");

getDashBoardUl.addEventListener("click", function (event) {
  const getPlusButtonIcon = event.target;
  const getMinusButtonIcon = event.target;
  const dashBoardTotal = getDashBoardTotal();
  const getLiQuantity =
    getPlusButtonIcon.parentNode.parentNode.children[0].innerText;
  const cartIcon = getElement("cart-count-show");
  const cartIconDeep = getElement("cart-count-items");
  const cartIconNumber = numberConverter(cartIcon.innerText);
  const cartIconDeepNumber = numberConverter(cartIconDeep.innerText);
  if (getPlusButtonIcon.classList.contains("plus-btn")) {
    const getLiPrice =
      getPlusButtonIcon.parentNode.parentNode.parentNode.children[2];
    const calcPlusPrice = numberConverter(getLiPrice.innerText);
    setTotalTk(calcPlusPrice);
    getPlusButtonIcon.parentNode.nextElementSibling.removeAttribute("disabled");

    cartIcon.innerText = cartIconNumber + 1;
    cartIconDeep.innerText = cartIconDeepNumber + 1;
  }

  if (getMinusButtonIcon.classList.contains("minus-btn")) {
    const getLiPrice =
      getMinusButtonIcon.parentNode.parentNode.parentNode.children[2];
    const clackMinusPrice = numberConverter(getLiPrice.innerText);
    if (cartIconDeepNumber > 0) {
      cartIcon.innerText = cartIconNumber - 1;
      cartIconDeep.innerText = cartIconDeepNumber - 1;
    }
    minusMoneyFromDashboradTotal(clackMinusPrice);
  }
});
