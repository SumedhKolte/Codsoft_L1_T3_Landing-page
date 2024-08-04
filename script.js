const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 1299,
    colors: [
      { 
        code: "black",
        img: "nike black.png",
      },
      {
        code: "darkblue",
        img: "../assets/Images/sneaker-images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 999,
    colors: [
      {
        code: "lightgray",
        img: "jordan shoes 2.png",
      },
      {
        code: "green",
        img: "../assets/Images/sneaker-images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 1199,
    colors: [
      {
        code: "lightgray",
        img: "blazer.png",
      },
      {
        code: "green",
        img: "../assets/Images/sneaker-images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 1579,
    colors: [
      {
        code: "black",
        img: "crater.png",
      },
      {
        code: "lightgray",
        img: "../assets/Images/sneaker-images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 1579,
    colors: [
      {
        code: "gray",
        img: "hippie.png",
      },
      {
        code: "black",
        img: "../assets/Images/sneaker-images/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
  
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

window.addEventListener("scroll", function() {
  var navBottom = document.querySelector(".navBottom");
  var navTopHeight = document.querySelector(".navTop").offsetHeight;
  
  if (window.scrollY >= navTopHeight) {
    navBottom.style.position = "fixed";
    navBottom.style.top = "0";
  } else {
    navBottom.style.position = "relative";
    navBottom.style.top = "initial";
  }
});
