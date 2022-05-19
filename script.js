let operador1, operador2, operaçao, estado, negative; //declarando variáveis
let disp;
let ac;
let res;
function reset() { //função para zerar quaisquer variáveis, quando a página é atualizada, ou também quando a tecla "C" for clicada
  operador1 = "0";
  operador2 = "0";
  operaçao = null;
  estado = 1;
  disp.value = "0";
  ac.value = "AC";
}

function btnClick(objeto) { //quando houver um clique as funções poderão ser iniciadas
  let me = objeto.value;

  if (me == "C") { //se o usuário clicar na tecla C irá limpar quaisquer respostas antes
    reset();
    return;
}
  if (me == "=") { //caso o usuário clique na tecla igual, as operações serão feitas, e o resultado será mostrado na tela
    switch (operaçao) {
      case "+":
        res = parseFloat(operador1) + parseFloat(operador2);
        reset();
        break;
      case "-":
        res = parseFloat(operador1) - parseFloat(operador2);
        reset();
        break;
      case "*":
        res = parseFloat(operador1) * parseFloat(operador2);
        reset();
        break;
      case "÷":
        res = parseFloat(operador1) / parseFloat(operador2);
        reset();
        break;
      case "%":
        res = parseFloat(operador1)/100 * parseFloat(operador2);
        reset();
        break;
    }
    disp.value = res.toString(); //irá mudar o display(resultado atual) com a resposta final
    estado = 1;
    ac.value = "C";
    return;
  }

  if (me == "+" || me == "-" || me == "*" || me == "÷" || me == "%") { //caso estas teclas sejam acionadas
    operaçao = me; // a operação irá ser este sinal
    estado = 2; //o estado da calculadora irá mudar, apenas assim podendo receber o outro valor
    ac.value = "C"
    return;
  }

  if (me == "." || (me >= "0" && me <= "9")) { //caso quaiquer umas dessas teclas forem acionadas irão ser adicionadas aos operadores
    ac.value = "C";
    if (estado == 1) {  //caso esteja no estado 1, o número irá ser adicionado ao primeiro elemento da conta
      operador1 += me;
      disp.value = parseFloat(operador1).toString();
    } else if (estado == 2) { ///caso esteja no estado 2, o número irá ser adicionado ao segundo elemento da conta
      operador2 += me;
      disp.value = parseFloat(operador2).toString();
    }
  }
  
  if(me == "+/-"){ //caso esta tecla seja adicionada irá ser feita uma conta multiplicando por (-1) e sendo adicionado ao display o resultado como o operador final
      if (estado == 1){
          operador1 = operador1 * (-1)
          disp.value = parseFloat(operador1).toString();
      }else if (estado == 2){
          operador2 = operador2 * (-1)
          disp.value = parseFloat(operador2).toString();
     }
     ac.value = "C"
  }
}

function inicialize_pagina() { //sempre que a página for carregada estas variáveis receberão seus devidos valores iniciais, e a função reset irá resetar os elementos presentes
  disp = document.getElementById("display");
  ac = document.getElementById("btnClear");
  reset();
}
