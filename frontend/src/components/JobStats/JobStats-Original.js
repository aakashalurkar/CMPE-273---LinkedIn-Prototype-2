import React, {Component} from 'react';
import  './JobStats.css';

import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import {Bar,Pie} from 'react-chartjs-2';

const Bardata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Application Count',
        backgroundColor: 'blue',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40,10]
      }
    ]
  };


  const piedata = {
	
	datasets: [{
		data: [80, 50, 120, 60],
		backgroundColor: [
		'red',
		'green',
        'purple',
        'blue',
        'white',
		],
		
    }],
    labels: [
		'Sunnyvale',
		'San Jose',
        'Cupertino',
        'Milpitas',
        
	],
};



class JobStats extends Component {
  constructor(props){
    //Call the constructor of Super class i.e The Component
    super(props);
    //maintain the state required for this component
    this.state = {
     
      company : '',
    
    }


  
}
componentDidMount(){

    


}

startJobHandler(){
    
  

}








 


render() {



return (
    <div>
      
      <div className="form-row">
       <div className="form-group col-md-4" style={{textAlign:'center', margin:'30px'}}>
      <h4>Application Count per month</h4>
      </div>
      <div className="form-group col-md-4" style={{textAlign:'center', margin:'30px'}}>
      <h4>Citywise Application Count </h4>
      </div>
      </div>
      
      <div className="form-row">
     
      <div className="form-group col-md-4" style={{marginLeft:'30px' ,borderWidth:'1px', borderStyle:'groove'}}>
      
        <Bar
          data={Bardata}
          width={300}
          height={400}
          options={{
            maintainAspectRatio: false
          }}
        />
        
      </div>
      
       <div className="form-group col-md-4" style={{marginLeft:'30px' ,borderWidth:'1px', borderStyle:'groove'}}>
        
        <Pie
          data={piedata}
          width={300}
          height={400}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
     


</div>
    
    
    </div>
    
    )}
}



const mapStateToProps = state => {
return {
    
    
};
};

const mapDispatchToProps = dispatch => {
return {
    //getchartdata:(jobid) =>dispatch(actions.getinitdata(jobid)),
  
};
};

//export default connect( mapStateToProps, mapDispatchToProps )(JobStats);

export default connect( null, null )(JobStats);