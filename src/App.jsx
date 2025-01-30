import Header from './components/Header';
import Board from './components/Board';
import './App.css'

const App = () => {
    return(
        <main className="tenzies-container">
            <Header />
            <Board />
        </main>
    );
}

export default App