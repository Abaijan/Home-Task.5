const box = document.querySelector('.our_products');

const base = [
    {id:1, img:'./images/image 1.png', title:'Syltherine', subtitle: 'Stylish cafe chair', price:'Rp 2.500.000',btn:'Delete' },
    {id:2, img:'./images/image 2.png', title:'Leviosa', subtitle: 'Stylish cafe chair', price:'Rp 2.500.000', btn:'Delete'},
    {id:3, img:'./images/image 3.png', title:'Lolito', subtitle: 'Luxury big sofa', price:'Rp 7.000.000', btn:'Delete'},
    {id:4, img:'./images/image 4.png', title:'Respira', subtitle: 'Minimalist fan', price:'Rp 500.000', btn:'Delete'},
    {id:5, img:'./images/Image 5.png', title:'Grifo', subtitle: 'Night lamp', price:'Rp 1.500.000', btn:'Delete'},
    {id:6, img:'./images/image 6.png', title:'Muggo', subtitle: 'Small mug', price:'Rp 150.000', btn:'Delete'},
    {id:7, img:'./images/image 7.png', title:'Pingky', subtitle: 'Cute bed set', price:'Rp 7.000.000', btn:'Delete'},
    {id:8, img:'./images/image 8.png', title:'Potty', subtitle: 'Minimalist flower pot', price:' Rp 500.000', btn:'Delete'}
];
 const addCardInBox = () => {
    base.forEach((item) => {
        box.innerHTML += `
        <div class="card" id="${item.id}">
        <img src="./${item.img}" alt="${item.subtitle}">
        <h1 class="card__ttle">${item.title}</h1>
        <p class="card__subtitle">${item.subtitle}</p>
        <p class="card__price">${item.price}</p>
        <button class="btn">${item.btn}</button>
    </div>
        `  
    })
 }
 addCardInBox();

document.getElementById('1').onclick = function(e) {
    const btn = e.target.closest('.btn');
    if (!btn) {
      return;
    }
    
    btn.parentElement.remove();
    
  };
  document.getElementById('2').onclick = function(e) {
    const btn = e.target.closest('.btn');
    if (!btn) {
      return;
    }
    
    btn.parentElement.remove();
    
  };
  document.getElementById('3').onclick = function(e) {
    const btn = e.target.closest('.btn');
    if (!btn) {
      return;
    }
    
    btn.parentElement.remove();
    
  };
  document.getElementById('4').onclick = function(e) {
    const btn = e.target.closest('.btn');
    if (!btn) {
      return;
    }
    
    btn.parentElement.remove();
    
  };
  document.getElementById('5').onclick = function(e) {
    const btn = e.target.closest('.btn');
    if (!btn) {
      return;
    }
    
    btn.parentElement.remove();
    
  };
  document.getElementById('6').onclick = function(e) {
    const btn = e.target.closest('.btn');
    if (!btn) {
      return;
    }
    
    btn.parentElement.remove();
    
  };
  document.getElementById('7').onclick = function(e) {
    const btn = e.target.closest('.btn');
    if (!btn) {
      return;
    }
    
    btn.parentElement.remove();
    
  };
  document.getElementById('8').onclick = function(e) {
    const btn = e.target.closest('.btn');
    if (!btn) {
      return;
    }
    
    btn.parentElement.remove();
    
  }