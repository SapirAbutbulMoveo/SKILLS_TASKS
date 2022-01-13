import React from 'react';
import EachTeam from './EachTeam.tsx';




function Teams (props) {
  interface Team { 
     teamName:string;
     teamLogo: string;
    }
    
      return (
      <div>
        <div className='teams-container'>
          {props.team.map((element, i) => {
            const eachTeam : Team={
             teamName: element.strTeam,
             teamLogo: element.strTeamLogo
              }
            return <EachTeam key={i} team = {eachTeam}/>
          })}
        </div>
      </div>
    );
  
  };
  
  export default Teams;
  


//   import React from 'react';
// import EachTeam from './EachTeam.tsx';




// function Teams (props) {
//   class Team {
//     constructor(
//      readonly teamName:string,
//      readonly teamLogo: string,
//     ){}
    
//   }
//       return (

//       <div>

//         <div className='teams-container'>
//           {props.team.map((element, i) => {
//             const eachTeam = new Team(element.strTeam, element.strTeamLogo)
//             return <EachTeam key={i} team = {eachTeam}/>
//           })}
//         </div>

        

//       </div>
//     );
  
//   };
  
//   export default Teams;
  