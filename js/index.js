// lazysizes
const body = document.getElementsByTagName('BODY')[0],
  header = body.querySelector('.header'),
  main = body.querySelector('.main');

  


if (header){
  const btn = header.querySelector('.navigation__btn'),
        list  = header.querySelector('.navigation__under'),
        svg = body.querySelector('.svg'),
        shopsvg= body.querySelector('.svg__shop'),
        shopbtn = body.querySelector('.userroom__btn');

        btn.addEventListener('click', () => {
          list.classList.toggle('active');
          svg.classList.toggle('active');
        })

        main.addEventListener('click', () => {
          list.classList.remove('active');
          svg.classList.remove('active');
          shopbtn.classList.remove('active');
          shopsvg.classList.remove('shop__active');
        })


        shopbtn.addEventListener('click', () => {
          shopbtn.classList.toggle('active');
          shopsvg.classList.toggle('shop__active');
        })
}