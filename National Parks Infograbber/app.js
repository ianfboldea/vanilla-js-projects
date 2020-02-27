// Create an instance of the nps class
const nps = new NPS();
const ui = new UI();

// Add event listener to get-started
document.getElementById('get-started').addEventListener('click', e => {
  document.querySelector('.container').style.display = 'block';
  document.querySelector('header').style.display = 'none';

  let randInt = Math.floor(Math.random() * 497);
  console.log(randInt);

  const params = ['limit=1', `start=${randInt}`, 'fields=images'];

  nps
    .getParks(params)
    .then(data => {
      console.log(data);
      ui.showPark(data.data);
      nps
        .getCampgrounds(data.data[0].parkCode)
        .then(data => {
          console.log(data);
          ui.showCampgrounds(data.data);
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

document.getElementById('get-new-park').addEventListener('click', e => {
  document.querySelector('.container').style.display = 'block';
  document.querySelector('header').style.display = 'none';

  let randInt = Math.floor(Math.random() * 497);
  console.log(randInt);

  const params = ['limit=1', `start=${randInt}`, 'fields=images'];

  nps
    .getParks(params)
    .then(data => {
      console.log(data);
      ui.showPark(data.data);
      nps
        .getCampgrounds(data.data[0].parkCode)
        .then(data => {
          console.log(data);
          ui.showCampgrounds(data.data);
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});
