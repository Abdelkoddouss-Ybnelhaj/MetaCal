import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({children}) =>{
    const [calories,setCalories] = useState()
    const [userDetails,setUserDetails] = useState({
        age: '',
        gender: '',
        weight: '',
        height: '',
        activityLevel: '',
    })

    const [userInputs,setValidUserInputs] = useState({
        age: true,
        gender: true,
        weight: true,
        height: true,
        activityLevel: true,
    })
    
    return (
        <UserContext.Provider value={{ userDetails, setUserDetails , userInputs , setValidUserInputs ,calories,setCalories}}>
          {children}
        </UserContext.Provider>
      );
}

export { UserContext, UserProvider };