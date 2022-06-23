import React,{Component} from 'react';
import {Carousel} from 'react-bootstrap'
import Navbar from './Navbar'

class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
            <Navbar/>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg"
      alt="Interesting"
    />
    <Carousel.Caption>
      <h3>Cool..</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://thumbs.dreamstime.com/b/happy-woman-sunset-nature-iwith-open-hands-summer-95038703.jpg"
      alt="Cool..."
    />

    <Carousel.Caption>
      <h3>Beautifull..</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="Amzing.."
    />

    <Carousel.Caption>
      <h3>Just Amzing..</h3>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </>
            );
    }
}

export default Home;
