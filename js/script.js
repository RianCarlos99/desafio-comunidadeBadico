const accordionItems = document.querySelectorAll('.s-classificados .container-classified .accordion')
const accordionTab = document.querySelectorAll('.s-classificados .container-classified .accordion .accordion-tab')
const arrows = document.querySelectorAll('.s-classificados .container-classified .accordion .item .pontuation .arrow')

function delay(n = 5000) {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

accordionItems.forEach((item, index) => {
  
  item.addEventListener('click', async () => {
    if(accordionTab[index].classList.contains('active')) {
      var acc = accordionTab[index]
      acc.style.maxHeight = 0;
      arrows[index].classList.remove('active')
      await delay(1000)
      accordionTab[index].classList.remove('active')
    } else {
      
      accordionTab.forEach(i => {
        i.classList.remove('active')
      })

      arrows.forEach(a => {
        a.classList.remove('active')
      })

      var acc = accordionTab[index]
      acc.style.maxHeight = 367 + 'px';
      accordionTab[index].classList.add('active')
      arrows[index].classList.add('active')
    }
  })
})


