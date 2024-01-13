import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavbarLinkList from "./NavbarLink";
import CustomButton from "./CustButton";

function Footer() {
  return (
    <Container>
    <footer>
      <Row className="mt-5 footerRow">
        <Col xl={3}></Col>
        <Col xl={6}>
          <Row>
            <Col>
              <ul className="navbar-nav">
                <li className="nav-item"></li>
                <NavbarLinkList testo='Audio and Subtitles'/>
                <NavbarLinkList testo='Media Center'/>
                <NavbarLinkList testo='Privacy'/>
                <NavbarLinkList testo='Contact Us'/>
                <CustomButton btn='Service code'/>
                <NavbarLinkList testo=' © 1997-2021 Netflix Inc'/>
               
              </ul>
            </Col>
            <Col>
              <ul className="navbar-nav">
              <NavbarLinkList testo='Audio Description'/>
              <NavbarLinkList testo='Investor Relations'/>
              <NavbarLinkList testo='Legal Notices'/>
              <NavbarLinkList testo='Help Center'/>
              <NavbarLinkList testo='Jobs'/>
              <NavbarLinkList testo='Cookie Preferences'/>
                
              </ul>
            </Col>
            <Col>
              <ul className="navbar-nav">
              <NavbarLinkList testo='Gift Cards'/>
              <NavbarLinkList testo='Terms Of Use'/>
              <NavbarLinkList testo=' Corporate Information'/>
              </ul>
            </Col>
          </Row>
        </Col>

        <Col xl={3}></Col>
      </Row>
    </footer>
  </Container>
  );
}

export default Footer;