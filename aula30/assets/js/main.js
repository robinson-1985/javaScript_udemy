// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDiaSemanaTexto (diaSemana){
//   let diaSemanaTexto;

//   switch (diaSemana) {
//     case 0:
//       diaSemanaTexto = 'domingo';
//       return diaSemanaTexto;
//     case 1:
//       diaSemanaTexto = 'segunda-feira';
//       return diaSemanaTexto;
//     case 2:
//       diaSemanaTexto = 'terça-feira';
//       return diaSemanaTexto;
//     case 3:
//       diaSemanaTexto = 'quarta-feira';
//       return diaSemanaTexto;
//     case 4:
//       diaSemanaTexto = 'quinta-feira';
//       return diaSemanaTexto;
//     case 5:
//       diaSemanaTexto = 'sexta-feira';
//       return diaSemanaTexto;
//     case 6:
//       diaSemanaTexto = 'sábado';
//       return diaSemanaTexto;
//     default:
//       diaSemanaTexto = 'dia inválido';
//       return diaSemanaTexto;
//   }
// }

// function getNomeMes (numeroMes){  
//   let diaSemanaTexto;

//   switch (numeroMes){
//     case 0:
//       diaSemanaTexto = 'janeiro';
//       return diaSemanaTexto;
//     case 1:
//       diaSemanaTexto = 'fevereiro';
//       return diaSemanaTexto;
//     case 2:
//       diaSemanaTexto = 'março';
//       return diaSemanaTexto;
//     case 3:
//       diaSemanaTexto = 'abril';
//       return diaSemanaTexto;
//     case 4:
//       diaSemanaTexto = 'maio';
//       return diaSemanaTexto;
//     case 5:
//       diaSemanaTexto = 'junho';
//       return diaSemanaTexto;
//     case 6:
//       diaSemanaTexto = 'julho';
//       return diaSemanaTexto;
//     case 7:
//       diaSemanaTexto = 'agosto';
//       return diaSemanaTexto;
//     case 8:
//       diaSemanaTexto = 'setembro';
//       return diaSemanaTexto;
//     case 9:
//       diaSemanaTexto = 'outubro';
//       return diaSemanaTexto;
//     case 10:
//       diaSemanaTexto = 'novembro';
//       return diaSemanaTexto;
//     case 11:
//       diaSemanaTexto = 'dezembro';
//       return diaSemanaTexto;
//   }
// }

// function zeroAEsquerda(num){
//   return num >= 10 ? num : `0${num}`;
// }

// function criaData(data){
//   const diaSemana = data.getDay();
//   const numeroMes = data.getMonth();

//   const nomeDia = getDiaSemanaTexto(diaSemana);
//   const nomeMes = getNomeMes(numeroMes);

//   return (
//     `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
//     ` de ${data.getFullYear()}` +
//     ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}` 
//   );
// }

// h1.innerHTML = criaData(data);


// Vamos mostrar uma forma mais simples de fazer isso sem o switch case.

// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDiaSemanaTexto (diaSemana){
//   const diasSemana = [
//     'domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 
//     'quinta-feira', 'sexta-feira', 'sábado'];
//   return diasSemana[diaSemana];
// }

// function getNomeMes (numeroMes){  
//   const meses = [
//     'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
//     'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
//   ];
//   return meses[numeroMes];
// }

// function zeroAEsquerda(num){
//   return num >= 10 ? num : `0${num}`;
// }

// function criaData(data){
//   const diaSemana = data.getDay();
//   const numeroMes = data.getMonth();

//   const nomeDia = getDiaSemanaTexto(diaSemana);
//   const nomeMes = getNomeMes(numeroMes);

//   return (
//     `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
//     ` de ${data.getFullYear()}` +
//     ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}` 
//   );
// }

// h1.innerHTML = criaData(data);

// Vamos mostrar uma forma mais simples de fazer isso utilizando o método toLocaleString.

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// const opcoes = {
//   dateStyle: 'full',
//   timeStyle: 'short'
// };

// h1.innerHTML = data.toLocaleString('pt-BR', opcoes);

// Essa é a forma mais adequada para o padrão JavaScript:

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });

// O método toLocaleString é uma forma mais simples de formatar datas.
