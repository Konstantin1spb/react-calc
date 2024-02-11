import styles from './app.module.css';
import { useState } from 'react';

const App = () => {
	const [operand1, setOperand1] = useState('operand1');
	const [operator, setOperator] = useState('operator');
	const [operand2, setOperand2] = useState('operand2');
	const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	return (
		<main className={styles.main}>
			<div className={styles.calc}>
				<div className={styles.calcDisplay}>
					<span>
						{operand1} + {operator} + {operand2}
					</span>
				</div>
				<div className={styles.calcControls}>
					<div className={styles.calcNums}>
						<button>1</button>
						<button>2</button>
						<button>3</button>
						<button>4</button>
						<button>5</button>
						<button>6</button>
						<button>7</button>
						<button>8</button>
						<button>9</button>
						<button>0</button>
					</div>
					<div className={styles.calcOperators}>
						<button>+</button>
						<button>-</button>
						<button>C</button>
						<button>=</button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default App;
