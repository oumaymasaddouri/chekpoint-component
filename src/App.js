import "./App.css";
import Adress from "./component/profile/Adress";
import FullName from "./component/profile/FullName";
import ProfilePhoto from "./component/profile/ProfilePhoto";

function App() {
  return (
    <section>
      <ProfilePhoto />
      <FullName />
      <Adress />
    </section>
  );
}

export default App;
