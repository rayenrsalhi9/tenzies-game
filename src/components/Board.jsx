import { useState } from 'react';
import Button from './Button';
import RollButton from './RollButton';
import './Board.css'

const Board = () => {

    const [gameOver, setGameOver] = useState(false);

    const [board, setBoard] = useState(Array(10).fill(null).map((_, index) => ({
        id: index,
        value: Math.floor(Math.random() * 6) + 1,
        selected: false
    })))

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
            setGameOver(false);
            setBoard(Array(10).fill(null).map((_, index) => ({
                id: index,
                value: Math.floor(Math.random() * 6) + 1,
                selected: false
            })));
        }
    }

    const selectButton = (btnIndex) => {
        isGameOver();
        !gameOver &&
        setBoard(prevBoard => prevBoard.map((el) => {
            return(
                el.id === btnIndex ? 
                {...el, selected: true} :
                el
            )
        }))
    }

    const isGameOver = () => {
        board.every(el => el.value === board[0].value) && setGameOver(true);
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
        </section>
    );
}

export default Board