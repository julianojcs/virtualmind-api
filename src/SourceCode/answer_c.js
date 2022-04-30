import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
const checkboxes = [0, 1, 2]
const size = checkboxes.length

const Checkbox = ({ index, value, setValue }) => {
  return (
    <div>
      <label htmlFor={`checkbox${index}`}>{`checkbox ${index}`}</label>
      <input
        value={value}
        onChange={setValue}
        name={`checkbox${index}`}
        type='checkbox'
      />
    </div>
  )
}

const BigForm = () => {
  const [checkboxes, setCheckboxes] = useState(Array(size).fill(0))

  const handleChange = (item, index) => {
    setCheckboxes((prev) => {
      return Object.values({
        ...Object.assign({}, prev),
        [index]: Number(!item)
      })
    })
  }

  return (
    <div className='form'>
      <span>Checked boxes: [{checkboxes.map((item) => !!item).join(',')}]</span>
      <div className='checkbox-wrapper'>
        {checkboxes.map((item, index) => {
          return (
            <Checkbox
              key={index}
              index={index}
              value={item}
              setValue={() => handleChange(item, index)}
            />
          )
        })}
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BigForm />
  </React.StrictMode>
)
