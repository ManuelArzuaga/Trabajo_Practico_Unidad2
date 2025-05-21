function Calcular(operador){
  const op1 = parseFloat(document.getElementById("Operando1").value);
  const op2 = parseFloat(document.getElementById("Operando2").value);
  let resultado;
  
  switch(operador){
    case "+": 
      resultado = op1 + op2;
      break;
    case "-": 
      resultado = op1 - op2;
      break;
    case "*": 
      resultado = op1 * op2;
      break;
    case "/": 
      if(op2 != 0){
        resultado = op1 / op2;
        break;
      }
      else{
        resultado = "ERROR"
      }
    }
  document.getElementById("Resultado").textContent = "Resultado:" + resultado;
}