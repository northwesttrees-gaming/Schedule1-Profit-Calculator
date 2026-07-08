const productCost = document.getElementById("productcost");

document.querySelectorAll('input[name="products"]').forEach(radio => {
    radio.addEventListener("change", function () {
        productCost.textContent = "$" + this.dataset.productcost;
    });
});
