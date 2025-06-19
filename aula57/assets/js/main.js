function criaCalculadora() {
  return {
    display: document.querySelector('.display'),
    
    inicia() { // é um método
      this.cliqueBotoes();
      // this.pressionaBackspace();
      this.pressionaEnter(); 
    },

    //  pressionaBackSpace() {
    //   this.display.addEventListener('keydown', e => {
    //     if (e.keyCode === 8) {
    //       e.preventDefault();
    //       this.clearDisplay();
    //     }
    //   });
    // },

    pressionaEnter() {
      this.display.addEventListener('keyup', e => {
        if(e.keyCode === 13) { // 13 é o código da tecla Enter
          this.realizaConta();
        }
      });
    },

    realizaConta() { // é um método
      // this = objeto calculadora
      let conta = this.display.value;
  
      try {
        conta = eval(conta);

        if(!conta) {
          alert('Conta inválida');
          return;
        }

        this.display.value = String (conta); 
      } catch(e) {
        alert('Conta inválida');
        return;
      }
    },
    
    clearDisplay() { // é um método
      this.display.value = '';
    },

    apagaUm() { // é um método
      this.display.value = this.display.value.slice(0, -1);
    },

    cliqueBotoes() {
      // this = objeto calculadora
      document.addEventListener('click', e => {
        const el = e.target;

        if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.apagaUm();
        }

        if(el.classList.contains('btn-eq')) {
          this.realizaConta();
        }

        this.display.focus();
      });
    },

     btnParaDisplay(valor) {
      this.display.value += valor;
   }
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
