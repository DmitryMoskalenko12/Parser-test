window.addEventListener('DOMContentLoaded', () => {
function req() {
  const request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:3000/people');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();
  request.addEventListener('load', () => {
    if(request.status === 200){
      let data = JSON.parse(request.response);
      data.forEach(item => {
        let card = document.createElement('div');
        card.classList.add('card');
        let icon;
        if (item.sex === 'male') {
          icon = "icons/mars.png";
        }else{
          icon = "icons/female.png";
        }
        card.innerHTML = `
        <img src=${item.photo} alt="photo">
        <div class="name">${item.name} ${item.surname} </div>
        <div class="sex">
           <img src=${icon} alt="male">
        </div>
        <div class="age">${item.age}</div>`;
        document.querySelector('.app').append(card);
      });
    }else{
      console.log('Something went wrong');
    }
  });
  this.remove();
}

document.querySelector('button').addEventListener('click', req , {once: true});
});