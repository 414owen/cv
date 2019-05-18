(() => {
  const page = document.querySelector('.page');
  document.onmousemove = ev => {
    const dw = window.innerWidth;
    const dh = window.innerHeight;
    const x = ev.pageX;
    const y = ev.pageY;
    const cx = 20 * (x - dw / 2) / (dw / 2);
    const cy = 20 * (y - dh / 2) / (dh / 2);
    console.log(cx, cy);
    page.style.transform = `rotateX(${cy}deg) rotateY(${cx}deg`;
  };
})();
