const allBtn = document.getElementsByClassName("btnHandler");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");



for(const btn of allBtn){
  btn.addEventListener("click", function(e){
  modal.classList.remove("hidden");

  const nameProduct = e.target.parentNode.parentNode.childNodes[1].innerText;
  const priceProduct = e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
console.log()


  const outputList = document.getElementById("output");
  const div = document.createElement("div");
  div.classList.add("dynamic-add")
  const p = document.createElement("p");
  p.innerText = nameProduct;
  const p2 = document.createElement("p");
  p2.innerText = `${priceProduct} $`;
  div.appendChild(p);
  div.appendChild(p2);
  outputList.appendChild(div);

  const totalCost = getParseInner("totalCost");
  document.getElementById("totalCost").innerText = totalCost + parseInt(priceProduct);
 
 
  })
}

// close modal
closeModal.addEventListener("click", (e) => {
   modal.classList.add("hidden");
   
})

