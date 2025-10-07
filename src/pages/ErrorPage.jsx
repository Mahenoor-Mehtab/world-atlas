import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
   
    
      return (
        <>
             <h2 className='text-2xl bg-amber-500'>
             {error?.data}
             </h2>

         <h1 className='text-2xl '>the page you are looking that does't exist</h1>
       <NavLink to="/">  <button className='text-3xl'>GO BACK </button></NavLink>
        </>);
      }

    

export default ErrorPage


// ❌ YE CRASH KAREGA first render mein
{/* <h2>{error.data}</h2>   */}
// Error: Cannot read property 'data' of undefined


// ✅ YE SAFE HAI
{/* <h2>{error?.data}</h2> */}
// First render: undefined display hoga
// Second render: actual error data display hoga