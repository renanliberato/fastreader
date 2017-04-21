import { PASS } from '../../actions/reader/pass';
import { RESET } from '../../actions/reader/reset';
import { GO_TO_BOOKMARK } from '../../actions/reader/bookmark';
import { BACKWARD } from '../../actions/reader/backward';
import { FORWARD } from '../../actions/reader/forward';

let INITIAL_STATE = 0;

export default (current = INITIAL_STATE, action) => {
    switch (action.type) {
        case PASS:
            current++;
            if (current >= action.length) {
                current = action.length - 1;
            }
            return current;
        case GO_TO_BOOKMARK:
            return action.bookmark
        case BACKWARD:
            var backCurrent = current - 10;
            if (backCurrent < 0) {
                backCurrent = 0;
            }
            return backCurrent
        case FORWARD:
            var forwardCurrent = current + 10;
            if (forwardCurrent >= action.length) {
                forwardCurrent = action.length - 1;
            }
            return forwardCurrent
        case RESET:
            return 0;
        default:
            return current
    }
}
