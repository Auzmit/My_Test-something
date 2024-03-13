window.addEventListener('keypress', (event) => {
  if (event.code === 'Space') {
    const buttonOnPause = document.getElementById('lunaradiobuttonpause');
    const stylesButtonOnPause = window.getComputedStyle(buttonOnPause);
    const buttonOnPlay = document.getElementById('lunaradiobuttonplay');

    if (stylesButtonOnPause.display === 'none') {
      buttonOnPause.style.removeProperty('display');
      buttonOnPlay.style.display = 'none';
    } else {
      buttonOnPlay.style.removeProperty('display');
      buttonOnPause.style.display = 'none';
    }
  }
});

window.addEventListener('keypress', (event) => {
  if (event.code === 'Space') {
    const buttonOnPause = document.getElementById('h1_connection');
    const stylesButtonOnPause = window.getComputedStyle(buttonOnPause);
    const buttonOnPlay = document.getElementById('table_3-2');

    if (stylesButtonOnPause.display === 'none') {
      // хорошо бы через ремув атрибута сделать, но у меня почему-то не срабатывает
      // buttonOnPause.removeAttribute('display');
      // buttonOnPause.style.display = '';
      buttonOnPause.style.removeProperty('display');
      buttonOnPlay.style.display = 'none';
    } else {
      // buttonOnPlay.removeAttribute('display');
      // buttonOnPlay.style.display = '';
      buttonOnPlay.style.removeProperty('display');
      buttonOnPause.style.display = 'none';
    }
  }
});

// location.reload();

// setTimeout(function () {
// 	location.reload();
// }, 3000);
