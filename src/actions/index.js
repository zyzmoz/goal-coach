import { SIGNED_IN, ADD_GOAL} from '../constants';

export function logUser(email){
  const action = {
    type: SIGNED_IN,
    email
  }
  return action;
}

export function addGoal(goal){
  const { email, text } = goal;
  const action = {
    type: ADD_GOAL,
    email,
    text
  }
  return action;
}
