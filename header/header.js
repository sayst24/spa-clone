let media = window.matchMedia("(max-width: 1060px)");

function subNavigation (){
  let subNav = document.querySelectorAll('.sub-nav');
  let aboutUs = document.querySelectorAll('#about-us')[0];
  let products = document.getElementById('products');

  //makes subNav visible
  const show = function(num){
    subNav[num].style.visibility = "visible";
    subNav[num].style.display = "flex";
  };
  //hides subNav
  const hide = function(num){
    subNav[num].style.visibility = "hidden";
    subNav[num].style.display = "none";
  };

  //makes about subNav visible
  function showAbt(){
      show(0);
  };
  //makes product subNav visible
  function showProd(){
      show(1);
  };
  //hides about subNav
  function hideAbt(){
      hide(0);
  };
  //hides product subNav
  function hideProd(){
      hide(1);
  };

  //subnav when screen bigger than 1060px
  function subNavBig(section, num){
    //let array1 = [show(num),hide(num)]
    if(!media.matches){
      //initially hides subNav
      hide(num);
      if(num===1){
        //mouseover - show; mouseout-hide
        section.addEventListener('mouseover', showProd, true);
        section.addEventListener('mouseout', hideProd, true);
      }else{
        section.addEventListener('mouseover', showAbt, true);
        section.addEventListener('mouseout', hideAbt, true);
      };
    }
  };
  //subNav when nav menu hidden
  function subNavSmall(section,num){
    //let array1 = [show(num), hide(num)];
    if(media.matches){
      show(num);
      if(num===1){
        section.removeEventListener('mouseover', showProd, true);
        section.removeEventListener('mouseout', hideProd, true);
      }else{
        section.removeEventListener('mouseover', showAbt, true);
        section.removeEventListener('mouseout', hideAbt, true);
      };
    };
  };

//calls above functions
  let array = [[aboutUs, 0], [products, 1]]
  const callFunctions = function(num){
    subNavBig(...array[num]);
    subNavSmall(...array[num]);
  }

  //calls functions everytime it loads or resizes.
  window.addEventListener('load',()=>{callFunctions(0)});
  window.addEventListener('resize', ()=>{callFunctions(0)});
  window.addEventListener('load',()=>{callFunctions(1)});
  window.addEventListener('resize', ()=>{callFunctions(1)});
};
subNavigation();

function navBarShrinkScroll(){
  let scrollTop = window.scrollY;
  let topContact = document.getElementById('top-contact');
  let tcElements = document.querySelectorAll('#top-contact h2');
  let tcList = document.querySelector('#top-contact ul');
  let navigationBar = document.querySelectorAll('.navigation, .original-nav');
  let listItem = document.querySelectorAll('.original-nav');
  let leftNav = document.querySelectorAll('.left-side-nav')[0];
  let subNav = document.getElementsByClassName('sub-nav');
  if(scrollTop > 50 && !media.matches) {
    navigationBar[0].style.height = "45px";
    for(let i=1; i<navigationBar.length; i++){
        navigationBar[i].style.height = "56.25px";
      };
    for(let j=0; j<listItem.length; j++){
        listItem[j].style.lineHeight = "56.25px";
      };
    for(let t=0; t<tcElements.length; t++){
        //tcElements[t].style.padding = '10px 0';
      };
    //for(let s=0; s<subNav.length; s++){
        subNav[0].style.top = '38px';
        subNav[1].style.top = "0";
      //};
    leftNav.style.height = '45px';
    topContact.style.height = '65px';
    //tcList.style.padding = '5px 0';
  }else if(!media.matches) {
    navigationBar[0].style.height = "100px";
    for(let i=1; i<navigationBar.length; i++){
        navigationBar[i].style.height = "125px";
      };
    for(let j=0; j<listItem.length; j++){
        listItem[j].style.lineHeight = "125px";
      };
    for(let t=0; t<tcElements.length; t++){
        tcElements[t].style.padding = '20px 0';
      };
    //for(let s=0; s<subNav.length; s++){
        subNav[0].style.top = '93px';
        subNav[1].style.top="0";
      //};
    leftNav.style.height = '100px';
    topContact.style.height = '80px';
    //tcList.style.padding = '10px 0';
  }else{
    topContact.style.height = '350px';
    for(let t=0; t<tcElements.length; t++){
      //tcElements[t].style.padding = '10px 0 0 20px';
    };
    for(let i=0; i<navigationBar.length; i++){
      navigationBar[i].style.height = "60px";
    };
    for(let j=0; j<listItem.length; j++){
      listItem[j].style.lineHeight = "65px";
    };
    for(let s=0; s<subNav.length; s++){
      subNav[s].style.top = '410px';
    };
    leftNav.style.height = '180px';
  };
  setTimeout(navBarShrinkScroll,1);
};
window.onscroll = navBarShrinkScroll;

