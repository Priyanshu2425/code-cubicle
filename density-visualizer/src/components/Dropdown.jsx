// Dropdown.js

import React, { useState } from 'react'

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [clicked, setClicked] = useState(false)

  const handleOptionSelect = (option) => {
    setSelectedOption(option.name)
    onSelect(option.id)
    setClicked(false)
  }

  return (
    <div className='relative inline-block text-left'>
      <div>
        <span className='rounded-md shadow-sm'>
          <button
            onClick={() => setClicked((prev) => !prev)}
            type='button'
            className='inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-gray-100 active:text-gray-800 transition ease-in-out duration-150'
            id='options-menu'
            aria-haspopup={clicked}
            aria-expanded={clicked}
          >
            {selectedOption ? selectedOption : 'Select an option'}
            <svg
              className='-mr-1 ml-2 h-5 w-5'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M10.293 14.707a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414L11 12.586V3a1 1 0 10-2 0v9.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </span>
      </div>

      {/* Dropdown menu */}
      {clicked ? (
        <div
          className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='options-menu'
        >
          <div
            className='py-1'
            role='none'
          >
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option)}
                className='block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                role='menuitem'
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Dropdown
