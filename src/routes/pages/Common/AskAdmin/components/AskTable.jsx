import React from 'react'
import { Link } from 'react-router-dom';
import './AskTable.css'


export const AskTable = ({
    asks,
    onDelete
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
                    <tr className={ask.id} key={ask.id}>
                        <td>
                            {idx}
                        </td>
                        <td>
                           {ask.content} 
                        </td>
                        <td>
                           {ask.createdAt} 
                        </td>
                        <td>
                            <Link to = {`/askadmin/update/${ask.id}`}>
                                <button>수정하기</button>
                            </Link>
                        </td>
                        <td>
                            <button onClick={() => onDelete(ask.id)}>삭제하기</button>
                        </td>
                    </tr>
                )
            })
        }
    </table>
  )
}
