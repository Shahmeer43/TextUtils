import Alert from "../Components/Alert";
import TextForm from "../Components/TextForm";

const Home = ({ mode, alert, showAlert }) => {
  return (
    <div>
      <Alert msg={alert} />
      <TextForm mode={mode} showAlert={showAlert} />
    </div>
  );
};

export default Home;
