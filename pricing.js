const priceBar = document.querySelectorAll(".price");

if(priceBar.length > 0){
    for(let i = 0 ; i < priceBar.length ; i++){
        const slider = priceBar[i];

        //input
        const pricingInput = {el: priceBar.querySelector("input")};

        pricingInput.data = JSON.parse(pricingInput.el.getAttribute("data-price-input"));
        pricingInput.currentValEl = slider.querySelector(".pageviews");

        pricingInputEl.setAttribute("min", 0);
        pricingInputEl.setAttribute("max", Object.keys(priceInput).length - 1);
        
        !pricingInputEl.getAttribute("value") &&
        pricingInputEl.setAttribute("value", 0);

        //output
        const pricingOutputEl = slider.parentNode.querySelectorAll(".price-comp");

        const pricingOutput = [];
        for(let i = 0 ; i < pricingOutputEl.length ; i++){
            const element = pricingOutputEl[i];
            const outputObj = {};
            
            pricingOutputObj.currency = element.querySelector(".price-currency");
            pricingOutputObj.amount = element.querySelector(".price-amount");
            pricingOutputObj.after = element.querySelector(".price-option");
            pricingOutputObj.data = JSON.parse(element.getAttribute("data-price-output"));
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