import './lie.scss';
const Lie = () => {

    return (
        <div className="lie__wrapper">
            <div className="lie">
                <span className="lie__copy">
                    You are a<nbsp />
                    <span className="lie__tone"> fawning </span>
                    <span className="lie__role">noble </span>
                    who
                    <span className="lie__scene"> wants to buy this whole building</span>
                    .
                </span>
                <div className="lie__actions">
                    <button className="lie__button lie__button--tone">tone</button>
                    <button className="lie__button lie__button--role">role</button>
                    <button className="lie__button lie__button--scene">scene</button>
                    <button className="lie__button">whole</button>
                    <button className="lie__button">filter</button>
                </div>
            </div>
        </div>
    )
}
export default Lie