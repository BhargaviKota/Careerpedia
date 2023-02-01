

// forms
const Form = document.querySelectorAll("#form-button");
const formActiv = document.querySelector(".button-forms");
const FormClose = document.querySelector(".close-arrow");
for (let i = 0; i < Form.length; i++) {
  Form[i].addEventListener("click", (e) => {
    e.preventDefault();
    formActiv.classList.add("formDisplay");
  });
}

FormClose.addEventListener("click", () => {
  formActiv.classList.remove("formDisplay");
});



//  page redirection in responsive

let links = document.querySelectorAll(".page-redirection");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    menu.classList.remove("nav-active");
    burger.classList.remove("toggle");
  });
}



// form validation

const form = document.querySelector("#form");
let userName = document.querySelector("#name");
let userEmail = document.querySelector("#email");
let userPhoneno = document.querySelector("#PhoneNo");
let input = document.querySelectorAll("input[type='text'],input[type='email']");

form.addEventListener('submit',(e)=>{
  // e.preventDefault();S
  const nameValue = userName.value.trim();
  const emailValue = userEmail.value.trim();
  const phonenoValue = userPhoneno.value.trim();
  // console.log(nameValue);

  if (nameValue == ""){
      e.preventDefault();
      userName.style.border = "2px solid red";
      userName.focus();
      return false;
  }
  if (!isNaN(nameValue)) {
    e.preventDefault();
    userName.style.border = "2px solid red";
    userName.focus();
    return false;
  } else {
    userName.style.border = "2px solid green";
  }

  if (emailValue == ""){
      e.preventDefault();
      userEmail.style.border = "2px solid red";
      userEmail.focus();
      return false;
  }

  if (!isNaN(emailValue)) {
    e.preventDefault();
    userEmail.style.border = "2px solid red";
    userEmail.focus();
    return false;
  } else {
    userEmail.style.border = "2px solid green";
  }

  if (phonenoValue == ""){
      e.preventDefault();
      // phoneno.focus();
      userPhoneno.style.border = "2px solid red";
      return false;
  }

  if (phonenoValue.length<10||phonenoValue.length>10){
      e.preventDefault();
      phoneno.focus();
      return false;
  }

  if (isNaN(phonenoValue)) {
    e.preventDefault();
    userPhoneno.style.border = "2px solid red";
    userPhoneno.focus();
    return false;
  } else {
    userPhoneno.style.border = "2px solid green";
  }

  // input color change

  alert("Sumitted")
  // console.log('submittefd')
  document.querySelector("#form").reset();

})

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("focus", (e) => {
    //  e.preventDefault();
    const nameValue = userName.value.trim();
    const emailValue = userEmail.value.trim();
    const phonenoValue = userPhoneno.value.trim();
    // name validation
    let isMatch = /[a-zA-z]{2,}$/;
    if (nameValue.match(isMatch)) {
      e.preventDefault();
      userName.style.cssText = "border:2px solid green";
    } else {
      e.preventDefault();
      userName.style.cssText = "border:2px solid red";
      userName.focus();
      return false;
    }

    /////----- Email Validation

    let isValid = /[a-zA-Z0-9.]{1,}@[a-zA-z]{1,}[.]{1}[a-zA-Z]{2,3}$/;

    if (emailValue.match(isValid)) {
      e.preventDefault();
      userEmail.style.cssText = "border:2px solid green";
    } else {
      userEmail.style.cssText = "border:2px solid red";
      userEmail.focus();
      return false;
    }


    ///----- Phone Validation

    let numMatch = /[0-9]{10}/;

    if (phonenoValue.match(numMatch)) {
      e.preventDefault();
      userPhoneno.style.cssText = "border:2px solid green";
    } else {
      e.preventDefault();
      userPhoneno.style.cssText = "border:2px solid red";
      userPhoneno.focus();
      return false;
    }


   

  
  });
}



// faqs and course content
let accordian = document.querySelectorAll(".accordian");
let arrow = document.querySelectorAll(".arrow-img");
let ans = document.querySelectorAll(".answer");


for (let i = 0; i < arrow.length; i++) {
  accordian[i].addEventListener("click", () => {
    console.log("hi")
    ans[i].classList.toggle("displayans");
   
    arrow[i].classList.toggle("imagerevese");
  });
}


//burger menu activation
const menu = document.querySelector(".nav-links");
const burger = document.querySelector(".hamburger");
function navslide() {
  burger.addEventListener("click", () => {
    menu.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
}
navslide();

//  navbar shadow after scroll
let btn = document.querySelector(".applyformentorbutton");
let nav = document.querySelector(".navbar");
window.onscroll = () => {
  if (window.scrollY > 20) {
    nav.classList.add("scrolled");
    if (screen.width > 1050 && window.scrollY > 800) {
      btn.style.display = "block";
    }
  } else {
    nav.classList.remove("scrolled");
    btn.style.display = "none";
  }
};

//  youtube video

let close_img = document.querySelectorAll(".close-img");
let over_lay = document.querySelectorAll(".over-lay");
let image = document.querySelectorAll(".video-img, .video-img1");
for (let i = 0; i < image.length; i++) {
  image[i].addEventListener("click", () => {
    over_lay[i].style.cssText = "display: flex ";
    console.log("hi");
  });

  close_img[i].addEventListener("click", () => {
    over_lay[i].style.cssText = "display:none";
    console.log("hello");
  });
}