import Modal from '@material-ui/core/Modal/Modal'
import React from 'react'
import styled from 'styled-components'

type ModalProps = {
  open: boolean
  close: () => void
}

export const ModalWrapper: React.FC<ModalProps> = ({ open, close, children }) => {
  return (
    <StyledModalWrapper
      open={open}
      onClose={close}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <>{children}</>
    </StyledModalWrapper>
  )
}

const StyledModalWrapper = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`
