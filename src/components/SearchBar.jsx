import React from 'react'

export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <input
      type="search"
      className="search"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder || 'Search by title or author'}
      aria-label="Search books"
    />
  )
}
