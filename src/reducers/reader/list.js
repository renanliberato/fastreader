import { LIST_WORDS } from '../../actions/reader/list';

let INITIAL_STATE = [
    'Clique', 'no', 'botão', '+', 'no', 'canto', 'superior', 'direito', 'para', 'inserir', 'um', 'texto.'
]

export default (words = INITIAL_STATE, action) => {
    switch (action.type) {
        case LIST_WORDS:

            return action.words;
        default:
            return words
    }
}
