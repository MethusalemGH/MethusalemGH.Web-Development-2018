// Get HTML controls
var colorCSS = document.querySelector('h3');
console.assert(colorCSS !== null);
var ctrlInputColorFrom = document.getElementById('inputColorFrom');
console.assert(ctrlInputColorFrom !== null);
var ctrlInputColorTo = document.getElementById('inputColorTo');
console.assert(ctrlInputColorTo !== null);

// Set up Event Listener
ctrlInputColorFrom.addEventListener('input', applyGradientBackground);

ctrlInputColorTo.addEventListener('input', applyGradientBackground);

// Function definitions
function applyGradientBackground () {
  var colorFrom = ctrlInputColorFrom.value;
  var colorTo = ctrlInputColorTo.value;

  var cssColorTag = 'linear-gradient(to right, ' + colorFrom + ', ' + colorTo + ')';
  colorCSS.textContent = cssColorTag;

  var body = document.body;
  body.style.background = cssColorTag;
}
