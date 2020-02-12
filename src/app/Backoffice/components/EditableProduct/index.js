import React, {useState} from 'react';
import { getCategories, updateVariant } from '~services/backSkService';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';

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

  const handleEditButtonClick = () => {
    setDisabledPrice(!disabledPrice);
  };

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
    <Paper elevation={3}>
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
    </Paper>
  )
}

export default EditableProduct;