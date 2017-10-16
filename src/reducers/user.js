import { SIGNED_IN } from '../constants';


let user = {
  email: null
}

export default (state = user, action) => {
  console.log('action', action);
  switch (action.type) {
    case SIGNED_IN:
      const { email } = action;
      user = {
        email
      };
      return user;
    default:
      return state;

  }
}
