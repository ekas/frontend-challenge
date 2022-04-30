console.log('Contentscript injected');

let imgElement = document.createElement('img');
imgElement.src = 'images/favicon-32x32.png';
imgElement.style.marginRight = '10px';
imgElement.style.padding = '10px';

const euroValueElement = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(3) > p:nth-of-type(2)',
);

let element = document.createElement('button');
const injectedText = document.createTextNode(` Budget-to-Beat: ${euroValueElement.innerHTML.trim()}`);
element.appendChild(imgElement);
element.appendChild(injectedText);

element.style.backgroundColor = '#1C1F33';
element.style.color = 'white';
element.style.border = 'none';
element.style.borderRadius = '5px';
element.style.padding = '12px 30px';
element.style.position = 'absolute';
element.style.top = '60px';
element.style.right = '50px';
element.style.fontSize = '20px';
element.style.cursor = 'pointer';
element.style.display = 'flex';
element.style.alignItems = 'center';

const parentElement = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(2) > h2',
);
parentElement.appendChild(element);
