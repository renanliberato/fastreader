import { SPEED } from '../../actions/reader/speed';

let INITIAL_STATE = 1;

export default (speed = INITIAL_STATE, action) => {
    switch (action.type) {
        case SPEED:
            return action.speed
        default:
            return speed
    }
}
