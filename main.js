// AXIOS GLOBALS
axios.defaults.headers.common['X-Auth-Token'] =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
 
// GET REQUEST
/* function getTodos() {
    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos',
        params: {
            _limit: 3
        }
    })
      .then(res => showOutput(res))
      .catch(err => console.error(err));
  }
   */

  function getTodos() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=5', /*{ params: {_limit: 3} }*/ ) //we pass the limit in the url
      .then(res => showOutput(res))
      .catch(err => console.error(err));
  }

  // POST REQUEST
  function addTodo() { //this creates a post request to our server and returns a 201 code.
   /*  axios({
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {
            title: 'Learn Axios',
            completed: true
        }
    })
      .then(res => showOutput(res))
      .catch(err => console.error(err));
  }  */
  
    axios
    .post('http://localhost:5000/tasks', {
            title: 'Work on my Laravel and Nodejs APIs',
            completed: false
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
    }

  // PUT/PATCH REQUEST
  function updateTodo() { //this function updates the data in the DB, it's to a specific item meaning we include the userid
    axios
        .put('http://localhost:5000/tasks/3', {
            title: 'Draft my IPTR report',
            completed: false
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
  }
  
  // DELETE REQUEST
  function removeTodo() {
    axios
    .delete('http://localhost:5000/tasks/4')
    .then(res => showOutput(res))
    .catch(err => console.error(err));
  }
  
  // SIMULTANEOUS DATA
  function getData() {
    axios.all([
        axios.get('http://localhost:5000/tasks/'),
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3'),
    ])
        .then(axios.spread((tasks, todos) => showOutput(tasks)) //more clean
        /*  res => {
            console.log(res[0]);
            console.log(res[1]);
            showOutput(res[0]);
        } */)
        .catch(err => console.error(err));
  }
  
  // CUSTOM HEADERS
  function customHeaders() {
    console.log('Custom Headers');
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    console.log('Transform Response');
  }
  
  // ERROR HANDLING
  function errorHandling() {
    console.log('Error Handling');
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    console.log('Cancel Token');
  }
  
  // INTERCEPTING REQUESTS & RESPONSES
  
  // AXIOS INSTANCES
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);
  