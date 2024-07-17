import { useEffect } from 'react';

const useBeforeUnload = (message:boolean) => {
    console.log(message)
    
    
    useEffect(() => {
        if(!message){
            return
        }
      const handleBeforeUnload = (event) => {
        event.preventDefault();
        event.returnValue = message;
        return message;
      };
  
      window.addEventListener('beforeunload', handleBeforeUnload);
  
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }, [message]);



};

export default useBeforeUnload;
