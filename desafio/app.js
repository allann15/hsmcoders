const cursos = require('./database')
console.log(cursos)

const readline = require('readline-sync')

const entradainicial = readline.question('você quer fazer curso de educação financeira?S/N')

if (entradainicial.toLocaleUpperCase() === 'S') {
    console.log('esses são os títulos disponíveis')
    console.log('fundamentos da economia','/mercado financeiro','/bolsa de valores','/controle financeiro pessoal','/como gastar conscientemente','/contagem financeira')

    const entradatítulo = readline.question('qual título você escolhe:')


    const retorno = cursos.filter(curso => curso.título === entradatítulo)

    console.table(retorno)
} else{
    console.log('obrigado pela sua atenção')
}


