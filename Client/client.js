const twitteElement = document.querySelector('.twittes');
const form = document.querySelector('form');
const loadingImage = document.querySelector('.loading');
const API_URL = "http://localhost:1996/twittes";

loadingImage.style.display = '';    
 
listAllTwittes(); 


form.addEventListener('submit', () => {
    event.preventDefault();
    const formData = new FormData(form); 
    
    const name = formData.get('name');
    const content = formData.get('content');

    const twitte = {
        name,
        content
    }; 

    form.style.display = 'none';
    loadingImage.style.display = ''

    fetch(API_URL, {
        method: 'POST', 
        body: JSON.stringify(twitte),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
      .then(createdTwitte => {
          console.log(createdTwitte);
      });
      form.reset(); 
      form.style.display = '';
      listAllTwittes(); 
      
});

function listAllTwittes(){
    twitteElement.innerHTML = '';
    fetch(API_URL)
        .then(response => response.json())
        .then(twittes => {
            twittes.reverse();
            twittes.forEach(twitte => {
                const div = document.createElement('div');


                const header = document.createElement('h3');
                header.textContent = twitte.name;
                const content = document.createElement('p');
                content.textContent = twitte.content;
                const date = document.createElement('small');
                date.textContent = new Date(twitte.created);


                div.appendChild(header);
                div.appendChild(content);
                div.appendChild(date)

                twitteElement.appendChild(div);
            });
            loadingImage.style.display = 'none'; 
        });
}