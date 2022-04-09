let appId = 'abc';
const button = document.querySelector('button')!;
console.log(button);
function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

function clickHandler() {
  // let userName = 'Max';
  console.log('Clicked! me');
}
// a comment
if (button) {
  button.addEventListener('click', clickHandler);
}
