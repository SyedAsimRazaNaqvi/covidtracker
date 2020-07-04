import React from 'react';
import GlobalStats from './GlobalStats';
import AllStats from './AllCountryStats';

export default function SectionPanel({inititalScreen}) {

  if (inititalScreen === 0){
      return <GlobalStats />
  }
  else if(inititalScreen === 1){
      return <AllStats />
  }
  else {
      return <GlobalStats />
  }
}
