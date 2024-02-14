import React from "react";

export const Table = ({
    headItems,
    bodyItems
}) => {
    return (
        <table className="table-container">
            <thead>
                <tr>
                    <th>순번</th>
                    {
                        headItems &&
                        headItems.map(headItem => (
                            <th>headItem</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    bodyItems.map((bodyItem, idx) => (
                        <tr>
                            <td>{idx + 1}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}