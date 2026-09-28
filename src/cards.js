
document.addEventListener('DOMContentLoaded', () => {
  //menu
  const menuTabs = document.querySelector('.menu-tabs');
  if(menuTabs){
    menuTabs.addEventListener('click', async function(e){
      const tab = e.target.closest('.tab-item');
      if(!tab) return;
      for(const tab of menuTabs.children){
        tab.classList.remove('active');
      }
      tab.classList.add('active'); 
      const category = tab.dataset.category;
      await renderCards(category);
    })
  }
});

async function loadData(){
  try{
    const response = await fetch('./data.json');
    const data = await response.json();
    return data;
  } catch{
    console.log("Error in fetching data");
    return 0;
  }
} 

async function renderCards(category){
  const dataArr = await loadData();
  const grid = document.querySelector('.menu-grid');
  if(!grid) return;
  grid.innerHTML = '';
  const arr = dataArr.filter(item => item.category === category);
  arr.forEach((el, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    const imageSrc = `./assets/${category}-${index + 1}.png`;
    card.innerHTML = `
      <img class="card-image" src=${imageSrc} alt='item ${category} photo'>
      <div class="card-description">
        <h3 class="heading-3">${el.name}</h3>
        <p class="medium">${el.description}</p>
        <h3 class="heading-3">$${el.price}</h3>
      </div>
    `;
    grid.append(card);
  })
}
renderCards('coffee');


 
