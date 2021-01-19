import React, { useState } from 'react';

import Card from '../UI/Card';
import LoadingIndicator from "../UI/LoadingIndicator"
import './IngredientForm.css';

const IngredientForm = React.memo(props => {

  // const inputState = useState({title:'',amount:''})
  // const [inputState,setInputState] = useState({title:'',amount:''}) //array destructuring
  const [enteredTitle,setEnteredTitle] = useState('');
  const [enteredAmount,setEnteredAmount] = useState('');
  console.log('RENDERING INGREDIENT FORM');

  const submitHandler = event => {
    event.preventDefault();
    // ...
    props.onAddIngredient({
      title:enteredTitle,
      amount:enteredAmount
    });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" 
            id="title"
            //  value={inputState[0].title}
            // value={inputState.title}
            value={enteredTitle}
            //  onChange={event => inputState[1]({
            //    title:event.target.value,
            //    amount:inputState[0].amount
            //    })
            //    }
            onChange={event => {
              setEnteredTitle(event.target.value);
            }}
            // onChange={event => { 
            //   const newTitle = event.target.value;
            //   setInputState(prevInputState =>
            //   // inputState[1](prevInputState =>
            //   ({
            //   title:newTitle,
            //   amount:prevInputState.amount
            //   })
            // )
            // }
            //   }
               />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={enteredAmount}
              /* input type="number" id="amount" value={inputState[0].amount} */
              onChange={event => {
                setEnteredAmount(event.target.value)
              }
              //  onChange={event => {
            //    const newAmount = event.target.value;
            //   //  inputState[1](prevInputState => ({
            //     setInputState(prevInputState => ({
            //    amount:newAmount,
            //    title:prevInputState.title
            //    }))
            //     }
                }/>
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading ? <LoadingIndicator/> : null}
            {/* {props.loading && <LoadingIndicator/>} means the same as above line */}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
