import styles from './app.module.css';
import { useState } from 'react';

const App = () => {
	let [operand1, setOperand1] = useState('0');
	let [operator, setOperator] = useState('');
	let [operand2, setOperand2] = useState('');
	const [isResult, setIsResult] = useState(false);

	const handleNum = (label) => {
		if (operator === '') {
			if (operand1 === '0') {
				setOperand1(label);
			} else {
				setOperand1(operand1 + label);
			}
		} else {
			if (operand2 === '0') {
				setOperand2(label);
			} else {
				setOperand2(operand2 + label);
			}
		}
		setIsResult(false);
	};

	const handlePlus = () => {
		setOperator('+');
		setIsResult(false);
	};

	const handleMinus = () => {
		setOperator('-');
		setIsResult(false);
	};

	const handleClear = () => {
		setOperand1('0');
		setOperator('');
		setOperand2('');
		setIsResult(false);
	};

	const handleEqual = () => {
		setIsResult(true);
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
	};

	const buttons = [
		{ id: '1', label: '1', group: 'nums', handler: handleNum },
		{ id: '2', label: '2', group: 'nums', handler: handleNum },
		{ id: '3', label: '3', group: 'nums', handler: handleNum },
		{ id: '4', label: '4', group: 'nums', handler: handleNum },
		{ id: '5', label: '5', group: 'nums', handler: handleNum },
		{ id: '6', label: '6', group: 'nums', handler: handleNum },
		{ id: '7', label: '7', group: 'nums', handler: handleNum },
		{ id: '8', label: '8', group: 'nums', handler: handleNum },
		{ id: '9', label: '9', group: 'nums', handler: handleNum },
		{ id: '0', label: '0', group: 'nums', handler: handleNum },
		{ id: '+', label: '+', group: 'panel', handler: handlePlus },
		{ id: '-', label: '-', group: 'panel', handler: handleMinus },
		{ id: 'C', label: 'C', group: 'panel', handler: handleClear },
		{ id: '=', label: '=', group: 'panel', handler: handleEqual },
	];
	const output = operand1 + ' ' + operator + ' ' + operand2;
	return (
		<main className={styles.main}>
			<div className={styles.calc}>
				<div
					className={`${styles.calcDisplay} ${isResult ? styles.calcDisplayLight : ''}`}
				>
					<span>{output}</span>
				</div>
				<div className={styles.calcControls}>
					<div className={styles.calcNums}>
						{buttons.map(({ id, label, group, handler }) =>
							group === 'nums' ? (
								<button key={id} onClick={() => handler(label)}>
									{label}
								</button>
							) : null,
						)}
					</div>
					<div className={styles.calcPanel}>
						{buttons.map(({ id, label, group, handler }) =>
							group === 'panel' ? (
								<button key={id} onClick={() => handler()}>
									{label}
								</button>
							) : null,
						)}
					</div>
				</div>
			</div>
		</main>
	);
};

export default App;
