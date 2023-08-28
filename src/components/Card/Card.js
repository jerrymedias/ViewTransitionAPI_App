import css from "./Card.module.css";

const Card = ({ image, header, description, onClick }) =>{

    return (
        <article className={css.card} onClick={onClick}>
            <div>
                {image && (
                    <figure className={css.thumbnail}>
                        <img src={`${image}`} alt="meow"  style={
                            {
                                height:  '248px',
                                width: "248px"
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
