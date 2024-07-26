import React from 'react'
import { SectionWrapper } from './SectionWrapper';
import { Workout } from './Workout';
import { SCHEMES, WORKOUTS } from '../utils/swoldier';
import {useState} from 'react';
function Header(props){
  const {index,title,description} = props;
  return(
    <div className='flex flex-col gap-4'>
      <div className='flex items-centers gap-2 justify-center'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  );
}
export const Generator = (props) => {
  const { muscles, setMuscles, poison, setPoison, goal, setGoal, updateWorkout } = props
    const [showModal, setShowModal] = useState(false)
    // let showModal = false
    function toggleModal() {
        setShowModal(!showModal)
    }
  return (
    <SectionWrapper 
    header = {"generate your workout"} 
    title = {['It\'s ','Huge','o\'clock']}>
      <Header 
      index = {'01'}
      title= {'Pick your poison'} 
      description = {'select the workout you wish to enjoy.'}/>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
      {Object.keys(WORKOUTS).map((type,typeIndex)=>{
        return(
          <button key={typeIndex} className='bg-slate-950 border border-blue-400 py-4 duration-200 hover:border-blue-600 rounded-lg'>
            <p className='capitalize'>
              {type.replaceAll('_'," ")}
            </p>
          </button>
        );
      })}
      </div>
      <Header 
        index={'02'}
        title={'Lock on targets'} 
        description={'Select the muscles judged for anhiliation.'}
      />
      <div className='bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col'>
        <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
          <p>Select muscle groups</p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModal && (
          <div className='bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col'>modals</div>
        )}
      </div>
      <Header 
      index = {'02'}
      title= {'Become Juggernaut'} 
      description = {'Select your ultimate objective'}/>
      <div className='grid grid-cols-3 sm:grid-cols-4 gap-4'>
      {Object.keys(SCHEMES).map((scheme,schemeIndex)=>{
        return(
          <button key={schemeIndex} className='bg-slate-950 border border-blue-400 py-4 duration-200 hover:border-blue-600 rounded-lg'>
            <p className='capitalize'>
              {scheme.replaceAll('_'," ")}
            </p>
          </button>
        );
      })}
      </div>
    </SectionWrapper>
  );
}