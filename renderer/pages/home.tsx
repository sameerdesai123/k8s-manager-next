import React from 'react';
import Head from 'next/head';
import { TitleBar, StatusBar, WorkWindow } from "../components";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Kubernetes Manager with Next</title>
      </Head>
      
      <div className="grid grid-rows-6 min-h-screen max-h-screen min-w-screen max-w-screen"> 
        <div className='row-span-1 contents'>
          <div className='header'>
            <TitleBar />
            <StatusBar />
          </div>
        </div>
          
        <WorkWindow rootStyleClasses={"bg-gray-800 box-border border-s shadow-xl flex row-span-4 place-items-center justify-center"}/>

        </div>
    </React.Fragment>
  );
}

export default Home;
