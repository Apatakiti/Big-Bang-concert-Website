const hamburger = document.getElementsByClassName('HB-container')
const menu = document.querySelectorAll('menu')
const sections = document.querySelectorAll('section')
const xmark1 = document.getElementById('x-mark-container')
const header = document.querySelectorAll('header')
const footer = document.querySelectorAll('footer')

   hamburger[0].addEventListener('click', () => {

      for (let i = 0; i < hamburger.length; i += 1 ) {
       menu[i].style.display = 'grid';
       
       for (let i = 0; i < sections.length; i += 1) {     
         sections[i].style.display = 'none';
        }

        header[i].style.display = 'none';
        footer[i].style.display = 'none';

      }
   })

   
   xmark1.addEventListener('click', () => {
      for (let i = 0; i < hamburger.length; i += 1 ) {
       
         menu[i].style.display = 'none';
         
         for (let i = 0; i < sections.length; i += 1) {     
           sections[i].style.display = 'block';
          }
          header[i].style.display = 'block';
        footer[i].style.display = 'block';
  
        }
   })