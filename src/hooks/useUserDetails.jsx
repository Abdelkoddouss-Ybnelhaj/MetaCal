import { useContext } from 'react'
import { UserContext } from '../context/UserContext';

function useUserDetails() {
    const {userDetails ,setUserDetails,userInputs , setValidUserInputs , calories} = useContext(UserContext);

    const updateUserDetails = (newDetails) => {
        setUserDetails((prevDetails) => ({ ...prevDetails, ...newDetails }));
    };

    const updateValidUserInputs = (newDetails) =>{
        setValidUserInputs((prev)=> ({...prev,...newDetails}))
    }
    return {userDetails, updateUserDetails , userInputs, updateValidUserInputs , calories  };
}

export default useUserDetails