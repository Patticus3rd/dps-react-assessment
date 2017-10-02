import React, { Component } from 'react';
import axios from 'axios';
import { Card, Image, Segment, Header, List } from 'semantic-ui-react';

class Beers extends Component {
  state = {beers: []}


  componentDidMount() {
    axios.get('/api/all_beers')
    .then( res => {
      this.setState({ beers: res.data.entries })
    })
    .catch( err => {
    })
  }

  
  render() {
    return(
      <Segment>
        <Header>Top 50 Beer: </Header>
          <List divided verticalAlign='middle'>
            { this.state.beers.map( beer =>
          <List.Item key={beer.id}>
          <List.Content>
            <h1>{beer.name_display}</h1>
          </List.Content>
         </List.Item>
        ) 
      }
           </List>
      </Segment>
    )
  }
}  


export default Beers;