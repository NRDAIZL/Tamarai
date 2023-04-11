function noi()
{
    let items1 =Number(document.querySelector('.count').innerText);
let items2 =Number(document.querySelector('.count2').innerText);
let total_items =Number(items1+items2);
document.querySelector('.items').innerText=total_items;
}
