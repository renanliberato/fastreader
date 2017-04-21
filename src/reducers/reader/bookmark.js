import { BOOKMARK } from '../../actions/reader/bookmark';

let INITIAL_STATE = 0;

export default (bookmark = INITIAL_STATE, action) => {
    switch (action.type) {
        case BOOKMARK:
            return action.bookmark
        default:
            return bookmark
    }
}
