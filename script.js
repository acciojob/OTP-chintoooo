//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    const value = input.value;
    if (value) {
      input.value = value.slice(0, 1);
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (input.value === '') {
        if (index > 0) {
          inputs[index - 1].focus();
          inputs[index - 1].value = '';
        }
      } else {
        input.value = '';
      }
      e.preventDefault();
    }
  });

  input.addEventListener('paste', (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').replace(/\D/g, '');
    pasteData.split('').forEach((char, i) => {
      if (i < inputs.length) {
        inputs[i].value = char;
      }
    });
    const lastIndex = Math.min(pasteData.length, inputs.length) - 1;
    if (lastIndex >= 0) inputs[lastIndex].focus();
  });
});

window.addEventListener('load', () => {
  inputs[0].focus();
});
