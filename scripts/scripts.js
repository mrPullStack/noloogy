function showContent(element){
    const serviceImages = document.getElementsByClassName('service-image');
    const serviceContents = document.getElementsByClassName('service-content');

    for (let i = 0; i < serviceImages.length; i++){
        serviceImages[i].parentElement.classList.remove('active');
        serviceContents[i].classList.remove('active');
    }

    const currentService = element.parentElement;
    //const currentServiceContent = currentServiceImage.nextElementSibling;

    currentServiceImage.classList.add('active');
    currentServiceContent.classList.add('active');
}