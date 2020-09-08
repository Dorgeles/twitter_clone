console.log('hello world') 

const form = document.querySelector('form');
const loadingImage = document.querySelector('.loading');

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

})