window.addEventListener("DOMContentLoaded", () => {
  const box = [];
  const body = document.querySelector("body");
  function recurs(element) {
    element.childNodes.forEach((node) => {
      if (node.nodeName.match(/^D/)) {
        const obj = {
          content: node.textContent.replace(/[\n]/ig, '').trim()
        };
        box.push(obj);
      } else {
        recurs(node);
      }
    });
  }
  recurs(body);
  fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    headers:{
      'Content-type': 'application/json'
    },
    body: JSON.stringify(box)
  })
  .then(response => response.json())
  .then(json => console.log(json))
});

