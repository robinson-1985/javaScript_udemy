// Object date

// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const date = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix

// o mes começa do 0 (janeiro) e vai até 11 (dezembro)

// const date = new Date(2024, 8, 18, 15, 14, 27, 999); // ano, mês, dia, h, m, s, ms
// console.log(date.toString());

// const date = new Date('2024-09-18 15:14:27');
// console.log('Dia', date.getDate());
// console.log('Mês', date.getMonth() + 1); // mês começa do 0
// console.log('Ano', date.getFullYear());
// console.log('Hora', date.getHours());
// console.log('Min', date.getMinutes());
// console.log('Seg', date.getSeconds());
// console.log('ms', date.getMilliseconds());
// console.log('Dia semana', date.getDay()); // 0 = domingo, 6 = sábado
// console.log(date.toString());

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
