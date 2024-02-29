function showContent(element){
    const serviceImages = document.getElementsByClassName('service-image');
    const serviceContents = document.getElementsByClassName('service-content');

    for (let i = 0; i < serviceImages.length; i++){
        serviceImages[i].classList.remove('active');
        serviceContents[i].classList.remove('active');
    }

    const currentServiceImage = element.parentElement;
    const currentServiceContent = currentServiceImage.nextElementSibling;

    currentServiceImage.classList.add('active');
    currentServiceContent.classList.add('active');
}