const alunos = [
    { id: 1, nome: "Ana", nota: 8 },
    { id: 2, nome: "Carlos", nota: 5 },
    { id: 3, nome: "Marina", nota: 9 }
];

const aprovados = alunos.filter(aluno => aluno.nota >= 7);

const nomes = aprovados.map(aluno => aluno.nome);

console.log(nomes);
//saída: [ 'Ana', 'Marina' ]
//O filter() vai filtrar os elementos e criar um novo array contendo os elementos conforme as regras que escolhemos, 
// nesse caso um objeto chave:valor . Já o método map() vai transformar esse objeto em Strings conforme a regra que decidimos 
// que é const nomes = aprovados.map(aluno => aluno.nome); que faz entrar o objeto chave:valor e sair só a string nome.
