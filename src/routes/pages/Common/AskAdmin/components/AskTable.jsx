import React from 'react'
import './AskTable.css'


export const AskTable = ({
    asks
}) => {
  return (
    <table className='ask-table'>
        <h3>문의 내역</h3>
        <tr className='ask-table-header'>
            <th scope='col'>
               <span>no.</span>
            </th>
            <th scope='col'>
               <span>문의 내용</span>
            </th>
            <th scope='col'>
               <span>문의 날짜</span>
            </th>
        </tr>
        {
            asks.map((ask, idx) => {
                return(
                    <tr className={`aks ${idx}`}>
                        <td>
                            {idx}
                        </td>
                        <td>
                           {ask.content} 
                        </td>
                        <td>
                           {ask.createdAt} 
                        </td>
                    </tr>
                )
            })
        }
    </table>
  )
}
