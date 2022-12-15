import React, {ChangeEvent, useState} from 'react';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { decrement, increment, incrementByAmount } from '../../redux/counter/counter-reducer';
import {incrementAsync, incrementIfOdd} from "../../redux/counter/counter-actions";
import {selectCount} from "../../redux/counter/counter-selectors";
import styles from './counter.module.scss';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;

  const onDecrement = () => dispatch(decrement());
  const onIncrement = () => dispatch(increment());
  const onIncrementIfOdd = () => dispatch(incrementIfOdd(incrementValue));
  const onIncrementAsync = () => dispatch(incrementAsync(incrementValue));
  const onIncrementByAmount = () => dispatch(incrementByAmount(incrementValue));
  const onSetIncrementAmount = (e: ChangeEvent<HTMLInputElement>) => setIncrementAmount(e.target.value);

  return (
    <div>
      <div className={styles.row}>
        <button type="button" className={styles.button} aria-label="Decrement value" onClick={onDecrement}>
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button type="button" className={styles.button} aria-label="Increment value" onClick={onIncrement}>
          +
        </button>
      </div>
      <div className={styles.row}>
        <input className={styles.textbox} aria-label="Set increment amount" value={incrementAmount} onChange={onSetIncrementAmount} />
        <button type="button" className={styles.button} onClick={onIncrementByAmount}>
          Add Amount
        </button>
        <button type="button" className={styles.asyncButton} onClick={onIncrementAsync}>
          Add Async
        </button>
        <button type="button" className={styles.button} onClick={onIncrementIfOdd}>
          Add If Odd
        </button>
      </div>
    </div>
  );
}
