// Styles
const button = document.getElementById('button');
button.style.fontSize = '1rem';
button.style.border = '3px solid #ccc';
button.style.padding = '2px 9px';

const text = document.getElementById('output');
text.style.color = 'green';



document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object 
  const xhr = new XMLHttpRequest();

  //Open
  xhr.open('GET', 'data.text', true);
  // console.log('READYSTATE', xhr.readyState);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState);
  }

  xhr.onload = function() {
    console.log('READYSTATE', xhr.readyState);
    if(this.status === 200){
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 3){
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function(){
    console.log('Request error...');
  }
 
  xhr.send();
  
  // HTTP Statues
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found" 

  //readyState Values
  // 0: resuest not initialized
  // 1: server connectio established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

}
