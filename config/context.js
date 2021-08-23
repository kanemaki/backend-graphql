module.exports = ({ req }) => {
    console.log('Contexto')
    return {
        texto: 'Curso GraphQL',
        imprimir() {
            console.log('Curso GraphQL!!!!!')
        }
    }
}