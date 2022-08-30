  
  const product = {
    plainBurger:{
        name: 'Гамбургер простой',
        price: 10000,
        kcall: 400,
        amount: 0,
        get summ(){
            return this.price * this.amount;
        },
        get Kcll(){
            return this.kcall * this.amount;
        }
    },
    
    freshBurger:{
        name: 'Гамбургер FRESH',
        price: 20500,
        kcall: 600,
        amount: 0,
        get summ(){
            return this.price * this.amount;
        },
        get Kcll(){
            return this.kcall * this.amount;
        }
    },
    
    freshCombo:{
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 900,
        amount: 0,
        get summ(){
            return this.price * this.amount;
        },
        get Kcll(){
            return this.kcall * this.amount;
        }
    }
  }
  
  const extraProduct = {
    doubleMayonnaise:{
        name: 'Двойной майонез',
        price: 3000,
        kcall: 200
    },
    lettuce:{
        name: 'Салатный лист',
        price: 1000,
        kcall: 50
    },
    cheese:{
        name: 'Сыр',
        price: 5000,
        kcall: 100
    }
  }
  
  const btnPlusOrMinus = document.querySelectorAll('.main__product-btn');
  
  
for(let i = 0; i < btnPlusOrMinus.length; i++){
    btnPlusOrMinus[i].addEventListener('click', function() {
        pluisMinus(this);
    })
}

function pluisMinus(element) {
    
    let parentId = element.closest('.main__product').getAttribute('id');
    console.log(parentId);
    out = element.closest('.main__product').querySelector('.main__product-num');
    price = element.closest('.main__product').querySelector('.main__product-price span');
    kcl = element.closest('.main__product').querySelector('.main__product-call span');
    
    if(element.getAttribute('data-symbol') == '+' && product[parentId].amount < 10){
        product[parentId].amount++;
    }
    else if(element.getAttribute('data-symbol') == '-' && product[parentId].amount > 0){
        product[parentId].amount--;
    }
    
    out.innerHTML = product[parentId].amount;
    price.innerHTML = product[parentId].summ;
    kcl.innerHTML = product[parentId].Kcll;
}

const  checkboxExtraProduct = document.querySelectorAll('.main__product-checkbox');



for(let i = 0; i < checkboxExtraProduct.length; i++){
    checkboxExtraProduct[i].addEventListener('click', function() {
        addExtraProduct(this)
    })
}

function addExtraProduct(el) {
    const parent = el.closest('.main__product');
    const parentId = parent.getAttribute('id');
    
    product[parentId][el.getAttribute('data-extra')] = el.checked;
    
    const price = parent.querySelector('.main__product-price span');
    const kcall = parent.querySelector('.main__product-call span');
    const elDataExtra = el.getAttribute('data-extra');
    
    if(product[parentId][elDataExtra] == true){
        product[parentId].price += extraProduct[elDataExtra].price;
        product[parentId].kcall += extraProduct[elDataExtra].kcall;
    }
    
    else if( product[parentId][elDataExtra] ==   false){
        product[parentId].price -= extraProduct[elDataExtra].price;
        product[parentId].kcall -= extraProduct[elDataExtra].kcall;
    }
    
    price.innerHTML = product[parentId].summ;
    kcall.innerHTML = product[parentId].Kcll;
}

const addCart = document.querySelector('.addCart');
const receipt = document.querySelector('.receipt');
const receiptWindow = document.querySelector('.receipt__window');
const receiptWindowBtn = document.querySelector('.receipt__window-btn');
const WindowOut = document.querySelector('.receipt__window-out');

let arrProduct = [];
let totalName = '';
let totalPrice = 0;
let totalKcall = 0;

addCart.addEventListener('click', function() {
    receipt.style.display = 'flex';
    receipt.style.opacity = '1';
    receiptWindow.style.top = '20%';
    
    for(const key in product){
        const productTest = product[key];

        if(productTest.amount > 0){
            arrProduct.push(productTest);

            for(const newKey in productTest){
                if(productTest[newKey] === true){
                    productTest.name += extraProduct[newKey].name;
                }
            }

        }

        productTest.price = productTest.summ; 
        productTest.kcall = productTest.Kcll; 
    }

    for(let i = 0; i < arrProduct.length; i++){
        const el = arrProduct[i];

        let = totalName += '\n' + el.name + '\n';
        let = totalPrice += el.price;
        let = totalKcall += el.kcall;
    }

    WindowOut.innerHTML = `вы купили: \n\n ${totalName} \n\n калорийность: ${totalKcall}
    \n\n стоимость покупки: ${totalPrice} сумм`;


});

receiptWindowBtn.addEventListener('click', function() {
    receipt.style.display = 'none';
    receipt.style.opacity = '0';
    receiptWindow.style.top = '-100%';
})


