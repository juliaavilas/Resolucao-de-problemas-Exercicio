const users = [
    { nome: 'Juca', idade: 25, cargo: 'front-end' },
    { nome: 'Márcia', idade: 23, cargo: 'back-end' },
    { nome: 'Victória', idade: 28, cargo: 'designer' },
    { nome: 'Fábio', idade: 32, cargo: 'back-end' },
    { nome: 'Renata', idade: 21, cargo: 'front-end' },
  ]

 function generateInfo(user) {
    return `${users[user].nome} tem ${users[user].idade} anos e é ${users[user].cargo}.`
  }

  for (let i = 0; i < users.length; i++) {
    console.log(generateInfo(i))
  }

//   O código no arquivo main.js deveria imprimir no console a seguinte saída:
// Juca tem 25 anos e é front-end.
// Márcia tem 23 anos e é back-end.
// Victória tem 28 anos e é designer.
// Fábio tem 32 anos e é back-end.
// Renata tem 21 anos e é front-end.