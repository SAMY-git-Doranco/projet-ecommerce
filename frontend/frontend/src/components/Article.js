import React from 'react'
import './Article.css'

const Article = (props) => {
    const { name, description, price, image} = props
    return (

    <div className="Article">
        <img className="image" src={image} alt="chaussure" />
        <div className="meta">
                <h3 className="name">{name}</h3>
                <span  className="description">{description}</span>
                <span className="price">{price}</span>
        </div>

    </div>

    )
}
export default Article