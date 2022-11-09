import React from 'react'
import styles from './.module.scss'

const Input = ({ id, placeholder, required, type, data, setData, options }) => {

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
        className={styles.input}
        required={required}
      />
      <p className={styles.error__message}>this filed Cant be empty</p>
    </div>
  )
}

export default Input