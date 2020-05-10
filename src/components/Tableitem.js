import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function TableItem(props) {

  return (

    props.allEMP.map(item => ( 
      <tbody>
      <tr key={item.email}>        
        <td><img src={item.picture.thumbnail}></img></td>
        <td>{item.name.first} {item.name.last}</td>
        <td>{item.phone}</td>
        <td>{item.email}</td>
        <td>{item.dob.date.substring(0,10)}</td>
      </tr>
      </tbody>
    ))

  );
}

export default TableItem;

