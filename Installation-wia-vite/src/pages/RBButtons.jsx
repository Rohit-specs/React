import React, { useState } from 'react'
import { Pencil } from 'react-bootstrap-icons'
import { Button, Stack, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
const RBButtons = () => {
  const [styles, setStyles] = useState([])
  const handleChange = (value) =>{
    setStyles(value)
  }
  const getStyle = () => {
    return {
      fontWeight: styles.includes("Bold") ? "bold" : "normal",
      fontStyle: styles.includes("italic") ? "italic" : "normal",
      textDecoration: [
        styles.includes("underline") ? "underline" : "",
        styles.includes("strike") ? "line-through" : ""
      ].join(" ").trim()
    }
  }

  return (
    <div>
      <Stack className='ms-4' gap={3}>
        <h2>Button Styles</h2>
        <Stack direction='horizontal' gap={5} className='mt-4'><Button>Normal Button</Button>
          <Button variant="primary" className='icon-link'><Pencil className='text-light' /><span>Edit Record</span></Button>
          <Button variant='outline-primary'>Outline Button</Button>
          <Button disabled>Disabled Button</Button></Stack>
        <hr />
        <h2>Button Types</h2>
        <Stack direction='horizontal' gap={5}>
          <Button as='a' href='#'>Link</Button>
          <Button type='button'>Button</Button>
          <Button type='button' as='input' value="Input" />
          <Button type='submit'>Submit</Button>
          <Button type='reset'>Reset</Button>
        </Stack>
        <hr />
        <h2>Toggle Buttons</h2>
        <Stack gap={5}>
          <Stack direction='horizontal' gap={5}>
            <ToggleButtonGroup
              type="checkbox"
              value={styles}
              onChange={handleChange}>
              <ToggleButton value={"Bold"} variant="outline-primary">B</ToggleButton>
              <ToggleButton value={"italic"} variant="outline-primary">I</ToggleButton>
              <ToggleButton value={"underline"} variant="outline-primary">U</ToggleButton>
              <ToggleButton value={"strike"} variant="outline-primary">S</ToggleButton>
            </ToggleButtonGroup></Stack>
          <p style={getStyle()}>Here, the actions of the above buttons will be reflected</p>
        </Stack>
      </Stack>
    </div>
  )
}

export default RBButtons
