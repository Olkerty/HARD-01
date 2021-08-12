const slickerByciclesArrowContainer = document.querySelector('.slicker-bycicles__arrow-container');
const highWaySlicker = document.querySelector('.highway__slicker');
const highWayTemplate = document.getElementById('highway__template');
const footerDayNightRegime = document.querySelector('.day-time-change__checkbox-input');
const body = document.querySelector('.body');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const footerForm = document.querySelector('.footer__form');
const introText = document.querySelector('.intro__description');
const traininsText = document.querySelector('.trainins__main-text');
const footerCopyRight = document.querySelector('.footer__copyright');
const headerLinksMassive = document.querySelectorAll('.header__link');
const highwayNamesOfByciclesInCards = document.querySelectorAll('.highway__name-of-bycicle');
const rollRightButton = document.querySelector('.highway__button_next');
const rollLefttButton = document.querySelector('.highway__button_previous');
const traininsLinkMassive = document.querySelectorAll('.trainins__link');
const sunImage = document.querySelector('.day-time-change__sun');
const moonImage = document.querySelector('.day-time-change__moon');
const highwayImageSlickers = document.querySelectorAll('.highway__bycicles-images');
const highwayDotsContainers = document.querySelectorAll('.highway__dots-container');
const highwaySlickerItems = document.querySelectorAll('.highway__slicker-item');
const highwaySmallSlickersDotsContainers = document.querySelectorAll('.highway__bycicles-slicker-item');
const highwayCardsText = document.querySelectorAll('.highway__text');
const highwayCardsTitles = document.querySelectorAll('.highway__title');
const highwayImagesContainers = document.querySelectorAll('.highway__image-container');
const highwayImagesOfBycicles = document.querySelectorAll('.highway__bycicle-image');
const headerMbolieMenuButton = document.querySelector('.header__mobile-menu-btn');
const headerMobileMenuList = document.querySelector('.header__mobile-menu-list');
const headerMobileMenuLinks = document.querySelectorAll('.header__mobile-menu-link');
const headerMobileMenuIcons = Array.from(headerMbolieMenuButton.getElementsByTagName('*'));
const highwayImageMassive = document.querySelectorAll('.highway__image');

let currentColor = '#333333';
let footerEmail = document.querySelector('.footer__email-input');

const bycicles = ["url(./images/CerveloCaledonia.png)",
  'url(./images/CannondaleSystemixHimod.png)',
  "url(./images/TrekDomaleSL7.png)",
  "url(./images/CerveloAspero.png)",
  "url(./images/SpecializedSworksDiverge.png)",
  "url(./images/CannondaleTopstoneLetty.png)",
  "url(./images/SpecializedSwoksShiv.png)",
  "url(./images/BMCTimemachine.png)",
  "url(./images/CerveloPSeies.png)"
]

bycicles.forEach(function (item, index) {
  highwayImagesOfBycicles[index].style.backgroundImage = item;
});

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
function createRoad(src) {
  clone = highWayTemplate.content.cloneNode(true);
  clone.querySelector('.higway__slicker-item').src = src;
}
function addRoad(src) {
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
  prevArrow: '.highway__button_previous',
  nextArrow: '.highway__button_next',
});

$('.highway__bycicles-slicker').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  draggable: false,
  touchMove: false,
  touchThreshold: 0.01,
  dotsClass: 'highway__bycicles-names',
  appendDots: '.highway__bycicles-names',
});

highwayImageSlickers.forEach(function (item, index) {
  $(item).slick({
    dots: false,
    dotsClass: 'slick-dots__modified',
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          infinite: true,
          arrows: false,
          slidesToScroll: 1,
          dots: true,
          appendDots: highwaySmallSlickersDotsContainers[index],
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          infinite: true,
          arrows: false,
          slidesToScroll: 1,
          dots: true,
        }
      },
    ]
  });
});
const highwayText = document.getElementById('slick-slide-control10');
const grevel = document.getElementById('slick-slide-control11');
const tt = document.getElementById('slick-slide-control12');
highwayText.addEventListener('click', function () {
  highwayText.classList.add('highway__bycicle-name_active');
  grevel.classList.remove('highway__bycicle-name_active');
  tt.classList.remove('highway__bycicle-name_active');
});
grevel.addEventListener('click', function () {
  highwayText.classList.remove('highway__bycicle-name_active');
  grevel.classList.add('highway__bycicle-name_active');
  tt.classList.remove('highway__bycicle-name_active');
});
tt.addEventListener('click', function () {
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


footerForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  this.submit();
});

