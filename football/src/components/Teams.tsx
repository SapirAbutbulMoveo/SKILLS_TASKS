import React from 'react';
import EachTeam from './EachTeam.tsx';




function Teams (props) {
  class Team {
    constructor(
     readonly teamName:string,
     readonly teamLogo: string,
    ){}
    
  }
      return (

      <div>

        <div className='teams-container'>
          {props.team.map((element, i) => {
            const eachTeam = new Team(element.strTeam, element.strTeamLogo)
            return <EachTeam key={i} team = {eachTeam}/>
          })}
        </div>

        

      </div>
    );
  

    // return (
    //   <div>
    //       <h1>hello</h1>
    //       <EachTeam/>
    //   </div>
    
    // )
    
  };
  
  export default Teams;
  