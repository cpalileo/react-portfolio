import React, { useState } from "react";
import Header from "./components/header";
import Nav from "./components/nav";
import Projects from "./components/projects";
import Footer from "./components/footer";

function App() {
  const [pages] = useState([
    {
      name: "about-me",
    },
    { name: "portfolio" },
    { name: "resume" },
    {
      name: "contact",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <Projects currentPage={currentPage}></Projects>
      </main>
      <Footer />
    </div>
  );
}

export default App;
