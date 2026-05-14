import React from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Popover from 'react-bootstrap/Popover';
import { Stack } from 'react-bootstrap';
const RBOverlays = () => {
  return (
    <div>
      <h2>Tooltip</h2>
      <Stack gap={4} direction='horizontal'>{['top', 'right', 'bottom', 'left'].map((placement) => (
          <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
              <Tooltip id={`tooltip-${placement}`}>
              Tooltip on <strong>{placement}</strong>.
            </Tooltip>
          }
          >
          <Button variant="secondary">Tooltip on {placement}</Button>
        </OverlayTrigger>
      ))}</Stack>
      
      <h2>Popover</h2>
      <Stack gap={3} direction='horizontal'>{['top', 'right', 'bottom', 'left'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
              <Popover.Body>
                <strong>Holy guacamole!</strong> Check this info.
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="secondary">Popover on {placement}</Button>
        </OverlayTrigger>
      ))}</Stack>
      
    </div>
  )
}

export default RBOverlays
