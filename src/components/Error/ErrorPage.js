import React from 'react'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div style={{ marginTop: '100px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '40px', color: '#b80b14', fontWeight: 'bold' }}>
        AUTHENTICATION FAILED
      </h1>
      <h1 style={{ color: '#b80b14' }}>Invalid Username and Password</h1>

      <Link to="/">
        <button
          style={{
            background: '#b80b14',
            borderRadius: '5px',
            color: '#fff',
            padding: '10px',
            border: ' none',
            cursor: 'pointer',
          }}
        >
          Back To Login
        </button>
      </Link>
    </div>
  )
}
