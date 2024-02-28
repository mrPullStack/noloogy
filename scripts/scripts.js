const images = document.querySelectorAll('.service img');
const contents = document.querySelectorAll('.service-content');

images.forEach((img, index) => {
    Image.addEventListener('click', () => {
        contents.forEach(content =>  content.style.display = 'none');
        contents[index].style.display = 'block';
    });
    });