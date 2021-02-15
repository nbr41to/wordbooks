import Modal from '@material-ui/core/Modal/Modal'
import React from 'react'
import styled from 'styled-components'

export type ModalProps = {
  open: boolean
  close: () => void
}

export const ModalWrapper: React.FC<ModalProps> = ({ open, close, children }) => {
  return (
    <StyledModalWrapper
      open={open}
      onClose={close}
    >
      <StyledModal>{children}</StyledModal>
    </StyledModalWrapper>
  )
}

const StyledModalWrapper = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledModal = styled.div`
  background-color: #fff;
  padding: 24px 32px;
  border-radius: 8px;
`
