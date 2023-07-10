function calcula(){
  // Obter os valores dos campos de entrada
  var nome = document.getElementById('txtNom').value
  var altura = parseFloat( document.getElementById('txtAlt').value)
  var peso = parseFloat(document.getElementById('txtPes').value)
  var resultado = document.getElementById('res')
  
  //Fazer o cálculo necessário
  var imc1 = peso / (altura **2) 

  // Formatar o resultado com duas casas decimais
  var imc = imc1.toFixed(2)

   // Verifica se algum campo está vazio
  if (nome == '' || isNaN(altura) || isNaN(peso)){ 
  alert('❌[ERRO] Por favor, preencha todos os campos corretamente')
  } 
  //Complemento da lógica funcional do programa
  else if(imc < 16){
  resultado.innerText = nome+', seu imc é '+imc+ ' Magreza grave! isso pode te levar a Insuficiência cardíaca é anemia, procure um médico.'
  } else if(imc < 18.5){
  resultado.innerText = nome + ', Seu imc é'+imc+ ' Magreza Moderada! pode elevar problemas de saúde ligados a desnutrição.'
  }else if (imc < 25){
  resultado.innerText = nome+ ', Seu imc é '+imc+ ' Peso ideal! Saudável.'
  } else if(imc < 30) {
  resultado.innerText = nome+ ', Seu imc é '+imc+ ' Sobre peso!  Pode elevar a fadiga, varizes é má circulação do sangue' 
  } else if(imc < 35){
  resultado.innerText = nome+ ', Seu imc é '+imc+ ' Obesidade grau I! Pode elevar a diabetes, infarto, angina é aterosclerose.'
  }else if(imc < 40){
  resultado.innerText = nome+ ', Seu imc é '+imc+ ' Obesidade grau II (Severa)! Pode elevar a falta de ar é apneia do sono.'
  }else{
  resultado.innerText = nome+ ', Seu imc é '+imc+ ' Obesidade grau III(Mórbita)! Pode trazer centenas de problemas como: Infarto, refluxo, avc, dificuldade para locomoção. Procure um médico.`'
  }
}
