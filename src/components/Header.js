import React from 'react';

// const getYear = () => {
//   const newDate = new Date();
//   return newDate.getFullYear();
// };

const user = {
  firsName: 'Lira',
  lastName: 'Sejdiu',
  age: 31
};

const Header = () => {
  // return <div>The date is {getYear()}</div>;
  return (
    <div>
      <div> {user.firsName} </div>
      <div> {user.lastName} </div>
      <div> {user.age} </div>
    </div>
  );
};

export default Header;
