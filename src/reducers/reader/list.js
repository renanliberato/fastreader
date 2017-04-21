import { LIST_WORDS } from '../../actions/reader/list';

let INITIAL_STATE = [
    'Olá','a','todos!','Eu','tenho','53','anos.','Nasci','no','interior','de','Minas','Gerais,','na','casa','dos','meus','avós','maternos,','zona','rural','da','cidade','de','Aimorés,','MG,','fronteira','com','Baixo','Guandú,','ES.'
]

export default (words = INITIAL_STATE, action) => {
    switch (action.type) {
        case LIST_WORDS:

            return action.words;
        default:
            return words
    }
}
