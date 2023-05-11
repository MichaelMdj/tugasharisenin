import React, { useState } from 'react'

export default function Name() {
    const [state,setState] = useState('MDJ');
    
    const Change = () => {
        setState('Ndej');
        className = none;
    };

  return (
    <div>Bisa dipanggil "<button className='animate-pulse' onClick={Change}>{state}</button>
    "<span className='text-xs'>-klik</span>
    </div>
  )
}
