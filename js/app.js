// burger menu activation
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

//  page redirection in responsive

let links = document.querySelectorAll(".page-redirection");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    menu.classList.remove("nav-active");
    burger.classList.remove("toggle");
  });
}

// testimonials about section

let change_img = document.querySelector(".change-img");
let head = document.querySelector(".head");
let p = document.querySelector(".p");

let data = [
  {
    content:
      "	Careerpedia  has been key to our capacity to learn as well as grow both professionally and personally. This drive helped us  not only in our personal learning curve but also helped by being a means of substantial technical advantages.",

    head_name: "UDAY",

    src: "./images/testimonialimg1.png",
  },

  {
    content:
      "	Correspondence and presentation are also topics of interest for us in our technical training. I recommend careerpedia for technical training as it covers every aspect of training to continually improve our professional skills.",

    head_name: "ADIL",

    src: "./images/testimonialimg2.png",
  },

  {
    content:
      "	Careerpedia enables aspiring professionals  to lead their own turn of events and thereby continually refreshes our knowledge  to stay updated for the dynamic workforce.  It not only opens up more opportunities in the job world but also increases our  chances of winning in technical competitions.",

    head_name: "ABHISHEK",

    src: "./images/testimonialimg3.png",
  },
  {
    content:
      "	The need to keep up with advancing technology is ever increasing in the job world. Careerpedia has enabled me to continue delivering innovation and excellence whilst keeping myself updated with the advancements in the technical world.",
    head_name: "FAISAL",
    src: "./images/testimonialimg4.png",
  },
  {
    content:
      "	Careerpedia keeps me motivated to learn. I love the flexibility I get in my courses at Careerpedia to develop myself further. It helps me expand my technical expertise to a great extent.",
    head_name: "KIRAN",
    src: "./images/testimonialimg5.png",
  },
  {
    content:
      "	Careerpedia has inspired me to pursue my technical career with confidence and has provided me knowledge in many aspects to compete in the job world by not only providing expertise but also developing my communication and soft skills.",
    head_name: "LIKHITHA",
    src: "./images/testimonialimg6.png",
  },
  {
    content:
      "	Connecting with Careerpedia has advanced my learning and practical skills. It has also helped me become more adaptable to the changes in the scope of technology.",
    head_name: "BABU",
    src: "./images/testimonialimg7.png",
  },
  {
    content:
      " Careerpedia has  provided me quality and intensive training to survive in the workforce of skills pertaining to various fields like web development, app design and development, digital marketing.",
    head_name: "SATYA",
    src: "./images/testimonialimg8.png",
  },
  {
    content:
      "	Training at careerpedia has not only helped me incorporate professionalism but also played a major role in enhancing my public speaking skills and losing stage fear to face competition.",
    head_name: "SWATI PATIL",
    src: "./images/testimonialimg9.png",
  },
  {
    content:
      "	A lot of learning at Careerpedia happens through discussions that help us brainstorm and come up with solutions and practice on ideologies we get. It has provided me with overall development.",
    head_name: "PAVAN VAMSI",
    src: "./images/testimonialimg10.png",
  },
  {
    content:
      "	The itinerary at  Careerpedia has helped me advance my skills and has enabled me to tackle any kind of challenges in the process of development. They have provided me ample time, resources and right guidance to upskill.",
    head_name: "DIKSHITA",
    src: "./images/testimonialimg11.png",
  },
  {
    content:
      "	Careerpedia has been the right transition I needed in my learning and training journey. My knowledge of technology and how it integrates into the job world is very helpful for me and hence i would recommend careerpedia.",
    head_name: "KASHIF",
    src: "./images/testimonialimg12.png",
  },
  {
    content:
      "	I am truly proud to be a part of the training programme of Careerpedia as it has helped me gain digital literacy and develop skills that are essential in today’s job world.  I certainly would encourage others to join this paradigm.",
    head_name: "CHANDANA",
    src: "./images/testimonialimg13.png",
  },
  {
    content:
      "	At Careerpedia, my skills are being challenged and motivating me to push myself further with their training program. I am very fond of the interaction sessions as it promotes overall development.",
    head_name: "NAVEENA",
    src: "./images/testimonialimg14.png",
  },
  {
    content:
      "	The training and guidance at overall development at Careerpedia is immensely helpful to  me in my career journey and I would definitely recommend it to others for their career journeys.",
    head_name: "NAGA SRI",
    src: "./images/testimonialimg15.png",
  },
  {
    content:
      "	I believe Careerpedia would open many doors for me in my career journey as they train us efficiently in the advanced and latest technologies. I would encourage  others to become a part of Careerpedia for their career path.",
    head_name: "SIDDHARTH",
    src: "./images/testimonialimg16.png",
  },
  {
    content:
      "	Careerpedia has provided me with the right opportunity at the right time in my career journey by upskilling me in technical knowledge with their intensive training program and ensuring right knowledge is imparted.",
    head_name: "MAHITHA",
    src: "./images/testimonialimg17.png",
  },
  {
    content:
      "	Careerpedia has been the right solution to my skill development journey since it has provided me with the right resources to grow, learn and upskill for the job world. I would proudly recommend it to other aspirants for their journey.",
    head_name: "AISHWARYA",
    src: "./images/testimonialimg18.png",
  },
  {
    content:
      "	With wonderful mentors, atmosphere and other resources, Careerpedia has helped me train and upskill in the required knowledge to get placed in the workforce whilst providing a perfect atmosphere for  self-grow.",
    head_name: "SIRISHA",
    src: "./images/testimonialimg19.png",
  },
  {
    content:
      " The courses at Careerpedia are engaging and the mentors create a sense of community and provide right training with constant improvement checks. I would recommend Careerpedia to people who aspire for a career in technical aspect.",
    head_name: "TARUN",
    src: "./images/testimonialimg20.png",
  },
];

