import produce from 'immer';

export const INITIAL_STATE = {
  visible: true,
};

export default function client(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@button/DASHBOARD': {
        draft.visible = true;
        break;
      }
      case '@button/REGISTER': {
        draft.visible = false;
        break;
      }

      default:
    }
  });
}
