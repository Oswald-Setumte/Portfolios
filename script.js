// // server.mjs
// import { createServer } from 'node:http';
// const server = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World!\n');
// });
// // starts a simple http server locally on port 3000
// server.listen(3000, '127.0.0.1', () => {
//   console.log('Listening on 127.0.0.1:3000');
// });
// // run with `node server.mjs`


let sections = document.querySelectorAll('sections');
let navLinks = document.querySelectorAll('header nav a');
console.log(sections);

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < off + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href *= "+ id +"]').classList.add('active');
            });
            
        };
        
    });
};