import propTypes from 'prop-types';

const Button = (props) => {
    const styles = {
        background: props.board.selected && '#59E391',
        transform: props.board.selected && 'scale(1.1)'
    }
    return(
        <button 
        className='dice' 
        style={styles} 
        aria-pressed={props.board.selected}
        aria-label={`A die with value ${props.board.value} ${props.board.selected ? 'selected' : 'not selected'}`}
        onClick={props.selectButton}>
            {props.board.value}
        </button>
    );
}

Button.propTypes = {
    board: propTypes.object,
    selectButton: propTypes.func
}

export default Button