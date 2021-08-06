const slickerByciclesArrowContainer = document.querySelector('.slicker-bycicles__arrow-container');
const highWaySlicker = document.querySelector('.highway__slicker');
const highWayTemplate = document.getElementById('highway__template');
const emailTextInput = document.querySelector('.footer__email-input');
const footerDayNightRegime = document.querySelector('.footer__checkbox-input');
const body = document.querySelector('.body');
const footer = document.querySelector('.footer');
const introText = document.querySelector('.intro__description');
const highwayMainText = document.querySelector('.highway__text');
const traininsText = document.querySelector('.trainins__main-text');
const footerCopyRight = document.querySelector('.footer__copyright');
const headerLinksMassive = document.querySelectorAll('.header__link');
const highwayNamesOfByciclesInCards = document.querySelectorAll('.highway__name-of-bycicle');
const rollRightButton = document.querySelector('.highway__button-next');
const rollLefttButton = document.querySelector('.highway__button-previous');
const traininsLinkMassive = document.querySelectorAll('.trainins__link');
const sunImage = document.querySelector('.footer__sun');
const moonImage = document.querySelector('.footer__moon');
const highwayImageSlickers = document.querySelectorAll('.highway__bycicles-images');
const highwayDotsContainers = document.querySelectorAll('.highway__dots-container');
const highwaySmallSlickersDotsContainers = document.querySelectorAll('.highway__bycicles-slicker-item');

const imagesOfRoads = [
    {
        src: './images/road1.png',
    },
    {
        src: './images/road2.png',
    },
    {
        src: './images/road3.png',
    },
    {
        src: './images/road4.png',
    },
    {
        src: './images/road5.png',
    },
    {
        src: './images/road6.png',
    },
]
function createRoad (src) {
    clone = highWayTemplate.content.cloneNode(true);
    clone.querySelector('.higway__slicker-item').src=src;
}
function addRoad (src) {
createRoad(src);
highWaySlicker.append(clone);
}

$(highWaySlicker).slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  appendArrows: '.highway__arrow-container',
  prevArrow: '.highway__button-previous',
  nextArrow: '.highway__button-next',
});

$('.highway__bycicles-slicker').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    draggable: false,
    dotsClass: 'highway__bycicles-names',
    appendDots: '.highway__bycicles-names',
});

highwayImageSlickers.forEach(function(item,index) {
    console.log(item);
    console.log(index);
 $(item).slick({
    dots: false,
    dotsClass: 'slick-dots__modified',
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        infinite: true,
        arrows: false,
        slidesToScroll: 1,
        dots: true,
        appendDots: highwaySmallSlickersDotsContainers[index],
      }
    },
  ]
 });

});
const highwayText = document.getElementById('slick-slide-control10');
const grevel = document.getElementById('slick-slide-control11');
const tt = document.getElementById('slick-slide-control12');
console.log(document.getElementById('slick-slide-control10'));
highwayText.addEventListener('click', function() {
  highwayText.classList.add('highway__bycicle-name_active');
  grevel.classList.remove('highway__bycicle-name_active');
  tt.classList.remove('highway__bycicle-name_active');
});
grevel.addEventListener('click', function() {
    highwayText.classList.remove('highway__bycicle-name_active');
    grevel.classList.add('highway__bycicle-name_active');
    tt.classList.remove('highway__bycicle-name_active');
});
tt.addEventListener('click', function() {
    highwayText.classList.remove('highway__bycicle-name_active');
    grevel.classList.remove('highway__bycicle-name_active');
    tt.classList.add('highway__bycicle-name_active');
});
highwayText.classList.add('highway__bycicle-name');
highwayText.classList.add('highway__bycicle-name_active');
grevel.classList.add('highway__bycicle-name');
tt.classList.add('highway__bycicle-name');
highwayText.textContent = 'Шоссе';
grevel.textContent = 'Грэвел';
tt.textContent = 'ТТ';

emailTextInput.addEventListener('click', function () {
document.querySelector('.footer__submit').value='ok';
});
$(document).on('click', function(e) {
    if (!$(e.target).closest(".footer__input-container").length) {
        document.querySelector('.footer__submit').value='';
    }
    e.stopPropagation();
});
const highWayBycicleNamesMassive = document.querySelectorAll('.highway__bycicle-name');
footerDayNightRegime.addEventListener('click', function() {
if(this.checked) {
highWayBycicleNamesMassive.forEach(function(item) {
item.style.color='#FFFFFF';
});
headerLinksMassive.forEach(function(item) {
   item.style.color='#FFFFFF';
});
highwayNamesOfByciclesInCards.forEach(function(item) {
    item.style.color='#FFFFFF';
 });
body.style.color='#FFFFFF';
body.style.backgroundColor='#333333';
footer.style.backgroundColor='#2F2F2F';
introText.style.color='#E6E6E6';
highwayMainText.style.color='#E5E5E5';
traininsText.style.color='#E5E5E5';
footerCopyRight.style.color = '#565656';
rollRightButton.style.backgroundColor = '#434343'; 
rollLefttButton.style.backgroundColor = '#434343';
rollRightButton.style.backgroundImage = `url('./images/right-arrow_white.svg')`; 
rollLefttButton.style.backgroundImage = `url('./images/left-arrow_white.svg')`;
sunImage.src='./images/sun_dark.svg';
moonImage.src='./images/moon_dark.svg';
traininsLinkMassive[0].style.color ='#FFFFFF';
traininsLinkMassive[1].style.color ='#FFFFFF';
} else {
    highWayBycicleNamesMassive.forEach(function(item) {
        item.style.color='';
    });
    headerLinksMassive.forEach(function(item) {
           item.style.color='';
    });
    highwayNamesOfByciclesInCards.forEach(function(item) {
            item.style.color='';
    });        
    body.style.color='';
    body.style.backgroundColor='';
    footer.style.backgroundColor='';
    introText.style.color='';
    highwayMainText.style.color='';
    traininsText.style.color='';
    footerCopyRight.style.color = '';
    rollRightButton.style.backgroundColor = ''; 
    rollLefttButton.style.backgroundColor = '';
    rollRightButton.style.backgroundImage = ``; 
    rollLefttButton.style.backgroundImage = ``;
    traininsLinkMassive[0].style.color ='';
    traininsLinkMassive[1].style.color ='';
    sunImage.src='./images/sun.svg';
    moonImage.src='./images/moon.svg';
}
});


$(window).resize(function () { 
  if(window.innerWidth=700) {
    document.querySelector('.intro__text-container').prepend(document.querySelector('.intro__nature-image')); 
    document.querySelector('.intro__text-container').prepend(document.querySelector('.section-title')); 
}
});