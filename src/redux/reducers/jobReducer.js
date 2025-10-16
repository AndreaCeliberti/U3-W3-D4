import { SET_JOB, SET_JOB_LOADING_OFF, SET_JOB_LOADING_ON } from "../action";

const initialState = {
  content: [],
  isLoading: false,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        content: action.payload,
      };
    case SET_JOB_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };
    case SET_JOB_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };

    default:
      console.log("DEFAULT");
      return state;
  }
};

export default jobReducer;