let all_images = document.querySelectorAll(".test-img");

for (let i = 0; i < all_images.length; i++) {
  all_images[i].addEventListener("click", function () {
    p.innerHTML = data[i].content;
    head.innerHTML = data[i].head_name;
    // change_img.src = data[i].src;

    for (let x of all_images) {
      x.style.cssText = "border:none; outline:none;";
    }
    let a = Array.from(all_images).indexOf(event.target);

    all_images[a].style.cssText =
      "border:1px solid #123075; outline: 2px solid white; transform: scale(1.05)";
  });
  all_images[i].classList.add("active");
  all_images[0].style.cssText =
    "border:2px solid #123075; outline: 2px solid white;  transform: scale(1.05)";
}

// smooth scrolling
let scroll = document.querySelectorAll('a[hreaf^="#"]');

scroll.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behaviour: "smooth",
    });
  });
});

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

// adding para to cards

let para = document.querySelectorAll(".hide-data");
let dots = document.querySelectorAll(".dots");

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", () => {
    console.log("hi");
    para[i].style.cssText = "display: inline";
    dots[i].style.cssText = "display: none";
  });
}

// set timer

// Set the date we're counting down to
let timer = document.querySelector(".timer");
var countDownDate = new Date("Oct 31, 2022 23:59:59").getTime();

// Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Output the result in an element with id="demo"
//  timer.innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is over, write some text
//   if (distance < 0) {
//     clearInterval(x);
//    timer.innerHTML = "EXPIRED";
//   }
// }, 1000);

// online offline fee details

// let online = document.querySelector(".online")
// let offline = document.querySelector(".offline")
// let price = document.querySelector("#fee")

// offline.addEventListener ("click",()=>{
//   offline.style.cssText =" color:white ; background-color:#EE7700"
//   online.style.cssText =" color:#2C4364 ; background-color:#F7F8FB"
//   if(price.innerHTML=="1,49,999 INR"){
//     price.innerHTML = "2,49,999 INR"
//   }

// })
// online.addEventListener ("click",()=>{
//   online.style.cssText =" color:white ; background-color:#EE7700"
//   offline.style.cssText =" color:#2C4364 ; background-color:#F7F8FB"
//   if(price.innerHTML=="2,49,999 INR"){
//     price.innerHTML = "1,49,999 INR"
//   }

// })

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

// swiper


