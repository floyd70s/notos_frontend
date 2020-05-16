import React from 'react';
import axios from 'axios';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container,
  Row,Col
} from 'reactstrap';

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ListCampaignsHeader from "components/Headers/ListCampaignsHeader.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";
import WebpayPlusController from 'components/TBK/src/controllers/WebpayNormalController.js'


function Donate (){
  console.log('donar')
  WebpayPlusController.init()
}

export default class listCampaigns extends React.Component {
  state = {
    campaigns: []
  }

  componentDidMount() {
    // axios.get(`https://jsonplaceholder.typicode.com/users`)
    axios.get('http://localhost:3977/api/get-campaigns')
      .then(res => {
        const campaigns = res.data;
        this.setState({ campaigns });
      })
  }
  render() {
    return (
      <>
        <IndexNavbar />
        <ListCampaignsHeader />
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h1 className="title">Lista de Iniciativas</h1>
              <h5 className="description">
                Acá podrás encontrar campañas de todo tipo para ayudar.
                Recuerda que Tú puedes hacer la diferencia.
              </h5>
            </Col>
          </Row>
        </Container>
        <Container>
          {this.state.campaigns.map(campaign =>
            <Card key={campaign._id} style={{ width: "60rem" }}>
               <CardImg src="https://www.carolina.cl/static/2015/05/perro-gracioso-rie.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>{campaign.name}</CardTitle>
                <CardSubtitle>{campaign.date}</CardSubtitle>
                <CardText>{campaign.description}</CardText>
                <Button>Detalles</Button>
                <Button onClick={Donate} >Donar</Button>
              </CardBody>
            </Card>
          )
          }
        </Container>
        <TransparentFooter />
      </>
    );
  }
}
