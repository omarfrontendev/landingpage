import React, { useState } from 'react'
import styles from './.module.scss'

const Input = ({ id, placeholder, required, checkTheValue, error, type, data, setData, options }) => {

  const [inputBlur, setInputBlur] = useState(false)
  const enteredValueIsValid = checkTheValue && checkTheValue(data[id]);
  const errorInput = !enteredValueIsValid && inputBlur;


  if(type === 'select__box') {
    return (
      <div className={styles.select__box__container}>
        <label htmlFor={id} className={styles.label}>{placeholder}:</label>
        <select
        id={id} 
          defaultValue={options[0]}
          className={styles.select__box}
          onChange={(e) => setData({
            ...data,
            [id]: e.target.value
          })}
          name={id}
          >
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    )
  }

  return (
    <div className={styles.select__box__container}>
      <input 
        id={id}
        placeholder={placeholder}
        type={type}
        value={data[id] || ''}
        onChange={(e) => setData({
          ...data,
          [id]: e.target.value
        })}
        onBlur={() => {
          setInputBlur(true)
        }}
        className={styles.input}
        required={required}
        name={id}
      />
      {/* <p className={styles.error__message}>this filed Can't be empty</p> */}
      {error && errorInput && <p className={styles.error__message}>{error}</p>}
    </div>
  )
}

export default Input