import React, { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { SCHEMES, WORKOUTS } from '../utils/swoldier';
function Header(props) {
  const { index, title, description } = props;
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-2 justify-center'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  );
}
export const Generator = (props) => {
  const [muscle,setMuscle] = useState();
  const [goals,setGoals] = useState();
  const [poison,setPoison] = useState();
  const [showModal, setShowModal] = useState(false);
  function toggleModal() {
    setShowModal(!showModal);
  }
  return (
    <SectionWrapper 
      header={"generate your workout"} 
      title={['It\'s ', 'Huge', 'o\'clock']}
    >
      <Header 
        index={'01'}
        title={'Pick your poison'} 
        description={'Select the workout you wish to enjoy.'}
      />
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        <button className=''>
        </button>
      </div>
      <Header 
        index={'02'} 
        title={'Lock on targets'} 
        description={"Select the muscles judged for annihilation."} 
      />
      <Header 
        index={'03'} 
        title={'Become Juggernaut'} 
        description={"Select your ultimate objective."} 
      />
    </SectionWrapper>
  );
};