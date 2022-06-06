const routes = [
  {path: '/', data: `<h1>Welcome to Home page.</h1>`},
  {path: '/service', data: `<h1>Welcome to Service.</h1>`},
  {path: '/mission', data: `<h1>Welcome to Mission page.</h1> `},
  {path: '/promise', data: `<h1>Welcome to Promise page.</h1> `},
  {path: '/bb', data: `<h1>Welcome to BB Page.</h1>`},
  {path: '/book', data: `<h1>Welcome to Booking page.</h1>`},
];

const root = document.getElementById('root');
console.log(root);

function router(event) {
  event.preventDefault();
  if(event.target.href){
    history.pushState({}, 'newUrl', event.target.href);
  } else {
    history.pushState({}, 'newUrl', event.target.parentNode.href);
  }
  
  let route = routes.find(route => route.path ==  window.location.pathname);  
  root.innerHTML = route.data;
}