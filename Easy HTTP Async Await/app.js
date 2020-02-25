const http = new EasyHTTP();

// Get Users
http
  .get('https://devcamper.ianboldea.com/api/v1/bootcamps')
  .then(data => console.log(data))
  .catch(err => console.log(err));

// User Data
const data = {
  email: 'brad@gmail.com',
  password: '123456'
};

// Create User
// http
//   .post('https://devcamper.ianboldea.com/api/v1/auth/login', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Update Post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete User
// http
//   .delete('https://jsonplaceholder.typicode.com/users/2')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
