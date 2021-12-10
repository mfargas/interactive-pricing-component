const priceBar = document.querySelectorAll(".slider-views");

if(priceBar.length > 0){
    for(let i = 0 ; i < priceBar.length ; i++){
        const slider = priceBar[i];

        //input
        let pricingInput = {el: document.querySelector("input")};

            pricingInput.data = JSON.parse(pricingInput.el.getAttribute("data-price-input"));
            pricingInput.currentValEl = slider.querySelector(".pageviews");
            pricingInput.thumbSize = parseInt(
                window
                    .getComputedStyle(pricingInput.currentValEl)
                    .getPropertyValue("--thumb-size"),
                        10
                );

            pricingInput.el.setAttribute("min", 0);
            pricingInput.el.setAttribute("max", Object.keys(pricingInput).length - 1);
        
            !pricingInput.el.getAttribute("value") &&
            pricingInput.el.setAttribute("value", 0);

        //output
        const pricingOutputEl = slider.parentNode.querySelectorAll(".price-comp");

        const pricingOutput = [];
        for(let i = 0 ; i < pricingOutputEl.length ; i++){
            const element = pricingOutputEl[i];
            const outputObj = {};
            
            outputObj.currency = element.querySelector(".price-currency");
            outputObj.amount = element.querySelector(".price-amount");
            outputObj.after = element.querySelector(".price-option");
            outputObj.data = JSON.parse(element.getAttribute("data-price-output"));
            console.log(outputObj);
            pricingOutput.push(outputObj);
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

function handlePricingSlider(input, output) {

    // output the current slider value
    if (input.currentValEl){
        input.currentValEl.innerHTML = input.data[input.el.value];
    }
    
    // output the current slider value
    if (input.currentValEl){
        input.currentValEl.innerHTML = input.data[input.el.value];
    }
    // update prices
    for (let i = 0; i < output.length; i++) {
        const outputObj = output[i];
        if (outputObj.currency) outputObj.currency.innerHTML = outputObj.data[input.el.value][0];
        if (outputObj.amount) outputObj.amount.innerHTML = outputObj.data[input.el.value][1];
        if (outputObj.after) outputObj.after.innerHTML = outputObj.data[input.el.value][2];
    }
}