var elm = document.getElementById("imgTag");
var links = [
  "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80",
  "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80"
];
var count = 0;

function nextImage() {
  count++;
  if (count >= links.length) {
    count = 0; 
  }
  elm.setAttribute("src", links[count]);
}

function prevImage() {
  count--;
  if (count < 0) {
    count = links.length - 1; 
  }
  elm.setAttribute("src", links[count]);
}

setInterval(nextImage, 3000);

