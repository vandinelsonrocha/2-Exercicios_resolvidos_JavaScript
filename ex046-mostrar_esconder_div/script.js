var btn = document.querySelector('#mostrar');
var div1 = document.querySelector('#div1');
var div2 = document.querySelector('#div2');
var div3 = document.querySelector('#div3');
var div4 = document.querySelector('#div4');
var div5 = document.querySelector('#div5');
var div6 = document.querySelector('#div6');


btn.addEventListener('click', function()  {
    if(Number(document.querySelector('#num').value) == 1)  {
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'none';
        div5.style.display = 'none';
        div6.style.display = 'none';
        div1.style.display = 'block';
    }
    else if(Number(document.querySelector('#num').value) == 2)  {
        div1.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'none';
        div5.style.display = 'none';
        div6.style.display = 'none';
        div2.style.display = 'block';
    }
    else if(Number(document.querySelector('#num').value) == 3)  {
        div1.style.display = 'none';
        div2.style.display = 'none';
        div4.style.display = 'none';
        div5.style.display = 'none';
        div6.style.display = 'none';
        div3.style.display = 'block';
    }
    else if(Number(document.querySelector('#num').value) == 4)  {
        div1.style.display = 'none';
        div3.style.display = 'none';
        div2.style.display = 'none';
        div5.style.display = 'none';
        div6.style.display = 'none';
        div4.style.display = 'block';
    }
    else if(Number(document.querySelector('#num').value) == 5)  {
        div1.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'none';
        div2.style.display = 'none';
        div6.style.display = 'none';
        div5.style.display = 'block';
    }
    else  {
        div1.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'none';
        div5.style.display = 'none';
        div2.style.display = 'none';
        div6.style.display = 'block';
    }
});