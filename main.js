const productContainer = [...document.querySelectorAll(".product-container")];
const next = [...document.querySelectorAll(".next")];
const prev = [...document.querySelectorAll(".prev")];
productContainer.forEach((item,i)=>{
   let containerDimension = item.getBoundingClientRect();
   let containerWidth = containerDimension.width;
   next[i].addEventListener("click", ()=>{
      item.scrollLeft += containerWidth;
   })
   prev[i].addEventListener("click", ()=>{
      item.scrollLeft -= containerWidth;
   })
})
