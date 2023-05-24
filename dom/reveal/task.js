// reveal

const reveal = document.querySelectorAll('.reveal')
console.log(reveal);

document.addEventListener('scroll', function () {

   reveal.forEach(element => {

      let heightElement = element.getBoundingClientRect().top;
      //console.log(heightElement);
      let bottomElement = element.getBoundingClientRect().bottom;
      //console.log(bottomElement);

      if (heightElement < window.innerHeight) {
         element.classList.add('reveal_active')
      }
      if ((bottomElement < 0) || (heightElement > window.innerHeight)) {
         element.classList.remove('reveal_active')
      }
   })
});