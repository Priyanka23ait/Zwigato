import {useRouteError} from 'react-router-dom';

const Error = () => {
   const errorDetails= useRouteError();
   console.log(errorDetails);
  return (
    <div>
        <h1>Oops!!!</h1>
        <h3>Something went wrong..</h3>
        <h4>{errorDetails.status} : {errorDetails.statusText}</h4>
        <h4>{"Error Message - " + errorDetails.error?.message}</h4>
      
        </div>

  )
}

export default Error