footerEmail.addEventListener('click', function () {
  document.querySelector('.footer__submit').value = 'ok';
});
$(document).on('click', function (e) {
  if (!$(e.target).closest(".footer__input-container").length) {
    document.querySelector('.footer__submit').value = '';
  }
  e.stopPropagation();
});
const highWayBycicleNamesMassive = document.querySelectorAll('.highway__bycicle-name');
footerDayNightRegime.addEventListener('click', function () {
  if (this.checked) {
    currentColor = '#FFFFFF';
    header.style.backgroundColor = '#333333';
    highWayBycicleNamesMassive.forEach(function (item) {
      item.style.color = '#FFFFFF';
    });
    headerLinksMassive.forEach(function (item) {
      item.style.color = '#FFFFFF';
    });
    highwayNamesOfByciclesInCards.forEach(function (item) {
      item.classList.add('highway__name-of-bycicle_dark-theme');
    });
    body.style.color = '#FFFFFF';
    body.style.backgroundColor = '#333333';
    footer.style.backgroundColor = '#2F2F2F';
    introText.style.color = '#E6E6E6';
    highwayCardsText.forEach(function (item) {
      item.style.color = '#E5E5E5';
    });
    traininsText.style.color = '#E5E5E5';
    footerCopyRight.style.color = '#565656';
    headerMobileMenuList.style.backgroundColor = '#333333';
    headerMobileMenuIcons.forEach(function (item) {
      item.style.backgroundColor = '#FFFFFF';
    });
    headerMobileMenuIcons[1].style.background = 'transparent';
    headerMobileMenuLinks.forEach(function (item) {
      item.style.color = '#FFFFFF';
    });
    rollRightButton.style.backgroundColor = '#434343';
    rollLefttButton.style.backgroundColor = '#434343';
    rollRightButton.style.backgroundImage = `url('./images/right-arrow_white.svg')`;
    rollLefttButton.style.backgroundImage = `url('./images/left-arrow_white.svg')`;
    sunImage.src = './images/sun_dark.svg';
    moonImage.src = './images/moon_dark.svg';
    traininsLinkMassive[0].style.color = '#FFFFFF';
    traininsLinkMassive[1].style.color = '#FFFFFF';
    document.querySelectorAll('.highway__dropdown-item').forEach(function (item) {
      item.style.backgroundColor = '#333333';
    });
  } else {
    currentColor = '#333333';
    header.style.backgroundColor = '';
    highWayBycicleNamesMassive.forEach(function (item) {
      item.style.color = '';
    });
    headerLinksMassive.forEach(function (item) {
      item.style.color = '';
    });
    highwayNamesOfByciclesInCards.forEach(function (item) {
      item.classList.remove('highway__name-of-bycicle_dark-theme');
    });
    body.style.color = '';
    body.style.backgroundColor = '';
    footer.style.backgroundColor = '';
    introText.style.color = '';
    highwayCardsText.forEach(function (item) {
      item.style.color = '';
    });
    traininsText.style.color = '';
    footerCopyRight.style.color = '';
    headerMobileMenuList.style.backgroundColor = '';
    headerMobileMenuIcons.forEach(function (item) {
      item.style.backgroundColor = '';
    });
    headerMobileMenuLinks.forEach(function (item) {
      item.style.color = '';
    });
    rollRightButton.style.backgroundColor = '';
    rollLefttButton.style.backgroundColor = '';
    rollRightButton.style.backgroundImage = ``;
    rollLefttButton.style.backgroundImage = ``;
    document.querySelectorAll('.highway__dropdown-item').forEach(function (item) {
      item.style.backgroundColor = '';
    });
    traininsLinkMassive[0].style.color = '';
    traininsLinkMassive[1].style.color = '';
    sunImage.src = './images/sun.svg';
    moonImage.src = './images/moon.svg';
  }
});

headerMbolieMenuButton.addEventListener('click', function () {
  document.querySelector('.day-time-change').classList.toggle('day-time-change_show');
  if (headerMobileMenuIcons[1].style.background == 'transparent') {
    headerMobileMenuIcons[1].style.background = currentColor;
  } else if (currentColor == '#FFFFFF') {
    headerMobileMenuIcons[1].style.background = 'transparent';
  }
});

const highwayDropDownContainer = document.querySelectorAll('.highway__bycicles-names')[1];
const listElements = Array.from(highwayDropDownContainer.getElementsByTagName('*'));
const aboutHeaderDropDown = document.querySelector(".highway__dropdown");
aboutHeaderDropDown.addEventListener('click', function () {
  document.querySelector(".highway__dropdown-content").classList.toggle("highway__dropdown_show");
});
if (window.innerWidth <= 700) {
  document.querySelector('.highway').prepend(document.querySelector('.highway__arrow-container'));
  document.querySelector('.header__mobile-menu-list').append(document.querySelector('.day-time-change'));
  highwayImagesContainers.forEach(function (item, index) {
    let temporaryElement = highwayCardsText[index];
    item.insertAdjacentElement('afterend', temporaryElement);
  });
  highwayDropDownContainer.classList.add('highway__dropdown-content');
  listElements.forEach(function (item) {
    item.classList.add('highway__dropdown-item');
  });
}
if (window.innerWidth < 1200) {
  highwayImageMassive[1].style.display = 'none';
  highwayImageMassive[3].style.display = 'none';
  highwayImageMassive[5].style.display = 'none';
}
$(window).resize(function () {
  if (window.innerWidth < 1200) {
    highwayImageMassive[1].style.display = 'none';
    highwayImageMassive[3].style.display = 'none';
    highwayImageMassive[5].style.display = 'none';
  } else {
    highwayImageMassive[1].style.display = '';
    highwayImageMassive[3].style.display = '';
    highwayImageMassive[5].style.display = '';
  }
  if (window.innerWidth < 700) {
    if (currentColor == '#FFFFFF') { document.querySelector('.header__mobile-menu-icon').style.backgroundColor = '#FFFFFF'; }
    highwayDropDownContainer.classList.add('highway__dropdown-content');
    listElements.forEach(function (item) {
      item.classList.add('highway__dropdown-item');
    });
    document.querySelector('.highway').prepend(document.querySelector('.highway__arrow-container'));
    document.querySelector('.header__mobile-menu-list').append(document.querySelector('.day-time-change'));
    highwayImagesContainers.forEach(function (item, index) {
      let temporaryElement = highwayCardsText[index];
      item.insertAdjacentElement('afterend', temporaryElement);
    });
  } else {
    highwayCardsTitles.forEach(function (item, index) {
      item.insertAdjacentElement('afterend', highwayCardsText[index])
    });
    document.querySelector('.highway__slicker').insertAdjacentElement('afterend', document.querySelector('.highway__arrow-container'));
    document.querySelector('.footer').append(document.querySelector('.day-time-change'));
    highwayDropDownContainer.classList.remove('highway__dropdown-content');
    listElements.forEach(function (item) {
      item.classList.remove('highway__dropdown-item');
    });
  }
});




