// all btn
const allBtn = document.getElementsByClassName("btn");
for (const btn of allBtn) {
    btn.addEventListener("click", function clickBtn(event) {
         document.getElementById("my_modal_3").showModal();
         console.log()
        const name = event.target.parentNode.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        const showDisplay = document.getElementById("displayShow");
        const div = document.createElement("div");
        div.classList.add("dynamic-add");
        const p = document.createElement("p");
        const p2 = document.createElement("p");
        p.innerText = name;
        p2.innerText = price + "$";
        div.appendChild(p);
        div.appendChild(p2);
        showDisplay.appendChild(div);
        
        const totalCost = getConvertText("total-cost");
        document.getElementById("total-cost").innerText = totalCost + parseInt(price);
         showDisplay.addEventListener("click", function(e){
            e.target.parentNode.removeChild(e.target)
         })
    })
}

// convert function
function getConvertText(elements){
   const element = document.getElementById(elements).innerText;
   const convertElement = parseInt(element);
   return convertElement;
}
