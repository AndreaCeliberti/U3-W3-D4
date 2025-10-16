export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const SET_JOB = "SET_JOB";
export const SET_JOB_LOADING_ON = "SET_JOB_LOADING_ON";
export const SET_JOB_LOADING_OFF = "SET_JOB_LOADING_OFF";

export const addToFavouriteAction = (data) => ({
  type: ADD_TO_FAVOURITE,
  payload: data.company_name,
});

export const removeFromFavouriteAction = (data) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: data.company_name,
});

export const getSearchAction = (company) => {
  return async (dispatch) => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

    try {
      const response = await fetch(baseEndpoint + company);

      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: SET_JOB, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
