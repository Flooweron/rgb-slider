var change = 0;
function fun1() {
    change = 1;
    const rngR =document.getElementById('rangeR'); //rng - это Input
    const rngG =document.getElementById('rangeG')
    const rngB =document.getElementById('rangeB')
      let div=document.getElementById('pole'); // div - блок test
    div.style.backgroundColor=`rgb(${rngR.value},${rngG.value}, ${rngB.value})`;
    
  }

  function fun2() {
    change = 0;
    const rngR =document.getElementById('rangeR'); //rng - это Input
    const rngG =document.getElementById('rangeG')
    const rngB =document.getElementById('rangeB')
      let div=document.getElementById('pole'); // div - блок test
    div.style.color=`rgb(${rngR.value},${rngG.value}, ${rngB.value})`;
  }
  function fun3() {
    if (change) {
       return fun1()
    } else {
      return fun2()
    }
  }
  $('.Clrbtn').on('click', function () {
    $('.Bckgrndbtn').removeClass('active')
    $('.Clrbtn').addClass('active')
  })
  $('.Bckgrndbtn').on('click', function () {
    $('.Clrbtn').removeClass('active')
    $('.Bckgrndbtn').addClass('active')
  })
  