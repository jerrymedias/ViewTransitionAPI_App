import css from "./Card.module.css";

const Card = ({ image, header, description, onClick }) => {

    return (
        <article className={css.card} onClick={onClick}>
            <div>
                {image && (
                    <figure className="shimmer">
                        <img src={`${image}`} alt="meow" style={
                            {
                                height: '248px',
                                width: "100%"
                            }
                        } />
                    </figure>
                )}
                {(header || description) && (
                    <div className={css['card-content']} style={{borderTop: image ? "2px solid #ff7f502e" : "", marginTop: image ? "16px" : ""}}>
                        {header &&
                            (<div className="flex justifyBetween alignCenter">

                                <h2>{header}</h2>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 18V0H0L0 18H18Z" fill="black" fill-opacity="0.01"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5889 8.99947C12.5889 9.25547 12.4909 9.51247 12.2959 9.70647L6.03391 15.9695C5.83891 16.1645 5.52291 16.1645 5.32691 15.9695C5.13191 15.7735 5.13191 15.4575 5.32691 15.2625L11.5889 8.99947L5.32791 2.73747C5.13291 2.54247 5.13291 2.22647 5.32791 2.03047C5.52391 1.83547 5.83991 1.83547 6.03491 2.03047L12.2959 8.29247C12.4909 8.48647 12.5889 8.74347 12.5889 8.99947Z" fill="#FF6F61"/>
                                </svg>


                            </div>
                            )}
                        {description && <p className="marginTop-8 bodyRegular">{description}</p>}
                    </div>
                )}
            </div>
        </article>
    )
};

export default Card;
