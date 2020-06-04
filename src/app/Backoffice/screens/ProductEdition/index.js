import React, { useState, useEffect } from 'react';
import { EditableProduct, ProductForm } from '~admcomponents';
import { getCategories } from '~services/backSkService';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import styles from './styles.module.scss';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(theme => ({
  paperContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(30),
      height: theme.spacing(20),
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
  }
}));

const ProductEdition = () => {
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  const handleSubmittedForm = ()=>{
    window.location.reload(false);
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res.data)
    })
  },[]);

  return(
    <>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          {
            categories.map((cat, i) => <Tab key={i} label={cat.name}/>)
          }
        </Tabs>
      </Paper>
      <div className={classes.paperContainer}>
        {
          categories.length === 0 ? null : categories[value].products.map((product) => {
            return product.variants.map((variant) => {
              return(
                  <EditableProduct
                    key={variant.id}
                    product={product}
                    variant={variant}
                    setCategories={setCategories}
                  />
                )
            })
          })
        }
      </div>
      <IconButton className={styles.fixedBottom}>
        <AddCircleIcon
          className={styles.buttonColor}
          fontSize="large"
          onClick={handleOpen}
        />
      </IconButton>
      <Modal
        open={open}
        className={styles.childPosition}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ProductForm categories={categories} handleSubmittedForm={handleSubmittedForm}/>
      </Modal>
    </>
  )
}

export default ProductEdition;