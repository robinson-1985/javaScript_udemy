// Tratando e lançando erros (try, catch, finally)

/* try {
  // É executado quando não há erros
  //console.log(a); // Erro
  console.log('Abri um arquivo');
  console.log('Manipulei o arquivo e gerou erro');
  console.log('Fechei o arquivo');

  try {
    console.log(b); // Erro
  } catch (error) {
    console.log('Deu erro');
  } finally {
    console.log('Também sou finally.');
  }


} catch (error) {
  // É executado quando há erros
  console.log('Tratando o erro');
} finally {
  // Sempre é executado
  console.log('Finally: Eu sempre sou executado');
} */


function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date.');
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}


try {
  const data = new Date('01-01-1970 12:58:12');
  const hora = retornaHora(11); // espera um objeto Date e não um número (boolean, string, etc)
  console.log(hora);
} catch (error) {
  // Tratar erro
  // console.log(error); 
} finally {
  console.log('Tenha um bom dia.');
}
