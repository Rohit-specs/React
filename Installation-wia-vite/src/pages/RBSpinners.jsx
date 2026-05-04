import React, { useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'

const RBSpinners = () => {
  const [loading, setLoading] = useState(false)
  return (
    <div
      >
      <Button 
      onClick={() => setLoading(true)}
      disabled={loading}
        >{loading ? (
        <>
          <Spinner
            animation="border"
            size="sm"
            className="me-2"
          />
          Submitting...
        </>
      ) : (
        "Click to Submit"
      )}</Button>
      <Button variant="danger" onClick={() => setLoading(false)} disabled={!loading}>Cancel</Button>
    </div>
  )
}

export default RBSpinners
