import React from 'react';
import {NavLink} from 'react-router-dom';

const Page404 = () => {
  return (
    <div>
      Помилка 404. Сторінку не знайдено.
      <br/>
      <NavLink to={'/pizza'}>На головну</NavLink>
    </div>
  );
};

export default Page404;
