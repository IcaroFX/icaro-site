function calcularIMC() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const resultado = document.getElementById('resultado');

  if (!peso || !altura) {
    resultado.textContent = "Por favor, preencha todos os campos!";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = '';

  if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
  } else if (imc < 24.9) {
    classificacao = 'Peso normal';
  } else if (imc < 29.9) {
    classificacao = 'Sobrepeso';
  } else {
    classificacao = 'Obesidade';
  }

  resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
}

function calcularCalorias() {
  const sexo = document.getElementById('sexo').value;
  const idade = parseInt(document.getElementById('idade').value);
  const peso = parseFloat(document.getElementById('pesoCal').value);
  const altura = parseFloat(document.getElementById('alturaCal').value);
  const atividade = parseFloat(document.getElementById('atividade').value);
  const resultado = document.getElementById('resultadoCalorias');

  if (!sexo || !idade || !peso || !altura) {
    resultado.textContent = "Por favor, preencha todos os campos!";
    return;
  }

  let tmb = 0;

  if (sexo === 'masculino') {
    tmb = 10 * peso + 6.25 * altura - 5 * idade + 5;
  } else {
    tmb = 10 * peso + 6.25 * altura - 5 * idade - 161;
  }

  const calorias = tmb * atividade;

  resultado.textContent = `Sua necessidade calórica diária é de aproximadamente ${calorias.toFixed(0)} kcal.`;
}
