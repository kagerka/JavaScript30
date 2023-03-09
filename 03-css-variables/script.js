let inputs = document.querySelectorAll('.controls input');

function changeFunc() {
  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}${this.dataset.sizing || ''}`
  );
}

inputs.forEach((i) => i.addEventListener('change', changeFunc));
inputs.forEach((i) => i.addEventListener('mousemove', changeFunc));
