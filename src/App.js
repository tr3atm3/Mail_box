import Authentication from "./components/SignUp/Authentication";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="bg-[#f5f5f5] w-full h-[100vh]">
      <Navbar />
      <Authentication />
    </div>
  );
}

export default App;
