window.addEventListener('scroll', function(){
    // header ui update
    const header = document.getElementById('header');
    if (window.scrollY > 5) header.classList.add('black-bg')
    else header.classList.remove('black-bg');
})
function position(id){
  var card = document.getElementsByClassName('card')[id];
  card.style.transform = 'scale(1.5)';
  console.log(id)
}