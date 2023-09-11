import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import electron from 'electron';
import { useState } from 'react';

function Home() {
  const [currentContext, setCurrentContext] = useState("");
  const [currentNameSpace, setcurrentNameSpace] = useState("");
  const [cluster, setCluster] = useState([]);
  const [user, setUser] = useState([]);

  const ipcRenderer = electron.ipcRenderer || false;
  if (ipcRenderer) {
    ipcRenderer.on('current-context', (event, arg) => {
      setCurrentContext(arg);
    });
    ipcRenderer.on('current-cluster', (event, arg) => {
      setCluster(arg);
    });
    ipcRenderer.on('current-user', (event, arg) => {
      setUser(arg);
    });
    ipcRenderer.on('current-namespace', (event, arg) => {
      setcurrentNameSpace(arg);
    });

    ipcRenderer.send('ready', '');
  }
  
  return (
    <React.Fragment>
      <Head>
        <title>Kubernetes Manager with Next</title>
      </Head>
      <div className='grid grid-col-1 text-2xl w-full text-center'>
        <img className='ml-auto mr-auto' src='/images/logo.png' />
        <span>Context: {currentContext}</span>
        <span>Namespace: {currentNameSpace}</span>
        <span>User: {user}</span>
        <span>Cluster: {cluster}</span>
      </div>
      <div className='mt-1 w-full flex-wrap flex justify-center'>
        <Link href='/next'>
          <a className='btn-blue'>Go to next page</a>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Home;
