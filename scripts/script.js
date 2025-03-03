const ringButtons = document.querySelectorAll('.ring-button');

for (let i = 0; i < ringButtons.length; i++) {
  const ringBtn = ringButtons[i];
  ringBtn.addEventListener('click', function (event) {

    // Button Id's
    const color = event.target.id.replace('-color', '');
    console.log(color);

    // Color add korar age purple thakle remove kore die onno color add kore dicchi
    for (let j = 0; j < ringButtons.length; j++) {

      ringButtons[j].classList.remove('border-3', 'border-orange-500');
      ringButtons[j].classList.add('border-3', 'border-gray-100');
    }

    // Adding purple color
    event.target.classList.add('border-3', 'border-orange-500');

    const productImage = document.getElementById('product-image');
    // productImage.src = '../images/teal.png';
    productImage.src = '../images/' + color + '.png';
  })
}


function selectWristSize(size) {
  const sizes = ['S', 'M', 'L', 'XL'];
  for (let i = 0; i < sizes.length; i++) {
    const buttons = document.getElementById('size-' + sizes[i]);
    const elements = sizes[i];
    if (size === elements) {
      buttons.classList.add('border-purple-600');
    } else {
      buttons.classList.remove('border-purple-600');
    }
  }
}