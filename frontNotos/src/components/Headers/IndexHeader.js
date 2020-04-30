/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
// core components
import {
  Button
} from "reactstrap";

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            ></img>
            <h1 className="h1-seo">Bienvenido a Notos</h1>
            <h3>La red donde podrás crear y aportar a iniciativas</h3>
            <h3>En notos puedes Crear una iniciativa o Aportar a una ya existente</h3>
            <Button className="btn-round" size="lg" color="primary" to="register" tag={Link}>
              <i className="now-ui-icons gestures_tap-01"></i>
                Crear
              </Button>
            <Button className="btn-round" color="primary" size="lg" to="register_n" tag={Link}>
              <i className="now-ui-icons ui-2_favourite-28"></i>
                Aportar
              </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
