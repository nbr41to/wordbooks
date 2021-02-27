import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components';

export type ConfirmDialogProps = {
  open: boolean
  close: () => void
  message: string
  action?: () => void
  title?: string
  confirm?: boolean
}

export const ConfimeDialog: React.FC<ConfirmDialogProps> = ({
  open,
  close,
  action,
  message,
  title,
  confirm = false
}) => {
  return (
    <StyledDialog
      open={open}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {title && <DialogTitle id="alert-dialog-title">{'Use Google\'s location service?'}</DialogTitle>}
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {
          { action && action(); }
          close();
        }} color="primary" autoFocus>
          ＯＫ
        </Button>
        {confirm && <Button onClick={close} color="primary">
          キャンセル
        </Button>}
      </DialogActions>
    </StyledDialog>
  );
};

const StyledDialog = styled(Dialog)`
  .MuiPaper-root{
    min-width:200px;
    align-items: center;
  }
`;
