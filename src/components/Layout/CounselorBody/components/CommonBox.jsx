
import React from 'react'
import './CommonBox.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


/* options -> height(높이), color(테두리,배경색), data: 내용 및 이미지 데이터 */
const CommonBoxContainer = styled.div`
    width: 100%;
    height: ${(props) => props.height ? props.height : '100px'} ;

    padding: 0.25rem;
    border: 1px solid ${(props) => props.color ? props.color : '#00cc8f'};
    border-radius: 5px;

    background-color:${(props) => props.color ? props.color : '#ffffff'};
    /* box-shadow:0px 0px 20px #BEC2C9; */
`

const CommonBoxLink = styled(Link)`
    display: block;
    width: 100%;
    height: 100%;
`
const CommonBoxTitle = styled.span`
    
`


export const CommonBox = (props) => {
    // const item = {
    //     name: 'detail',
    //     title: '상세 페이지',
    //     url: '/counselor/detail',
    //     img: ''
    // }
    
    const {url, title} = props

    return (
        <CommonBoxContainer>
            <CommonBoxLink to={url}>
                <CommonBoxTitle>
                    {title}
                </CommonBoxTitle>
            </CommonBoxLink>
        </CommonBoxContainer>
        // <div className={`common-box ${item.name}`}>
        //     <Link to={item.url}>
        //         <span>
        //             {item.title}
        //         </span>
        //     </Link>
        // </div>
    )
}