function highlightPageOn(){
let article = document.getElementById('top-contact');
let navLinks = document.querySelectorAll('.original-nav a, .footer-nav');
for(let i=0; i<navLinks.length; i++){
  let href = navLinks[i].href;
  if (href===document.URL){
    navLinks[i].parentElement.classList.add('this-page');
  }else {
    navLinks[i].parentElement.classList.remove('this-page');
  };
};
};
highlightPageOn();

function highlightParent(){
  let aboutNav = document.querySelectorAll("#about-us-nav a, #about-us-nav li");
  let productNav = document.querySelectorAll("#products-sub-nav a, #products-sub-nav li");
  let about = document.querySelector("#about-us");
  let product = document.querySelector("#products");
  for(let i = 0; i<aboutNav.length; i++){
    if(aboutNav[i].href == document.URL){
      about.classList.add('this-page');
    };
  };
  for(let i = 0; i<productNav.length; i++){
    if(productNav[i].href == document.URL){
      product.classList.add('this-page');
    };
  };
};
highlightParent();

//highlights about or product if below elements hovered.
function hoverParent(){
  let aboutNav = document.querySelectorAll("#about-us-nav a, #about-us-nav li");
  let productNav = document.querySelectorAll("#products-sub-nav a, #products-sub-nav li");
  let about = document.querySelector("#about-us > a");
  let product = document.querySelector("#products > a");
  if(!media.matches){
    aboutNav.forEach((nav)=>{
      nav.addEventListener('mouseover',()=>{
        about.classList.add("sub-page");
      });
      nav.addEventListener('mouseout',()=>{
        about.classList.remove("sub-page");
      });
    })
    productNav.forEach((nav)=>{
      nav.addEventListener('mouseover',()=>{
        product.classList.add("sub-page");
      });
      nav.addEventListener('mouseout',()=>{
        product.classList.remove("sub-page");
      });
    })
  }
};
hoverParent();
window.addEventListener("resize",()=>{hoverParent();});


function whitePhoneSwap(){
  function changePhone(media) {
    const phone = document.querySelectorAll('#right-side img');
    if (media.matches) {
      for(i=0; i<2; i++){
        phone[i].src = "../images/icons/white-phone.png";
      };
    } else {
        for(i=0; i<2; i++){
          phone[i].src = "../images/icons/phone-icon.png";
        };
      };
  };
  changePhone(media);
  media.addListener(changePhone);
};
whitePhoneSwap();

