import NavigationBar from "./Navbar/Navbar";
import Albums from "./Albums/Albums";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <NavigationBar />
      <Albums />
      <div>
        <Toaster />
      </div>
    </>
  );
}

export default App;
