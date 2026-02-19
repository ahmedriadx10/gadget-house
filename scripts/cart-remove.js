//cart remove

const cartContainer=getElement('user-products-cart-container')

cartContainer.addEventListener('click',function(event){
const getTargeRemoveButton=event.target
if(getTargeRemoveButton.classList.contains('cart-delete-btn')){
  
const cart_card_container=getTargeRemoveButton.parentNode.parentNode.parentNode.parentNode


cartContainer.removeChild(cart_card_container)

// nottification interval
// // let trackInterval=0
// const intervalNottification=setInterval(()=>{



// },2000)




  const warningDiv=document.createElement('div')
  warningDiv.innerHTML=`
    <div role="alert" class="alert alert-warning alert-soft">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
  <span class='text-lg'>Warning: Cart Deleted 😧</span>
</div>
  `
warningDiv.classList.add('w-[90%]','max-w-[500px]','mx-auto')
cartContainer.parentNode.prepend(warningDiv)
setTimeout(()=>{
cartContainer.parentNode.removeChild(warningDiv)

},2000)
}

})