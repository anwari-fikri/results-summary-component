# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [https://github.com/anwari-fikri/results-summary-component]
- Live Site URL: [https://anwari-fikri.github.io/results-summary-component/]

## My process

### Built with

- Tailwind
- Flexbox
- Mobile-first workflow

### What I learned

I found it very easy to start building from mobile-first workflow with tailwind

For example, start working with mobile-first workflow

```html
<div class="flex flex-col mx-auto bg-white md:rounded-3xl></div>
```

after its done, you can start adding the breakpoint that will show on desktop view

```html
<div
  class="flex flex-col mx-auto bg-white md:rounded-3xl md:shadow-2xl shadow-light-lavender md:flex-row md:items-center md:justify-center md:w-5/12"
></div>
```

I didn't bother to work with tablet view for this project because im lazy.

Also I was planning to work with using the data.json file but i need to work with HTML DOM elements and i honestly dont really want to do it. I should have build this with react instead which will make it easier for me to work with the json file. I will start using react from this point onwards.

## Author

- Website - [Anwari Fikri](https://www.anwarifikri.com/)
- Frontend Mentor - [@anwari-fikri](https://www.frontendmentor.io/profile/anwari-fikri)
