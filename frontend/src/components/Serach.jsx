import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({  }) => {

  return (
    <Form  inline>
      <Form.Control
        type='text'
        name='q'
        placeholder='Search Product Trends...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      <div style={{alignItems: 'center',paddingTop: "10px",paddingLeft: "300px", }}>
      <Button type='submit' variant='outline-primary' className='p-2'>
        Search
      </Button></div>
    </Form>
  )
}

export default SearchBox