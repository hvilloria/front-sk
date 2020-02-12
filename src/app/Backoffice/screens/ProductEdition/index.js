import React, { useState, useEffect } from 'react';
import { EditableProduct } from '~admcomponents';
import { getCategories } from '~services/backSkService';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';

import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';


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
  const classes = useStyles();

  const handleChange = (_event, newValue) => {
    setValue(newValue);
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
    </>
  )
}

export default ProductEdition;