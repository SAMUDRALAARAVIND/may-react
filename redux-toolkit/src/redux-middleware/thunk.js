const delay = () => new Promise((r) => setTimeout(r, 3000));

// asycIncrementCount is a middleware
export async function asycIncrementCount(dispatch, getState) {
  //   await delay();
  //   console.log(getState()); // {count: 10, value: 1}
  // count = 10
  dispatch({ type: "inc", payload: 5 }); // count = 15
  //   dispatch({ type: "inc", payload: 10 }); // count = 25
  //   dispatch({ type: "inc", payload: 3 }); // count = 28
}

export async function fetchPostOffices(dispatch) {
  try {
    const response = await fetch("https://api.postalpincode.in/pincode/506163");
    const data = await response.json();
    dispatch({ type: "fetched_data", payload: data[0].PostOffice });
  } catch (error) {}
}
