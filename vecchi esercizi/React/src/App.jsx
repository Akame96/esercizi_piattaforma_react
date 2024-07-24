
// import { AlertClock } from "./AlertClock";
// import { Clock } from "./Clock";
// import { Container } from "./Container";
// import { Counter } from "./Counter";
// import { MouseClicker } from "./MouseClicker";
// import { MyForm } from "./MyForm";
// import { Color} from "./Color";
// import { MyUncontrolledForms } from "./MyUncontrolledForms";
// import { Welcome } from "./Welcome";
// import { LanguageContext } from "./LanguageContext";
// import { useState } from "react";
// import { HelloWorld } from "./HelloWorld";
// import { GithubUser } from "./GithubUser";
// import { GithubUsers } from "./GithubUsers";
// import {UseCurretLocation } from "./UseCurrentLocation";
// import { LocationComponent } from "./LocationComponent";


import React from 'react';
import GithubUsers from './GithubUsers';

function App() {
  return (
    <div>
      <h1>GitHub User Search</h1>
      <GithubUsers />
    </div>
  );
}

export default App;
// export function App() {
//   const [language , setLanguage] = useState('en');

//   function handleLanguage(language){
//    setLanguage(language)
//   }

//   return (
  
   
//     <div>
//     <button onClick={()=>handleLanguage('it')}>ITA</button>
//     <button onClick={()=>handleLanguage('en')}>ENG</button>

//     <Container title={<h1> My awesome Application</h1>}>  

//       <LanguageContext.Provider value={language}>
//         <hr />
//       <Welcome name= 'Nunzia'/>
//       <h1>GitHub User Search</h1>
//       <GithubUsers />
//       {/* <HelloWorld/> */}
//       {/* <UseCurretLocation /> */}
//       {/* <AlertClock />
//       <Counter />
//       <MouseClicker />
//       <MyForm />
//       <MyUncontrolledForms/> 
//       <Clock />
//       <Color color= {[
//         { id: 1, name: 'Red' },
//         { id: 2, name: 'Blue' },
//         { id: 3, name: 'Green' },
//      ]}
//     /> 
//      */}
//  </LanguageContext.Provider>
//      </Container>
    
//      </div>
//   );
// }
