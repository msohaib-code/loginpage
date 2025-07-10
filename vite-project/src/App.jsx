import React from 'react'
import Loginpage from './screen/Loginpage'
import Signuppage from './screen/signuppage'
const App = () => {
  return (
    <div>
      <Loginpage/>
{/* <Signuppage/> */}
    </div>
  )
}

export default App


// import { useState } from 'react';
// import LoginPage from './screen/Loginpage';
// import SignupPage from './screen/signuppage';

// const App = () => {
//   const [page, setPage] = useState('login'); // 'login' or 'signup'

//   return (
//     <div>
//       {page === 'login' ? (
//         <LoginPage goToSignup={() => setPage('signup')} />
//       ) : (
//         <SignupPage goToLogin={() => setPage('login')} />
//       )}
//     </div>
//   );
// };

// export default App;
