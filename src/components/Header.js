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
  // render() {
  //   const style = {
  //     header: {
  //       background: '#03a9f4'
  //     },
  //     logo: {
  //       color: '#fff',
  //       fontFamily: 'Anton',
  //       textAlign: 'center'
  //     }
  //   };
  //   return (
  //     <header style={style.header}>
  //       <div style={style.logo}>Logo</div>
  //       <input type='text' />
  //     </header>
  //   );
  // }
  render() {
    return (
      <header>
        <div className='logo'>Logo</div>
        <input type='text' />
      </header>
    );
  }
}

export default Header;
