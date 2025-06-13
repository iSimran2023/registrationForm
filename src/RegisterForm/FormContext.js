import React, { createContext, useState } from "react";

export const FormContext = createContext([{}, () => {}]);

export default function UserProvider(props) {  
  const [state, setState] = useState({
    user: {
      // Personal Information
      fullname: "",
      number: "",
      email: "",
      birthdate: new Date().toISOString().slice(0, 10),
      gender: "",
      address: "",

      // Educational Information
      applyingFor: "", // "bachelors" or "masters"
      school: "",
      board: "",
      completionYear: "",
      grade: "",
      seeYear: "",
      plusTwoYear: "",
      programChoice: [], // Array of selected programs

      // Additional Information
      discoveryMethods: {
        studentCollegeFamily: false,
        friends: false,
        relative: false,
        websites: false,
        others: false
      },
      otherDiscoveryMethod: "",
    },
    errors: {}
  });

  return (  
    <FormContext.Provider value={[state, setState]}>
      {props.children}
    </FormContext.Provider>
  );
}