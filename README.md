# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![](images/screenshot-price-component.png)

### Live Site URL: [Interactive Price Bar](https://marjoree-interactive-price-bar.netlify.app/)

## My process
I styled the range input slider component through CSS with HTML data input and output relations through JavaScript. I included various versions of the range input such as ms, moz, and webkit in order to ensure accessibility between browsers. This was the trickiest part to learn as this causes a lot of repetition 
between each input variation.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- HTML data input/output attributes
- Vanilla JavaScript

### What I learned

```html
<input type="range" class="slider" 
        data-price-input='{
          "0": ["10", "k"],
          "1": ["50", "k"],
          "2": ["100", "k"],
          "3": ["500", "k"],
          "4": ["1", "m"]
        }' 
        oninput="updatePageviews(this.value)">
```
```css
input[type=range]::-webkit-slider-thumb{
    -webkit-appearance: none;
    content: '';
    margin-top: -14px;
    background: url('./images/icon-slider.svg');
    background-color: hsl(174, 86%, 45%);
    border: none;
    border-radius: 50%;
    box-shadow: 0 3px 3px 3px hsl(174, 77%, 80%);
    height: 36px;
    width: 36px;
    background-size: 1rem;
    background-position: center;
    background-repeat: no-repeat;
    cursor: ew-resize;
}

input[type=range]::-moz-range-thumb{
    -webkit-appearance: none;
    content: '';
    margin-top: -14px;
    background: url('./images/icon-slider.svg');
    background-color: hsl(174, 86%, 45%);
    border: none;
    border-radius: 50%;
    box-shadow: 0 3px 3px 3px hsl(174, 77%, 80%);
    height: 36px;
    width: 36px;
    background-size: 1rem;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
}

input[type=range]::-ms-thumb{
    -webkit-appearance: none;
    content: '';
    margin-top: -14px;
    background: url('./images/icon-slider.svg');
    background-color: hsl(174, 86%, 45%);
    border: none;
    border-radius: 50%;
    box-shadow: 0 3px 3px 3px hsl(174, 77%, 80%);
    height: 36px;
    width: 36px;
    background-size: 1rem;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
}
```

```html
this will be updated by updatePageviews(this.value)

<div class="pageviews-comp">
  <span class="pageviews">100k</span>Pageviews
</div>

<input type="range" class="slider" data-price-input='{
    "0": ["10", "k"],
    "1": ["50", "k"],
    "2": ["100", "k"],
    "3": ["500", "k"],
    "4": ["1", "m"]
  }' 
  oninput="updatePageviews(this.value)">
```
```js
updates the div w .pageviews-comp

function updatePageviews(val){
    let output = document.querySelector(".pageviews");
    output.innerText = val;
}
```

### Continued development

### Useful resources

- [CSS Tricks | Range Input](https://css-tricks.com/sliding-nightmare-understanding-range-input/) -
<!-- - [Example resource 2](https://www.example.com) -  -->

## Author

- Website - [www.marjoree.com](https://www.marjoree.com)
- Frontend Mentor - [@mfargas](https://www.frontendmentor.io/profile/mfargas)
- Twitter - [@marjoree_js](https://www.twitter.com/marjoree_js)

<!-- ## Acknowledgments -->
