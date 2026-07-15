import { useContext } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import MyStore from "./context/MyStore";
import AllProfiles from "./components/AllProfiles";

const App = () => {
  const {isFormOpen} = useContext(MyStore);

  return (
    <div>
      <Header />
      {isFormOpen ? <Form/> : <AllProfiles/>}
    </div>
  );
};

export default App;
