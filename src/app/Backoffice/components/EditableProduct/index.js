import React, {useState} from 'react';
import { getCategories, updateVariant } from '~services/backSkService';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';
import styles from './styles.module.scss';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { deleteProduct } from '../../../../services/backSkService';


const useStyles = makeStyles(theme => ({
  textField: {
    '& > *': {
      margin: theme.spacing(1),
      width: 100,
    },
    '& > div > input': {
      textAlign: 'center',
    }
  },
}));

const EditableProduct = (props) => {
  const { product, variant } = props;
  const [disabledPrice, setDisabledPrice] = useState(true);
  const [variantPrice, setVariantPrice] = useState(props.variant.price);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    handleClickDeleteButton();
    setOpen(false);
  };

  const handleEditButtonClick = () => {
    setDisabledPrice(!disabledPrice);
  };

  const handleClickDeleteButton = () => {
    deleteProduct(product.id).then(()=>{
      window.location.reload(false);
    })
  }

  const handleUpdatePriceClick = (updateProduct) => {
    if (updateProduct){
      updateVariant(variant.id, variantPrice)
        .then(() => {
          getCategories()
            .then((res) => props.setCategories(res.data));
        })
    } else {
      setVariantPrice(variant.price)
    }
    setDisabledPrice(!disabledPrice);
  }

  const classes = useStyles();
  return (
    <>
    <Paper elevation={3}>
      <CancelIcon className={styles.deleteButton} onClick={handleClickOpen}/>
      {product.name} {variant.name}
      <TextField
        disabled={disabledPrice}
        value={variantPrice}
        className={classes.textField}
        onChange={(e) => {setVariantPrice(e.target.value)}}
      />
        {disabledPrice && <EditIcon onClick={handleEditButtonClick}/>}
        {
        !disabledPrice &&
          <div>
            <CheckIcon onClick={()=> {handleUpdatePriceClick(true)}}/>
            <CancelIcon onClick={()=> {handleUpdatePriceClick(false)}}/>
          </div>
      }
            <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Desea eliminar este producto?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Eliminar
          </Button>
          <Button onClick={handleClose} color="danger" autoFocus className={styles.cancelButton}>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </Paper>
    </>
  )
}

export default EditableProduct;