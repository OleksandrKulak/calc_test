window.onload = () => {
  let a = '';
  let b = '';
  let sign = ''; // +,-,*,/,=,+/-
  const finish = false;

  const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];
  const action = ['-', '+', '&times', '&divide'];

  const out = document.querySelector('.calc-screen p');

  const clearAll = () => {
      a = '';
      b = '';
      sign = '';
      finish = false;
      out.textContent = '0';
    };
  document.querySelector('.ac').onclick = clearAll;
  console.log(clearAll);
  document.querySelector('control-buttons-list').onclick = (event) => {
    if (!event.target.classList.contains('btn-operator')) {
      return;
    }
    else if (!event.target.classList.contains('.ac')) {
      return;
    }

    out.textContent = '';
    const key = event.target.textContent;
    if (digit.includens(key)) {
      a += key;
      console.log(a, b, sign);  
    }
  }
};