function noi()
{
    let items1 =Number(document.querySelector('.count').innerText);
let items2 =Number(document.querySelector('.count2').innerText);
let total_items =Number(items1+items2);
document.querySelector('.items').innerText=total_items;
}
function counting()
{
 
let counter =document.querySelector('.count').innerText;
let price= document.querySelector('.amount').innerText;
let pfor_one_product=price/counter;
// {const button = document.querySelector(".btn"); 
//  const division = document.querySelector(".count"); 
  
// let counter =document.querySelector('.count').innerText;
// let price= document.querySelector('.amount').innerText;

if(document.querySelector('.count' ).innerText==0)
{    
document.querySelector('.count').innerText='1';
document.querySelector('.amount' ).innerText='175';

}
else if(counter>0){
     counter++;
      
     document.querySelector('.count' ).innerText=counter
     document.querySelector('.amount ').innerText=counter*pfor_one_product;
    //  count.innerText = counter;
}
var  Sub_Total= Number(document.querySelector('.amount').innerText);
var Sub_Total2=Number(document.querySelector('.amount2').innerText);
var Total= Sub_Total+Sub_Total2; 
document.querySelector('.total-amount').innerHTML=Total;

//# of items
let items1 =Number(document.querySelector('.count').innerText);
let items2 =Number(document.querySelector('.count2').innerText);
let total_items =Number(items1+items2);
document.querySelector('.items').innerText=total_items;
}