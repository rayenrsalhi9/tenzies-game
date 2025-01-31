import propTypes from 'prop-types'

const RollButton = (props) => {
    return(
        <button 
            className='roll-button' 
            onClick={props.rollDice}
            ref={props.rollButtonRef}
        >
            {props.gameOver ? 'New game' : 'Roll'}
        </button>
    );
}

RollButton.propTypes = {
    rollDice: propTypes.func,
    gameOver: propTypes.bool,
    rollButtonRef: propTypes.object
}

export default RollButton