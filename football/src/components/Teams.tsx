import React from 'react';
import EachTeam from './EachTeam.tsx';




function Teams (props) {
  console.log("pppp", props);
  
    
      return (

      <div>

        <div>
          {props.team.teams.map((element, i) => {
            // console.log("each team : ", element.strTeam , "rrr" , element.strTeamLogo);
            return <EachTeam key={i} teamName={element.strTeam} teamLogo={element.strTeamLogo}/>
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
  