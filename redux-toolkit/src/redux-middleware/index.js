import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import { asycIncrementCount, fetchPostOffices } from "./thunk";
import { useEffect, useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const inc = async () => {
    dispatch(asycIncrementCount);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={inc}>Increment</button>
    </div>
  );
};

const CitySearch = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const postOffices = useSelector((state) => state.city.info);

  useEffect(() => {
    dispatch(fetchPostOffices);
  }, []);

  return (
    <div>
      <input
        placeholder="Search post office"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ul>
        {postOffices
          ?.filter(
            (postOffce) =>
              postOffce.Name.toLowerCase().indexOf(value.toLowerCase()) !== -1
          )
          .map((postOffice) => (
            <li>{postOffice.Name}</li>
          ))}
      </ul>
    </div>
  );
};

export const ReduxMiddlewareExample = () => {
  return (
    <Provider store={store}>
      <Counter />
      <CitySearch />
    </Provider>
  );
};
