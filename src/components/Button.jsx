import propTypes from 'prop-types';

const Button = (props) => {
    return(
        <button className='dice' style={{background: props.board.selected && '#59E391'}} onClick={props.selectButton}>
            {props.board.value}
        </button>
    );
}

Button.propTypes = {
    board: propTypes.object,
    selectButton: propTypes.func
}

export default Button