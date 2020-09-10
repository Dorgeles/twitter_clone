
const form = document.querySelector('form');
const loadingImage = document.querySelector('.loading');
const API_URL = "http://localhost:1996/twitte";

loadingImage.style.display = 'none';    

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
    loadingImage.style.display = '';

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(twitte),
        headers: {
            'content-type': 'application/json'
        }
    });
})