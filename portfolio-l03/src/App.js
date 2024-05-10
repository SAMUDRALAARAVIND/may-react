import { Experiences } from "./components/Experiences";
import { Profile } from "./components/Profile";
import "./styles/app.css";

const App = () => {
  return (
    <div className="container">
      <Profile />
      <Experiences />
    </div>
  );
};

export default App;
