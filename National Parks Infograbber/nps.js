class NPS {
  constructor() {
    this.api_key = 'put your own here you cant have mine';
  }
  async getParks(params) {
    let paramList = '';
    params.forEach(param => {
      paramList += '&' + param;
    });

    const res = await fetch(
      `https://developer.nps.gov/api/v1/parks?api_key=${api_key}${paramList}`
    );

    const data = await res.json();

    return data;
  }

  async getCampgrounds(parkCode) {
    console.log(parkCode);
    const res = await fetch(
      `https://developer.nps.gov/api/v1/campgrounds?api_key=mWL8w4Lo0qAq5PFEZ1T3l8wfx4tYR6WVUYrMjz6K&fields=parkCode&parkCode=${parkCode}`
    );

    const data = await res.json();

    return data;
  }
}
