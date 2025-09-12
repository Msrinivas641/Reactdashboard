import React from 'react'
import '../App.css'
const Search = () => {
  return (
    <div className="Search"><input
            type="text"
            placeholder="Search anything..."
            style={{
              padding: "6px 12px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              width: "220px",

              
            }}
          />
          </div>
  )
}

export default Search