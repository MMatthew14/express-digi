import {serve} from 'bun';

serve ({
    fetch(request) {
        const url = new URL(request.url);
        if (url.pathname === '/') {
          return new Response('Ice Cream yummy Ice Cream good', {
            status: 200,
          });
        } else if (url.pathname === '/ice-cream') {
          return new Response('Ice cream is a tasty choice', {
            status: 200,});
            } else {
          return new Response('404 not found', {status: 404})
        }
    }, 
    port: 8000,
    hostname: '127.0.0.1'
    })