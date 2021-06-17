import React, {useState} from 'react';
import styles from './counter.module.css';
import Radio from '../common/Radio/Radio';

const Counter = (props) => {

  const countHandler = (e) => {
    if (e.target.value >= 1) {
      props.setCount(Number(e.target.value));
      props.onChange(e.target.value);
      props.setFullPrice(props.fullPrice + Number(props.pizzaPrice) * Number(e.target.value));
    } else {
      props.setCount(1);
      props.onChange(1);
    }
  }

  const addOne = (prevState) => {
    props.setCount(prevState + 1);
    props.onChange(prevState + 1);
  }

  const dellOne = (prevState) => {
    if (prevState > 1) {
      props.setCount(prevState - 1);
      props.onChange(prevState - 1);
    }
  }

  return (
    <div className={props.className}>
      <div className={styles.counterWrapper}>
        <div className={styles.counter}>
          <button className={styles.button} onClick={e => dellOne(props.count)}>
            -
          </button>
          <input
            className={styles.input}
            type="text"
            value={props.count}
            onChange={e => countHandler(e)}/>
          <button className={styles.lastButton} onClick={e => addOne(props.count)}>
            +
          </button>
        </div>
      </div>

    </div>
  );
};

export default Counter;
