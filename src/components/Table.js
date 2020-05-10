import React from "react";



function Table({children}) {
    
    // function sortName(){
    //     console.log(props);

    // }

    return (
        <table className="table table-striped table-dark">
            {children}
        </table>
    )
}

export default Table;