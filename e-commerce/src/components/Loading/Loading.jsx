import React from 'react';
import {BiLoaderAlt} from 'react-icons/bi'
import './Loading.css'

// confirmar se a função chama Loading
function Loading() {
  return ( <BiLoaderAlt className='loading'/>    
   );
}

export default Loading;