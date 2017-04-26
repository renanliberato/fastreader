import { LIST_WORDS } from '../../actions/reader/list';

let INITIAL_STATE = [
    'Clique', 'no', 'botão', '+', 'no', 'canto', 'superior', 'direito', 'para', 'inserir', 'um', 'texto.', 'Utilize', 'a', 'barra', 'superior', 'para', 'alterar', 'a', 'velocidade', 'com', 'que', 'o', 'texto', 'é', 'exibido,', 'podendo', 'correr', 'de', 'uma', 'a', 'dez', 'palavras', 'por', 'segundo.', 'Os', 'botões', 'superiores', 'ao', 'texto', 'servem', 'para', 'marcar', 'uma', 'palavra', 'e', 'ir', 'até', 'a', 'palavra', 'marcada,', 'respectivamente.', 'Os', 'botões', 'inferiores', 'ao', 'texto', 'servem', 'para', 'navegar', 'no', 'texto,', 'voltando', 'dez', 'palavras,', 'pausando', 'ou', 'correndo', 'o', 'texto', 'e', 'avançando', 'dez', 'palavras.'
]

export default (words = INITIAL_STATE, action) => {
    switch (action.type) {
        case LIST_WORDS:

            return action.words;
        default:
            return words
    }
}
