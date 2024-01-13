import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomHeader from "./components/CustHeader";
import Main from "./components/CustMain";
import Footer from "./components/CustFooter";
import Container from "react-bootstrap/esm/Container";


function App() {
  return (
    <>
      <CustomHeader />
      <Container fluid>
      <Main />
      <Footer />
      </Container>
    </>
  );
}

export default App;
