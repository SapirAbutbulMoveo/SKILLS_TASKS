import React from 'react';





function EachTeam (props) {
    
    
      return (
      <div>
          <h2>{props.teamName}</h2>
          <img alt='Team logo' src={props.teamLogo} />

      </div>
    );
    };
    
  
  export default EachTeam;
// class EachTeam extends React.Component {
    
//     render(){
//       console.log("this.props", this.props);
//       return (
//       <div>
//           <h2>{this.props.teamName}</h2>
//           <img alt='Team logo' src={this.props.teamLogo} />

//       </div>
//     );
//     };
    
//   };
  
//   export default EachTeam;
  