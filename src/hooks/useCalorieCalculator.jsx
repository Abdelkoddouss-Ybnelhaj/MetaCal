import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import {validIntInput , validStringInput} from '../utils/Helper'
import useUserDetails from '../hooks/useUserDetails';

function useCalorieCalculator() {

    const {userDetails , setCalories} = useContext(UserContext);
    const {updateValidUserInputs} = useUserDetails();

    const calculateCalories = () =>{
        let result ;
        if(userDetails["gender"] === "Man"){
            result = 88.362 + (13.397 * userDetails['weight']) + (4.799 * userDetails['height']) - (5.677 * userDetails['age']) 
        }else{
            result = 447.593 + (9.247 * userDetails['weight']) + (3.098 * userDetails['height']) - (4.330 * userDetails['age'])
        }
        setCalories(Math.trunc(integrateActivities(result)))
    }

    const integrateActivities =(calories)=>{
        switch (userDetails['activityLevel']) {
            case "Not very active":
                return calories * 1.2
            case "Moderately active":
                return calories * 1.375
            case "Active":
                return calories * 1.55
            case "Very Active":
                return calories * 1.725
            default:
                break;
        }
    }

    const validateInputs = ()=>{
        let state = true;
        for (const key in userDetails) {
            if (userDetails.hasOwnProperty(key)) {
                if(key === "gender" || key === "activityLevel"){
                    updateValidUserInputs({[key] : validStringInput(userDetails[key])})
                    state = !validStringInput(userDetails[key]) ? false : state;
                }else{
                    updateValidUserInputs({[key] : validIntInput(userDetails[key])})
                    state = !validIntInput(userDetails[key]) ? false : state;
                }
                
            }
        }
        return state;
    }

  return {validateInputs , calculateCalories}
}

export default useCalorieCalculator