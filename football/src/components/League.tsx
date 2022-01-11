import React , {useEffect, useState}from 'react';
import Teams from './Teams.tsx';


function League () {

  
const[leagues, setLeague] = useState([])
const[teams, setTeams] = useState(null)
    useEffect(() => {
      fetch(`https://www.thesportsdb.com/api/v1/json/2/all_leagues.php`)
      .then((res) => res.json())
      .then((data) => {
     let fiveLeagues= data.leagues.filter((element, i) => {
         if (i<5) {
           return element
         } 
       })
        setLeague(fiveLeagues);
      })
      .catch((e) => {
        console.log("error", e);
      });
    }, []); 
    
      const fetchTeam = (e) => {
       
        fetch(`https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=${e.target.name}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("data teams", data);
          setTeams(data)
  
        })
        .catch((e) => {
          console.log("error", e);
        });
      }

    
      // console.log("teams : ", this.state.teams);
      return (
      <div>
        
        <div>
          {leagues.map((element, i) => {
            return <button key={i} name={element.strLeague} onClick={fetchTeam}>{element.strLeague} </button>;
          })}
        </div>
        <div>
          {teams? <Teams team={teams} />: <h2>Choose a league</h2> }
         
        </div>

      </div>
    );
    };
    
 
  
  export default League;
  





//   import React from 'react';
// import Teams from './Teams';




// class League extends React.Component {
//     // constructor(){
//     //   super();
//     //   this.state = {
//     //     leagues:[],
//     //     teams: null
//     //   }
//     // }
//     // componentDidMount(){
//     //   fetch(`https://www.thesportsdb.com/api/v1/json/2/all_leagues.php`)
//     //   .then((res) => res.json())
//     //   .then((data) => {
//     //  let fiveLeagues= data.leagues.filter((element, i) => {
//     //      if (i<5) {
//     //        return element
           
//     //      } 
//     //    })
//     //     this.setState({leagues: fiveLeagues})

//     //   })
//       // .catch((e) => {
//       //   console.log("error", e);
//       // });
//       // }
//       fetchTeam = (e) => {
       
//         fetch(`https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=${e.target.name}`)
//         .then((res) => res.json())
//         .then((data) => {
//           console.log("data teams", data);
//           this.setState({teams: data})
  
//         })
//         .catch((e) => {
//           console.log("error", e);
//         });
//       }

//     render(){
//       // console.log("teams : ", this.state.teams);
//       return (
//       <div>
//         <div>
//           {this.state.leagues.map((element, i) => {
//             return <button key={i} name={element.strLeague} onClick={this.fetchTeam}>{element.strLeague} </button>;
//           })}
//         </div>
//         <div>
//           {this.state.teams? <Teams team={this.state.teams}/>: <h2>Choose a league</h2> }
         
//         </div>

//       </div>
//     );
//     };
    
//   };
  
//   export default League;
  