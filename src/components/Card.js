import React from 'react';

/**
 * Card
 */
const Card = props => {

  const { title,textLimit, description, src, style } = props;
  const displayTitle = `${title.slice(0, textLimit)}${title.length>textLimit && ('...')}`

  /* RENDER */
  return (  
    <div className="card" style={{width: '100%', marginBottom:20, ...style}}>
      <img src={src} height="220" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{displayTitle}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

/* DefaultProps */
Card.defaultProps = { 
  title: 'Card title', 
  textLimit: 30,
  description: 'Some quick example text to build on the card title and make up the bulk of the card', 
  src: 'https://i2.wp.com/unistagram.com/wp-content/uploads/2017/03/%EC%9C%A0%EB%8B%88%EC%8A%A4%ED%83%80%EA%B7%B8%EB%9E%A8-%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4-%EC%84%AC%EB%84%A4%EC%9D%BC.jpg?resize=800%2C445', 
  style: {}
}
 
export default Card;