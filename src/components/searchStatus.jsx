import React from 'react'
import PropTypes from 'prop-types'

const SearchStatus = ({ length }) => {
  const renderPhrase = (number) => {
    let personWord = 'человек'
    let partyWord = 'тусанут'
    if (number === 1) {
      personWord = 'человек'
      partyWord = 'тусанет'
    } else if (number === 2 || number === 3 || number === 4) {
      personWord = 'человека'
      partyWord = 'тусанут'
    } else if (number >= 20) {
      const lastNum = number.toString().split('').length - 1
      console.log(lastNum)
      if (+lastNum === 2 || +lastNum === 3 || +lastNum === 4) {
        personWord = 'человека'
        partyWord = 'тусанут'
      }
    }

    return length
      ? number + ' ' + personWord + ' ' + partyWord + ' c тобой сегодня'
      : 'Никто с тобой не тусанет'
  }

  return (
    <>
      <h2>
        <span className={'badge bg-' + (length > 0 ? 'primary' : 'danger')}>
          {renderPhrase(length)}
        </span>
      </h2>
    </>
  )
}

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired,
}

export default SearchStatus
