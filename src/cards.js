
async function loadData(){
  try{
    const response = await fetch('../data.json');
    const data = await response.json();
    return data;
  } catch{
    console.log("Error in fetching data");
    return 0;
  }
} 
const dataArr = await loadData();
const coffeeArr = dataArr.slice(0,8);
function renderCards(arr){
  const grid = document.querySelector('.menu-grid');
  arr.forEach((el, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    const imageSrc = `../assets/coffee-${index + 1}.png`;
    card.innerHTML = `
      <img class="card-image" src=${imageSrc} alt='item photo'>
      <div class="card-description">
        <h3 class="heading-3">${el.name}</h3>
        <p class="medium">${el.description}</p>
        <h3 class="heading-3">$${el.price}</h3>
      </div>
    `;
    grid.append(card);
  })
}
renderCards(coffeeArr);