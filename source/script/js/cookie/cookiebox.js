const cookieBox = document.getElementById('js-cookie-box');
const cookieButton = document.getElementById('js-cookie-button');

if (!Cookies.get('cookie-box')) {

  cookieBox.classList.remove('cookie-box--hide');

  cookieButton.onclick = function () {
    Cookies.set('cookie-box', true, { expires: 7 });
    cookieBox.classList.add('cookie-box--hide');
  };
}