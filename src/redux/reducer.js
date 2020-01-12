import { LOG_IN } from './actionTypes';
import userData from '../EmployeeList/userData.json';
const initialtate = {
    user: [],
    loggedIn: false
}
const Data = userData;
export default function(state = initialtate, action) {
    switch (action.type) {
        case LOG_IN: {
          return {
            user: [...Data],
            loggedIn: true
          };
        }
        default:
          return state;
      }
}