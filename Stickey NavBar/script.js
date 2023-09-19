const menu = document.querySelector('.menu-list')
const navbar = document.querySelector('.navbar')
const menuBtn = document.querySelector('.menu-btn')
const cancelBtn = document.querySelector('.cancel-btn')

menuBtn.onclick =() => {
  menu.classList.add('active');
  menuBtn.classList.add('hide');
}
cancelBtn.onclick =() => {
  menu.classList.remove('active');
  menuBtn.classList.remove('hide');
}

window.onscroll = () => {
  this.scrollY > 60 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');

}