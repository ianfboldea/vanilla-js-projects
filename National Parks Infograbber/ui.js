class UI {
  constructor() {
    this.outputElement = document.querySelector('.output');
  }

  showPark(parks) {
    let outputHTML = '';
    parks.forEach(park => {
      console.log(park.images[0].url);
      outputHTML += `
          <div class="row">
            <div class="four columns"><a href="${park.url}"><img src="${park.images[0].url}"></a></div>
            <div class="eight columns">
              <a href="${park.url}"><h3>${park.fullName}</h3></a>
              <p><strong>${park.designation}</strong></p>
              <p>${park.description}</h3>
            </div>
          </div>
          <hr />
        `;
    });
    document.querySelector('.output').innerHTML = outputHTML;
  }
  showCampgrounds(campgrounds) {
    let outputHTML = '';
    campgrounds.forEach(campground => {
      outputHTML += `
          <div class="row">
            <div class="four columns"></div>
            <div class="eight columns">
              <a href="${campground.url}"><h3>${campground.name}</h3></a>
              <p>${campground.description}</h3>
            </div>
          </div>
          <hr />
        `;
    });
    document.querySelector('.output').innerHTML += outputHTML;
  }
}
