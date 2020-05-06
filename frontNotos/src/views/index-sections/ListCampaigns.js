import React from 'react';
import axios from 'axios';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Container
} from 'reactstrap';

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ListCampaignsHeader from "components/Headers/ListCampaignsHeader.js";


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
        <div className="wrapper">
          <div className="section section-about-us">
            <Container>
              {this.state.campaigns.map(campaign =>
                <Card style={{ width: "30rem" }}>
                  {/* <CardImg src="https://www.carolina.cl/static/2015/05/perro-gracioso-rie.jpg" alt="Card image cap" /> */}
                  <CardImg src="https://www.carolina.cl/static/2015/05/perro-gracioso-rie.jpg" alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{campaign.name}</CardTitle>
                    <CardSubtitle>{campaign.date}</CardSubtitle>
                    <CardText>{campaign.description}</CardText>
                    <Button>Detalles</Button>
                    <Button>Donar</Button>
                  </CardBody>
                </Card>
              )
            }
            <p></p>
            </Container>
          </div>
        </div>
      </>
    );
  }
}