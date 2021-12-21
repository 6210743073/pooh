import "./product.css"


const Product = ({img,link}) => {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circlered"></div>
                <div className="p-circleyellow"></div>
                <div className="p-circlegreen"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img" />
            </a>
        </div>

    )
}

export default Product