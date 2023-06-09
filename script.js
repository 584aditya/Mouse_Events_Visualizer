const mleave = document.querySelector('.mleave');
const menter = document.querySelector('.menter');
const mover = document.querySelector('.mover');
const mout = document.querySelector('.mout');
const mmove = document.querySelector('.mmove');
const mclick = document.querySelector('.mclick');
const mdblclick = document.querySelector('.mdblclick');
const mwheel = document.querySelector('.mwheel');
const mup = document.querySelector('.mup');
const mdown = document.querySelector('.mdown');
const mcontext = document.querySelector('.context');
const msgel = document.querySelector('.msg');

mleave.addEventListener('mouseleave',function(){
  msgel.textContent = 'Why you leaved the button 😊';
})

mup.addEventListener('mouseup',function(){
  msgel.textContent = 'you released the click right 😊';
})

mover.addEventListener('mouseover',function(){
  msgel.textContent = 'trying to move the mouse over button  😊';
})

mout.addEventListener('mouseout',function(){
  msgel.textContent = 'out from the button 😊';
})

menter.addEventListener('mouseenter',function(){
  msgel.textContent = 'you entered the button 😊';
})

mmove.addEventListener('mousemove',function(){
  msgel.textContent = 'you move on the button 😊';
})

mdown.addEventListener('mousedown',function(){
  msgel.textContent = 'you click on the button 😊';
})

mclick.addEventListener('click',function(){
  msgel.textContent = 'you click on the button 😊';
})

mdblclick.addEventListener('dblclick',function(){
  msgel.textContent = 'you Double click on the button 😊';
})

mwheel.addEventListener('mousewheel',function(){
  msgel.textContent = 'you scroll on the button 😊';
})