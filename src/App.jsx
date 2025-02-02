import { useState } from "react";
import { Navbar, Home, Bodas } from "./components";
import "./App.css";

function App() {
  // const [Page, setPage] = useState("home");
  let Component;
  switch (window.location.pathname) {
    case "/home":
      Component = Home;
      break;
    case "/bodas":
      Component = Bodas;
      break;
    // case "/contactos":
    //   Component = Contactos;
    //   break;
    default:
      window.location.pathname = "/home";
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
        rel="stylesheet"
      ></link>
      {/* info section */}
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Karla:ital,wght@0,200..800;1,200..800&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
        rel="stylesheet"
      ></link>
      <Navbar />
      {/* <Home />
      <Bodas /> */}
      <Component />
    </>
  );
}

export default App;