function clickmenu(){
  const menu = document.querySelector('#menu');
  const xButton = document.querySelector('#x-button');
  const navMenu = document.querySelector('#top-heading');
  const body = document.querySelector('#main');
  const logo = document.querySelector('#logo');
  const scrollBar = document.querySelector('body');
  const html = document.querySelector('html');
  const subNav = document.querySelectorAll('.sub-nav');
  const navigation = document.querySelector('.right-side-nav');
  const topHeading = document.getElementById('top-heading');
  const home = document.getElementById('home');
  const aboutUs = document.getElementById('about-us');
  const about = document.querySelector('#about-us');
  const product = document.querySelector('#products');
  const arrow = document.querySelectorAll('.fa-chevron-right');//2
  const back = document.querySelectorAll('.back-button');//2
  const leftArrow = document.querySelectorAll('.fa-chevron-left');
    navMenu.style.right='-275px';
  function openCloseMenu(){
    highlightPageOn();
    highlightParent();
    if(navMenu.style.right==='-275px'){//if menu is closed
      logo.style.left="-275px";
      navMenu.style.right=0;
      body.style.position = "relative";
      body.style.left="-275px";
      body.style.boxShadow = "8px 0 10px -2px rgb(70,70,73)";
      body.style.zIndex = "99999999999999999999";
      scrollBar.style.overflow="hidden";
      scrollBar.style.height = '100%';
      html.style.height = '100%';
      navMenu.classList.remove('closed');
      navMenu.classList.add('Opened');
      navMenu.scrollTop = 0;
      subNav[0].style.display="none";
      subNav[1].style.display="none";
      back[0].style.display = "none";
      leftArrow[0].style.display = "inline-block";
      back[1].style.display = "none";
      leftArrow[1].style.display = "inline-block";
    }else{
      logo.style.left=0;
      navMenu.style.right='-275px';
      body.style.position = 'relative';
      body.style.left=0;
      body.style.boxShadow = "";
      scrollBar.style.overflowY="scroll";
      scrollBar.style.height = '';
      html.style.height = '';
      navMenu.classList.remove('Opened');
      navMenu.classList.add('closed');
      back[0].style.display = "none";
      leftArrow[0].style.display = "none";
      back[1].style.display = "none";
      leftArrow[1].style.display = "none";
      closeNav(0,about);
      closeNav(1,product);
    }
  };
  function closeMenuMedia(){
    highlightPageOn();
    highlightParent();
    if(!media.matches){
      logo.style.left="50%";
      navMenu.style.right='-275px';
      body.style.position = 'relative';
      body.style.left=0;
      scrollBar.style.overflowY="scroll";
      scrollBar.style.height = '';
      html.style.height = '';
      navMenu.classList.replace('Opened','closed');
      closeNav(0,about);
      closeNav(1,product);
      subNav[0].style.display = "flex";
      subNav[1].style.display = "flex";
      body.style.zIndex = "auto";
      back[0].style.display = "none";
      leftArrow[1].style.display = "none";
      back[1].style.display = "none";
      leftArrow[1].style.display = "none";
    };
  };

  function moveLogo(){
    let Opened = navMenu.classList.contains('Opened');
    if(!media.matches){
      logo.style.left= "50%";
    }else if(Opened){
      logo.style.left="-275px";
    }else{
      logo.style.left=0;
    };
  };
  window.addEventListener('resize', moveLogo);

  function openNav(num,section){
    navigation.style.display = "none";
    home.style.display = "none";
    arrow[num].style.visibility = "hidden";
    back[num].style.visibility = "visible";
    leftArrow[num].style.visibility = "visible";
    subNav[num].style.display="block";
    section.classList.add('this-page');
    if(num===0){
      topHeading.scrollTo(0,topHeading.scrollHeight);
    }else{
      topHeading.scrollTop=410;
      aboutUs.style.display = "none"
    }
  };
  function closeNav(num,section){
    navigation.style.display = "flex";
    home.style.display = "block";
    arrow[num].style.visibility = "visible";
    leftArrow[num].style.visibility = "hidden";
    back[num].style.visibility = "hidden";
    subNav[num].style.display="none";
    if(section.href != document.URL)
    {
      section.classList.remove('this-page');
      highlightParent();
    }
    topHeading.scrollTop=0;
    if(num===1){
      aboutUs.style.display = "block"
    };
  }

  function listeners(){
    window.addEventListener('resize',closeMenuMedia);
    menu.addEventListener('click',openCloseMenu);
    xButton.addEventListener('click',openCloseMenu);
    arrow[0].addEventListener('click',function(){openNav(0,about)});
    back[0].addEventListener('click', function(){closeNav(0,about)});;
    arrow[1].addEventListener('click',function(){openNav(1,product)});
    back[1].addEventListener('click', function(){closeNav(1,product)});;
  };
  listeners();
};
clickmenu();
