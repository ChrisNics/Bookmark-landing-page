'use strict';

const ulLastChild = document.querySelector('.header__list');
ulLastChild.lastElementChild.firstChild.style.color = '#fff';
ulLastChild.lastElementChild.firstChild.style.backgroundColor =
  'hsl(0, 94%, 66%)';
ulLastChild.lastElementChild.firstChild.style.borderRadius = '10px';
ulLastChild.lastElementChild.firstChild.style.boxShadow =
  '0px 2px 8px 0px rgba(0, 0, 0, 0.2)';

ulLastChild.lastElementChild.firstChild.addEventListener('mouseenter', () => {
  ulLastChild.lastElementChild.firstChild.style.background = 'transparent';
  ulLastChild.lastElementChild.firstChild.style.padding = '1.3rem 3.3rem';
  ulLastChild.lastElementChild.firstChild.style.color = 'hsl(0, 94%, 66%)';
  ulLastChild.lastElementChild.firstChild.style.border =
    '0.2rem solid hsl(0, 94%, 66%)';
});

ulLastChild.lastElementChild.firstChild.addEventListener('mouseout', () => {
  ulLastChild.lastElementChild.firstChild.style.backgroundColor =
    'hsl(0, 94%, 66%)';
  ulLastChild.lastElementChild.firstChild.style.padding = '1.5rem 3.5rem';
  ulLastChild.lastElementChild.firstChild.style.color = '#fff';
  ulLastChild.lastElementChild.firstChild.style.border = 'none';
  ulLastChild.lastElementChild.firstChild.style.boxShadow =
    '0px 2px 8px 0px rgba(0, 0, 0, 0.2)';
});

const tabsContainer = document.querySelector('.tabs');
const contentsContainer = document.querySelector('.contents');

tabsContainer.addEventListener('click', e => {
  const curTarget = e.target;
  const firstTab = tabsContainer.children[0];
  const secondTab = tabsContainer.children[1];
  const thirdTab = tabsContainer.children[2];
  const firstContent = contentsContainer.children[0];
  const secondContent = contentsContainer.children[1];
  const thirdContent = contentsContainer.children[2];
  console.log(firstContent);
  if (curTarget.tagName !== 'BUTTON') return;

  if (curTarget === firstTab) {
    curTarget.classList.add('active');
    secondTab.classList.remove('active');
    thirdTab.classList.remove('active');

    secondContent.classList.remove('show');
    thirdContent.classList.remove('show');
    if (firstContent.classList.contains('show')) return;
    firstContent.classList.add('show');
  }

  if (curTarget === secondTab) {
    curTarget.classList.add('active');
    firstTab.classList.remove('active');
    thirdTab.classList.remove('active');

    firstContent.classList.remove('show');
    thirdContent.classList.remove('show');
    if (secondContent.classList.contains('show')) return;
    secondContent.classList.add('show');
  }

  if (curTarget === thirdTab) {
    curTarget.classList.add('active');
    firstTab.classList.remove('active');
    firstTab.classList.remove('active');
    secondTab.classList.remove('active');

    firstContent.classList.remove('show');
    secondContent.classList.remove('show');
    if (thirdContent.classList.contains('show')) return;
    thirdContent.classList.add('show');
  }
});

// const firstQuestion = document.querySelectorAll('.question')[0];
// const secondQuestion = document.querySelectorAll('.question')[1];
// const thirdQuestion = document.querySelectorAll('.question')[2];
// const fourthQuestion = document.querySelectorAll('.question')[3];
const arrow = document.querySelectorAll('.arrow');
const contents = document.querySelectorAll('.question__paragraph');
const questions = document.querySelectorAll('.question');
questions.forEach(question => {
  question.addEventListener('click', e => {
    const curtarget = e.target;
    // if (!curtarget.tagName === 'H4' &&curtarget.tagName === 'DIV' &&curtarget.tagName === 'IMG') return;

    if (e.target.dataset.number === '0') {
      contents[0].classList.toggle('show');
      arrow[0].classList.toggle('rotate');
    }
    if (e.target.dataset.number === '1') {
      contents[1].classList.toggle('show');
      arrow[1].classList.toggle('rotate');
    }
    if (e.target.dataset.number === '2') {
      contents[2].classList.toggle('show');
      arrow[2].classList.toggle('rotate');
    }
    if (e.target.dataset.number === '3') {
      contents[3].classList.toggle('show');
      arrow[3].classList.toggle('rotate');
    }
  });
});

const absBurger = document.querySelector('.abs-burger');
const absBurgerBG = document.querySelector('.abs-burger-bg');
const absNav = document.querySelector('.abs-nav');
const btnClose = document.querySelector('.abs-nav__close');
console.log(absBurgerBG);

absBurger.addEventListener('click', () => {
  absNav.classList.add('show-vis');
});

btnClose.addEventListener('click', () => {
  absNav.classList.remove('show-vis');
});

const header = document.querySelector('.header');
const headerBottom = header.getBoundingClientRect().bottom;

console.log(headerBottom);
window.addEventListener('scroll', e => {
  if (window.scrollY > headerBottom) {
    absBurger.style.position = 'fixed';
    absBurger.style.background = '#fff';
    absBurger.style.color = '#fff';
    absBurgerBG.classList.add('show-vis');
  } else {
    absBurger.style.position = 'absolute';
    absBurger.style.background = 'hsl(229, 31%, 21%)';
    absBurger.style.color = 'hsl(229, 31%, 21%)';
    absBurgerBG.classList.remove('show-vis');
  }
});

const form = document.querySelector('.forms form');
const warningText = form.querySelector('p');
const warningLogo = form.querySelector('img');
const validateEmail = mail => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    warningText.classList.remove('show');
    warningLogo.classList.remove('show');
    return true;
  }

  warningText.classList.add('show');
  warningLogo.classList.add('show');
  return false;
};

form.addEventListener('submit', e => {
  e.preventDefault();
  const inputValue = document.querySelector('.forms input').value;
  validateEmail(inputValue);
});
console.log(form);
