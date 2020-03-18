// import React from 'react';

// const getYear = () => {
//   const newDate = new Date();
//   return newDate.getFullYear();
// };
// ! dynamic data
// const user = {
//   firsName: 'Lira',
//   lastName: 'Sejdiu',
//   age: 31
// };

// const Header = () => {
// return <div>The date is {getYear()}</div>;
// ? dynamic data
//   return (
//     <div>
//       <div> {user.firsName} </div>
//       <div> {user.lastName} </div>
//       <div> {user.age} </div>
//     </div>
//   );
// };

// export default Header;

import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <header>
        <div className=''>Logo</div>
        <input type='text' />
      </header>
    );
  }
}

export default Header;
