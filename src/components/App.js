// Importing required method,function,hooks etc.
import NavigationBar from "./Navbar/Navbar";
import Albums from "./Albums/Albums";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";

// Creating functional component
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

// Use default export
export default App;
