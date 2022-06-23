import React, { Component } from 'react';
import {Sidebar} from 'primereact/sidebar'
import { Button } from 'primereact/button';
import { Card } from 'primereact/card' 
import {Link} from 'react-router-dom';
class Navbar extends Component{

  constructor(props){
    super(props);
    this.state={
       ifvisible:true
    }
  }

  render(){
    return(
      <>
      <Sidebar onHide={()=>this.setState({ifvisible:!this.state.ifvisible})} visible={this.state.ifvisible}>

       <Card>

       </Card>
      </Sidebar>
      <div>
        {this.state.ifvisible?'':<Button onClick={()=>this.setState({ifvisible:!this.state.ifvisible})}><i className='pi pi-list'></i></Button>
      }
      </div>
      </>
    )
  }

}

export default Navbar;