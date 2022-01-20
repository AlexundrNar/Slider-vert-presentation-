let slider = document.getElementById('slider')
let line1 = document.getElementById('line1_id')
let line2 = document.getElementById('line2_id')
let line3 = document.getElementById('line3_id')
let line4 = document.getElementById('line4_id')
let lineactive = document.getElementById('lineactive_id')

line1.onclick = function() {
    slider.style.transform = 'translateX(0)'
    lineactive.style.top = '0px'
}

line2.onclick = function() {
    slider.style.transform = 'translateX(-25%)'
    lineactive.style.top = '80px'
}

line3.onclick = function() {
    slider.style.transform = 'translateX(-50%)'
    lineactive.style.top = '160px'
}

line4.onclick = function() {
    slider.style.transform = 'translateX(-75%)'
    lineactive.style.top = '240px'
}