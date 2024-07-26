import React, { useEffect, useRef, useState } from 'react'
import QstFrame from '../components/QstFrame'
import NumericInput from '../components/NumericInput'
import Activity from '../components/Activity'
import chair from '../assets/icons/icon-sitting-on-chair.svg'
import stand from '../assets/icons/icon-stand-up.svg'
import manual from '../assets/icons/icon-manual-handling.svg'
import walk from '../assets/icons/icon-walking.svg'
import lose from '../assets/icons/lose-weight.svg'
import Save from '../assets/icons/save-weight.svg'
import Gain from '../assets/icons/gain-weight.svg'
import Result from '../components/Result'
import useCalorieCalculator from '../hooks/useCalorieCalculator'
import useUserDetails from '../hooks/useUserDetails'
import Alert from '../components/Alert'


function CaloriesCal() {
  const { userDetails, updateUserDetails , calories} = useUserDetails();
  const {validateInputs , calculateCalories} = useCalorieCalculator();
  const [showResult,setShowResult] = useState();
  const sectionRef = useRef(null)

  const calculate = ()=>{
    if(validateInputs()){
      // calculate the calories
      calculateCalories()
      setShowResult(true)
    }else{
      //show an Alert
      setShowResult(false)
    }

  }

  const HandleGender = (event)=>{
    const {name , value} = event.target;
    updateUserDetails({[name] : value})
  }

  useEffect(() => {
    if (showResult) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showResult]);


  return (
    <div className='flex flex-col text-gray-800'>
      <div className='flex flex-col items-center pt-8'>
        <span className="lg:text-5xl md:text-4xl text-3xl  font-medium">Calculation of daily calories</span>
        <span className='lg:text-sm text-ls pt-2 text-gray-500'>To perform an exact calculation, we need some basic information from you.</span>
      </div>

      <div className='pt-16 grid grid-cols-2  gap-8'>
        <QstFrame nb="1" title="What is your gender ?" name="gender"
        content={
        <div className='lg:w-72 md:w-60 sm:w-32 w-24  flex justify-between'>
          <button 
            className= {`cursor-pointer ${userDetails["gender"] === 'Man'? 'text-white bg-primaryColor' :'text-gray-700 bg-gray-100'  }  lg:text-lg md:text-lg sm:text-sm text-ls  lg:px-12 md:px-8 px-3 py-2 rounded `} 
            value="Man" 
            name="gender"
            onClick={HandleGender}>Man</button>
          <button 
            className= {`cursor-pointer ${userDetails["gender"] === 'Woman'? 'text-white bg-primaryColor' :'text-gray-700 bg-gray-100'  }  lg:text-lg md:text-lg sm:text-sm text-ls lg:px-9 md:px-6 px-2 py-2 rounded`} 
            value="Woman" 
            name="gender"
            onClick={HandleGender}>Woman</button>
        </div>
        } col="1"/>
        <QstFrame nb="2" title="How old are you ?" name="age" content={<NumericInput unity="years old" default="20" name="age" />} col="1" />
        <QstFrame nb="3" title="How tall are you ?" name="height" content={<NumericInput unity="cm" default="180" name="height" />} col="1"/>
        <QstFrame nb="4" title="How much do you weight ?" name="weight" content={<NumericInput unity="kg" default="70" name="weight" />} col="1"/>
        <QstFrame nb="5" title="Evaluate your daily activity" name="activityLevel" col="2" 
        content={
          <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-2 '>
            <Activity title="Not very active" img={chair} p="Sitting most of the time (e.g. office work)" name="activityLevel" />
            <Activity title="Moderately active" img={stand} p="Standing most of the time (e.g. teacher, cashier)" name="activityLevel" />
            <Activity title="Active" img={walk} p="Walks most of the time (e.g. waiter, salesperson)" name="activityLevel" />
            <Activity title="Very active" img={manual} p="Very physical activity (e.g. worker)" name="activityLevel" />
          </div>
        }
        />
      </div>
      {
        showResult === false ? <Alert /> : false 
      }
      
      <div className='pt-14 pb-20 flex justify-center'>
        <span className='cursor-pointer text-white bg-primaryColor lg:px-20 md:px-20 px-12 text-center py-2 rounded-lg hover:bg-gray-800' onClick={calculate}>calculate calorie intake</span>
      </div>

      <span className='px-40 h-0.5 bg-gray-500'></span>

      <div className={`flex-col pb-10  ${showResult? 'flex': 'hidden'}`}>
        <span className='text-3xl font-medium text-center py-20'>Your personalized result</span>
        <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-x-5 gap-y-5' ref={sectionRef}>
          <Result title="Losing weight" img={lose} desc="Calorie consumption per day" cal={`${calories-550} to ${calories-450}`} info="This level of daily calorie consumption will allow you to lose between 0.5 and 1 kg per week in a healthy and sustainable way." />
          <Result title="Saving weight" img={Save} desc="Calorie consumption per day" cal={`${calories-200} to ${calories}`} info="This level of daily calorie consumption will allow you to stabilize your current weight." />
          <Result title="Gaining weight" img={Gain} desc="Calorie consumption per day" cal={`${calories+250} to ${calories+450}`} info="This level of daily calorie consumption will allow you to gain between 0.5 and 1kg per week." />
        </div>
      </div>
    </div>
  )
}

export default CaloriesCal