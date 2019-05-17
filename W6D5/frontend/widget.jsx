import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tab from './tab';
import Weather from './weather';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
      <Clock />
      <Tab content={[
        {
          id: 0,
          title: "one",
          content: "this is the first"
        },
        {
          id: 1,
          title: "two",
          content: "this is the second"
        },
        {
          id: 2,
          title: "three",
          content: "this is the third"
        }
      ]}/>
      <Weather/>
    </div>, 
    document.getElementById('root')
  );
});