import propTypes from 'prop-types'

const RollButton = (props) => {
    return(
        <button className='roll-button' onClick={props.rollDice}>{props.gameOver ? 'New game' : 'Roll'}</button>
    );
}

RollButton.propTypes = {
    rollDice: propTypes.func,
    gameOver: propTypes.bool
}

export default RollButton