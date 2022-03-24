const Notification = ({ message, messageIsError }) => {
    if (message === null) {
      return null
    }

    else if(messageIsError) {
        return (
            <div className='error'>
              {message}
            </div>
        ) 
    }
  
    else{
        return (
            <div className='messages'>
              {message}
            </div>
        )
    } 
    
  };

  export default Notification;