/* eslint-disable import/prefer-default-export */
export const getPeople = (token) => async (dispatch) => {
  try {
    const response = await fetch('https://localhost:44328/api/people', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const res = await response.json();

    dispatch({
      type: 'GET_PEOPLE_SUCCESS',
      payload: res,
    });
  } catch (error) {
    console.error(error);
  }
};

export const selectionChanged = (selectedPerson) => ({
  type: 'MENU_SELECTION',
  payload: selectedPerson,
});
