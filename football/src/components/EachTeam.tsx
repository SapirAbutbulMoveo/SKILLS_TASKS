import React from 'react';





function EachTeam (props) {
  
     const { teamName, teamLogo} = props.team

      return (
       
        
      <div className='teamCard'>
          <h2 className='teamName'>{teamName}</h2>
          <img className='teamLogo' alt={`${teamName}'s logo`} src={teamLogo} />

      </div>
    );
    };
    
  
  export default EachTeam;
  