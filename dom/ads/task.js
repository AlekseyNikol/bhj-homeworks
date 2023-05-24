// ADS
const rotat = document.querySelectorAll('.rotator');
rotat.forEach(rotator => {
   const rotatCases = Array.from(rotator.querySelectorAll('.rotator__case'));
   rotatCases.forEach(rotatCase => {
      rotatCase.style.color = rotatCase.dataset.color;
   });
   function setCase() {
      let rotatorActiveCase = rotator.querySelector('.rotator__case_active');
      let index = rotatCases.indexOf(rotatorActiveCase);

      if (index == rotatCases.length - 1) {
         rotatCases[index].classList.remove('rotator__case_active');
         index = 0;
         rotatCases[index].classList.add('rotator__case_active');
      } else {
         rotatCases[index].classList.remove('rotator__case_active');
         rotatCases[index + 1].classList.add('rotator__case_active');
      }
   }
   setInterval(setCase, 1000);
})