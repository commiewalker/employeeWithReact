import React from "react"

function TableHead({children}) {
    return (
        <thead>
            <tr>
                {children}
            </tr>
        </thead>
    )
}

export default TableHead;