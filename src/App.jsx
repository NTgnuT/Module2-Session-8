import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Expenses from "./th3/Expenses";
import Invoices from "./th3/Invoices";
import CreateNewInvoices from "./th3/CreateNewInvoices";
import Google from "./th3/Google";
import Apple from "./th3/Apple";

// import Navbar from "./th2/Navbar";
// import Portfolio from "./th2/Portfolio";
// import About from "./th2/About";
// import Team from "./th2/Team";
// import Clients from "./th2/Clients";
// import Contact from "./th2/Contact";
// import Footer from "./th2/Footer";
// import Service from "./th2/Service";

// import Home from "./th1/Home";
// import Contact from "./th1/Contact";
// import About from "./th1/About";
// import Portfolio from "./th1/Portfolio";
// import Navbar from "./th1/Navbar";

function App() {
  return (
    <>
      {/* Bài 1 */}
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes> */}

      {/* Bài 2 */}
      {/* <Navbar />

      <Routes>
        <Route path="/" element={<Service />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/About" element={<About />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Clients" element={<Clients />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <Footer /> */}

      {/* Bài 3 */}
      <ul>
        <li>
          <NavLink to={"/Invoices"}>Invoices</NavLink>
        </li>
        <li>
          <NavLink to={"/Expenses"}>Expenses</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/Invoices" element={<Invoices />}>
          <Route path="new" element={<CreateNewInvoices />}></Route>
          <Route path="1" element={<Google />}></Route>
          <Route path="2" element={<Apple />}></Route>
        </Route>

        <Route path="/Expenses" element={<Expenses />}></Route>
      </Routes>
    </>
  );
}

export default App;
