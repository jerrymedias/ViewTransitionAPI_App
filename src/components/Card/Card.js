import css from "./Card.module.css";

const Card = ({ image, header, description, onClick }) =>{

    return (
        <article className={css.card} onClick={onClick}>
            <div>
                {image && (
                    <figure>
                        <img src={`${image}`} className="shimmer" alt="meow"  style={
                            {
                                height:  '248px',
                                width: "100%"
                            }
                        }/>
                    </figure>
                )}
                {(header || description) && (
                    <div className={css['card-content']}>
                        {header && <h2>{header}</h2>}
                        {description && <p className="marginTop-8 bodyRegular">{description}</p>}
                    </div>
                )}
            </div>
        </article>
    )
};

export default Card;
