const priceBar = document.querySelectorAll(".price");

function handlePricingSlide(input, output) {
    // output the current slider value
    if (input.currentValEl) input.currentValEl.innerHTML = input.data[input.el.value];
    // output the current slider value
    if (input.currentValEl)
        input.currentValEl.innerHTML = input.data[input.el.value];
    // update prices
    for (let i = 0; i < output.length; i++) {
        const outputObj = output[i];
        if (outputObj.currency) outputObj.currency.innerHTML = outputObj.data[input.el.value][0];
        if (outputObj.amount) outputObj.amount.innerHTML = outputObj.data[input.el.value][1];
        if (outputObj.after) outputObj.after.innerHTML = outputObj.data[input.el.value][2];
    }
}

if(priceBar.length > 0){
    for(let i = 0 ; i < priceBar.length ; i++){
        const slider = priceBar[i];

        //input
        let pricingInput = {el: priceBar.querySelector("input")};

        pricingInput.data = JSON.parse(pricingInput.el.getAttribute("data-price-input"));
        pricingInput.currentValEl = slider.querySelector(".pricing-slider-value");

        pricingInputEl.setAttribute("min", 0);
        pricingInputEl.setAttribute("max", Object.keys(priceInput).length - 1);
        
        !pricingInputEl.getAttribute("value") &&
        pricingInputEl.setAttribute("value", 0);

        //output
        let pricingOutputEl = slider.parentNode.querySelectorAll(".");

        let pricingOutput = [];
        for(let i = 0 ; i < pricingOutputEl.length ; i++){
            const el = pricingOutputEl[i];
            const pricingOutputObj = {};
            
            pricingOutputObj.currency = el.querySelector(".price-currency");
            pricingOutputObj.amount = el.querySelector(".price-amount");
            pricingOutputObj.after = el.querySelector(".price-option");
            pricingOutputObj.data = JSON.parse(el.getAttribute("data-price-output"));
            pricingOutput.push(pricingOutputObj);
        }

        handlePricingSlider(pricingInput, pricingOutput);
            window.addEventListener("input", function () {
            handlePricingSlider(pricingInput, pricingOutput);
        });
    }
}

function updatePageviews(val){
    let output = document.querySelector(".pageviews");
    output.innerText = val;
}