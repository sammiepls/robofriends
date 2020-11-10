import React from 'react';

interface ScrollProps {
  children: JSX.Element
}

const Scroll:React.FC<ScrollProps> = ({children}) => {
 return <div style={{overflowY:'scroll', border:'5px solid black', height: '500px', padding:'10px'}}>
    {children}
  </div>
}

export default Scroll;
