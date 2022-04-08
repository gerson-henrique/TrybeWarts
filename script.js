const btnLogin = document.getElementById('loginBtn');
const inpEmail = document.getElementById('eMail');
const inpSenha = document.getElementById('passWord');
const buttonEnviar = document.getElementById('submit-btn');

// declaração de atalhos ^

function itsTryber() {
  const a = inpEmail.value;
  const b = inpSenha.value;

  if (a === 'tryber@teste.com' && b === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}


btnLogin.addEventListener('click', itsTryber);


buttonEnviar.disabled = true;
const checkBox = document.getElementById('agreement');

function liberar(event) {
  if (event.target.checked === true) {
    buttonEnviar.disabled = false;
  } else {
    buttonEnviar.disabled = true;
  }
}
checkBox.addEventListener('click', liberar);

// requisito de contar o texto
//
const textArea = document.getElementById('textarea');
const paragraph = document.getElementById('counter');

paragraph.innerText = `${500},' caracteres restantes`;

function contador() {
  const numerocaractere = textArea.value.length;
  const resultado = `${500 - numerocaractere} ,  caracteres restantes`;
  paragraph.innerText = resultado;
}

textArea.addEventListener('keyup', contador);

// requisito recuperar o texto

const getStudantName = () => {
  const name = document.getElementById('input-name');
  const surname = document.getElementById('input-lastname');
  const elementParent = name.parentNode;
  const newElement = document.createElement('p');
  newElement.innerText = `Nome: ${name.value} ${surname.value} `;
  elementParent.appendChild(newElement);
  elementParent.removeChild(name);
  elementParent.removeChild(surname);
};

const getData = (id, apoioTxt) => {
  const data = document.querySelector(id);
  const dataParent = data.parentNode;
  const newElement = document.createElement('p');
  newElement.innerText = `${apoioTxt}: ${data.value}`;
  dataParent.appendChild(newElement);
  console.log(newElement.innerText);
  dataParent.removeChild(data);
};

const getSubjects = () => {
  const data = document.querySelectorAll('.subject:checked');
  console.log(data);
  const dataParent = data[0].parentNode;
  const newElement = document.createElement('p');
  newElement.innerText = 'Matérias:';
  for (let i = 0; i < data.length; i += 1) {
    newElement.innerText += ` ${data[i].defaultValue}`;
    if (i + 1 !== data.length)newElement.innerText += ',';
  }
  console.log(newElement.innerText);
  dataParent.appendChild(newElement);
};
function changeText(event) {
  event.preventDefault();
  getStudantName();
  getData('#input-email', 'Email');
  getData('#house', 'Casa');
  getData('input[name="family"]:checked', 'Família');
  getData('input[name="rate"]:checked', 'Avaliação');
  getData('#textarea', 'Observações');
  getSubjects();
}
// teste pra commit
buttonEnviar.addEventListener('click', changeText);
