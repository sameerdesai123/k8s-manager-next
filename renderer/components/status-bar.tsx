import React from 'react'
import electron from 'electron';
import { useState } from 'react';

const StatusBar = () => {
    const [currentNameSpace, setcurrentNameSpace] = useState("");
    const [cluster, setCluster] = useState([]);

    const ipcRenderer = electron.ipcRenderer || false;
    if (ipcRenderer) {
        ipcRenderer.on('current-cluster', (event, arg) => {
        setCluster(arg);
        });
        ipcRenderer.on('current-namespace', (event, arg) => {
        setcurrentNameSpace(arg);
        });

        ipcRenderer.send('ready', '');
    }

  return (
    <div className='grid grid-cols-3 gap-4 text-l w-full shadow-lg'>
        <div className='col-span-2 justify-items-start'>
        <span className='decoration-4 p-2'>Cluster</span>
            <span className='text-blue-600 bg-gray-800'>{cluster}</span>
        </div>
        <div className='col-span-1'>
        <span className='decoration-4 p-2'>Namespace</span>
        <span className='text-blue-600 bg-gray-800'>{currentNameSpace}</span>
        </div>
    </div>
  )
}

export default StatusBar