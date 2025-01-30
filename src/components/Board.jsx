import { useState } from 'react';
import Button from './Button';
import RollButton from './RollButton';
import ReactConfetti from 'react-confetti';
import './Board.css'

const Board = () => {
    const [board, setBoard] = useState(Array(10).fill(null).map((_, index) => ({
        id: index,
        value: Math.floor(Math.random() * 6) + 1,
        selected: false
    })))

    const gameOver = board.every(el => el.value === board[0].value && el.selected)

    const rollDice = () => {
        if (!gameOver) {
            setBoard(prevBoard => prevBoard.map(el => {
                return (
                    el.selected ?
                    el :
                    {...el, value: Math.floor(Math.random() * 6) + 1}
                )
            }));
        } else {
            setBoard(Array(10).fill(null).map((_, index) => ({
                id: index,
                value: Math.floor(Math.random() * 6) + 1,
                selected: false
            })));
        }
    }

    const selectButton = (btnIndex) => {
        !gameOver &&
        setBoard(prevBoard => prevBoard.map((el) => {
            return(
                el.id === btnIndex ? 
                {...el, selected: !el.selected} :
                el
            )
        }))
    }

    return(
        <section className='board'>
            <div className="dice-container">
                {
                    board.map(el => (
                        <Button 
                            key={el.id} 
                            board={el} 
                            selectButton={() => selectButton(el.id)} 
                        />
                    ))
                }
            </div>
            <RollButton rollDice={rollDice} gameOver={gameOver}/>
            {gameOver && <ReactConfetti />}
        </section>
    );
}

export default Board