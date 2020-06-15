import React from 'react';
import styles from './styles.module.scss';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import { createProduct } from '~services/backSkService';
import { useHistory } from "react-router-dom";

function ProductForm({categories, handleSubmittedForm}) {
  let history = useHistory();
  const formik = useFormik({
    initialValues: {
      category_id: '',
      name: '',
      status: 'active',
      variants_attributes: [
        {
          price: 0,
          name: '',
          base: true,
          description: ''
        },
        {
          price: 0,
          name: '',
          base: true,
          description: ''
        },
        {
          price: 0,
          name: '',
          base: true,
          description: ''
        },
        {
          price: 0,
          name: '',
          base: true,
          description: ''
        },
        {
          price: 0,
          name: '',
          base: true,
          description: ''
        }
      ]
    },
    onSubmit: values => {
      createProduct(values).then(()=>{
        handleSubmittedForm();
      }).catch((err)=>{
        if (err.response.status === 401) {
          alert('inicia sesión para completar esta acción');
          history.push('/login');
        } else {
          alert('oops, ocurrio un error');
        }
      })
    },
  });
  return(
    <div className={styles.formBox}>
      <form onSubmit={formik.handleSubmit}>
        <FormControl fullWidth className={styles.marginBottom}>
          <InputLabel>Categoria</InputLabel>
          <Select
            name="category_id"
            onChange={formik.handleChange}
          >
            {categories.map((category)=>{
              return(
                <MenuItem value={category.id}>{category.name}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
        <TextField
          label="Nombre de Producto"
          fullWidth
          name='name'
          onChange={formik.handleChange}
          className={styles.textField}
        />
        <FormControl fullWidth className={styles.marginBottom}>
          <InputLabel>Estado</InputLabel>
          <Select
            name="status"
            onChange={formik.handleChange}
            value={formik.values.status}
          >
            <MenuItem value='active'>Activo</MenuItem>
            <MenuItem value='inactive'>Inactivo</MenuItem>
          </Select>
        </FormControl>
        <div className={styles.variantTitle}>
          <span>Variantes del producto</span>
          <hr></hr>
        </div>
        <TextField
          label="Nombre de la Variante"
          name='variants_attributes[0].name'
          fullWidth
          onChange={formik.handleChange}
          className={styles.textField}
          disabled={typeof(formik.values.variants_attributes[0].base) === 'string' ? formik.values.variants_attributes[0].base === "true" : true}
        />
        <TextField
          label="Precio"
          name='variants_attributes[0].price'
          onChange={formik.handleChange}
          className={styles.textField}
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          placeholder="Descripción"
          fullWidth
          margin="normal"
          onChange={formik.handleChange}
          name='variants_attributes[0].description'
          className={styles.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl component="fieldset" fullWidth className={styles.marginBottom}>
          <RadioGroup defaultValue='true' aria-label="gender" name="customized-radios" className={styles.flexColumn}>
            <FormControlLabel value='true' control={<Radio color="default" name='variants_attributes[0].base' onChange={formik.handleChange}/>} label="Base" />
            <FormControlLabel value='false' control={<Radio color="default" name='variants_attributes[0].base' onChange={formik.handleChange}/>} label="Variación"/>
          </RadioGroup>
        </FormControl>
        <TextField
          label="Nombre de la Variante"
          name='variants_attributes[1].name'
          fullWidth
          onChange={formik.handleChange}
          className={styles.textField}
          disabled={typeof(formik.values.variants_attributes[1].base) === 'string' ? formik.values.variants_attributes[1].base === "true" : true}
        />
        <TextField
          label="Precio"
          name='variants_attributes[1].price'
          onChange={formik.handleChange}
          className={styles.textField}
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          placeholder="Descripción"
          fullWidth
          margin="normal"
          onChange={formik.handleChange}
          name='variants_attributes[1].description'
          className={styles.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl component="fieldset" fullWidth className={styles.marginBottom}>
          <RadioGroup defaultValue='true' aria-label="gender" name="customized-radios" className={styles.flexColumn}>
            <FormControlLabel value='true' control={<Radio color="default" name='variants_attributes[1].base' onChange={formik.handleChange}/>} label="Base" />
            <FormControlLabel value='false' control={<Radio color="default" name='variants_attributes[1].base' onChange={formik.handleChange}/>} label="Variación"/>
          </RadioGroup>
        </FormControl>
        <TextField
          label="Nombre de la Variante"
          name='variants_attributes[2].name'
          fullWidth
          onChange={formik.handleChange}
          className={styles.textField}
          disabled={typeof(formik.values.variants_attributes[2].base) === 'string' ? formik.values.variants_attributes[2].base === "true" : true}
        />
        <TextField
          label="Precio"
          name='variants_attributes[2].price'
          onChange={formik.handleChange}
          className={styles.textField}
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          placeholder="Descripción"
          fullWidth
          margin="normal"
          onChange={formik.handleChange}
          name='variants_attributes[2].description'
          className={styles.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl component="fieldset" fullWidth className={styles.marginBottom}>
          <RadioGroup defaultValue='true' aria-label="gender" name="customized-radios" className={styles.flexColumn}>
            <FormControlLabel value='true' control={<Radio color="default" name='variants_attributes[2].base' onChange={formik.handleChange}/>} label="Base" />
            <FormControlLabel value='false' control={<Radio color="default" name='variants_attributes[2].base' onChange={formik.handleChange}/>} label="Variación"/>
          </RadioGroup>
        </FormControl>
        <TextField
          label="Nombre de la Variante"
          name='variants_attributes[3].name'
          fullWidth
          onChange={formik.handleChange}
          className={styles.textField}
          disabled={typeof(formik.values.variants_attributes[1].base) === 'string' ? formik.values.variants_attributes[1].base === "true" : true}
        />
        <TextField
          label="Precio"
          name='variants_attributes[3].price'
          onChange={formik.handleChange}
          className={styles.textField}
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          placeholder="Descripción"
          fullWidth
          margin="normal"
          onChange={formik.handleChange}
          name='variants_attributes[3].description'
          className={styles.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl component="fieldset" fullWidth className={styles.marginBottom}>
          <RadioGroup defaultValue='true' aria-label="gender" name="customized-radios" className={styles.flexColumn}>
            <FormControlLabel value='true' control={<Radio color="default" name='variants_attributes[1].base' onChange={formik.handleChange}/>} label="Base" />
            <FormControlLabel value='false' control={<Radio color="default" name='variants_attributes[1].base' onChange={formik.handleChange}/>} label="Variación"/>
          </RadioGroup>
        </FormControl>
        <TextField
          label="Nombre de la Variante"
          name='variants_attributes[4].name'
          fullWidth
          onChange={formik.handleChange}
          className={styles.textField}
          disabled={typeof(formik.values.variants_attributes[1].base) === 'string' ? formik.values.variants_attributes[1].base === "true" : true}
        />
        <TextField
          label="Precio"
          name='variants_attributes[4].price'
          onChange={formik.handleChange}
          className={styles.textField}
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          placeholder="Descripción"
          fullWidth
          margin="normal"
          onChange={formik.handleChange}
          name='variants_attributes[4].description'
          className={styles.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl component="fieldset" fullWidth className={styles.marginBottom}>
          <RadioGroup defaultValue='true' aria-label="gender" name="customized-radios" className={styles.flexColumn}>
            <FormControlLabel value='true' control={<Radio color="default" name='variants_attributes[1].base' onChange={formik.handleChange}/>} label="Base" />
            <FormControlLabel value='false' control={<Radio color="default" name='variants_attributes[1].base' onChange={formik.handleChange}/>} label="Variación"/>
          </RadioGroup>
        </FormControl>

        <Button
          fullWidth
          variant="contained"
          type="submit"
          style={{backgroundColor: '#8e0000', color: '#F5F6F8'}}
        >
          Crear Producto
        </Button>
      </form>
    </div>
  )
}

export default ProductForm;
