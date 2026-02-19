//Card Hover effect

const cardParent=getElement('products-container')


cardParent.addEventListener('mouseover',function(event){
const targetElement=event.target
 if(targetElement.classList.contains('card-img')){

  const cardMainParent=targetElement.parentNode.parentNode

  const hiddenCardItem=cardMainParent.children[1]
 hiddenCardItem.classList.remove('hidden')

 }

})
cardParent.addEventListener('mouseout',function(event){
const targetElement=event.target
 if(targetElement.classList.contains('card-img')){

  const cardMainParent=targetElement.parentNode.parentNode

  const hiddenCardItem=cardMainParent.children[1]
setTimeout(()=>{
   hiddenCardItem.classList.add('hidden')
},2000)

 }

})