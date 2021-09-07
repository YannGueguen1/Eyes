const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (const ball in balls){
    balls[ball].style.left = x;
    balls[ball].style.top = y;
    balls[ball].transform = 'translate(-' + x + ',-' + y + ')';
  }
};
