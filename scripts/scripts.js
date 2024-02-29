// function showContent(element){
//     const serviceImages = document.getElementsByClassName('service-image');
//     const serviceContents = document.getElementsByClassName('service-content');

//     for (let i = 0; i < serviceImages.length; i++){
//         serviceImages[i].parentElement.classList.remove('active');
//         serviceContents[i].classList.remove('active');
//     }

//     const currentService = element.parentElement;
//     //const currentServiceContent = currentServiceImage.nextElementSibling;

//     currentService.classList.add('active');
//     currentService.nextElementSibling.classList.add('active');
// }

function showContent(event) {
    const services = document.getElementsByClassName('service');
  
    for (let i = 0; i < services.length; i++) {
      const serviceContent = services[i].getElementsByClassName('service-content')[0];
      services[i].classList.remove('active');
      serviceContent.classList.remove('active');
    }

    const currentService = event.target.parentElement;
    currentService.classList.add('active');
    currentService.nextElementSibling.classList.add('active');
}