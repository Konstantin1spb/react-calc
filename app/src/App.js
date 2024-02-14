import styles from './app.module.css';
import { useState } from 'react';

const App = () => {
	let [operand1, setOperand1] = useState('0');
	let [operator, setOperator] = useState('');
	let [operand2, setOperand2] = useState('');
	const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	const output = operand1 + ' ' + operator + ' ' + operand2;
	return (
		<main className={styles.main}>
			<div className={styles.calc}>
				<div className={styles.calcDisplay}>
					<span>{output}</span>
				</div>
				<div className={styles.calcControls}>
					<div className={styles.calcNums}>
						{NUMS.map((num) => (
							<button
								onClick={
									operator
										? () => {
												if (operand2 === '0') {
													setOperand2(num);
												} else {
													setOperand2(operand2 + num);
												}
											}
										: () => {
												if (operand1 === '0') {
													setOperand1(num);
												} else {
													setOperand1(operand1 + num);
												}
											}
								}
							>
								{num}
							</button>
						))}
					</div>
					<div className={styles.calcOperators}>
						<button onClick={() => setOperator('+')}>+</button>
						<button onClick={() => setOperator('-')}>-</button>
						<button
							onClick={() => {
								setOperand1('0');
								setOperator('');
								setOperand2('');
							}}
						>
							C
						</button>
						<button
							onClick={() => {
								switch (operator) {
									case '+':
										setOperand1(Number(operand1) + Number(operand2));
										setOperand2('');
										setOperator('');
										break;
									case '-':
										setOperand1(Number(operand1) - Number(operand2));
										setOperand2('');
										setOperator('');
										break;
									default:
								}
							}}
						>
							=
						</button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default App;
