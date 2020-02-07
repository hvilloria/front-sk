import React, { Component } from 'react';
import styles from './menuContainer.module.scss';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { getCategories } from '../../../../../services/backSkService';

class DropdownMenu extends Component {
  constructor(){
   super();
   this.state = {
     categories: [],
     categorySelected: {}
   }
   this.handleCategorySelected = this.handleCategorySelected.bind(this);
  }

  handleCategorySelected(categorySelected){
    this.setState({categorySelected})
  }

  componentDidMount(){
    getCategories().then((res)=>{
      this.setState({
        categories: res.data,
        categorySelected: res.data[0]
      })
    });
  }
  
  render(){
    let { categories, categorySelected } = this.state;
    return(
      <div className={styles.menuContainer}>
        <h2 className={styles.menuTitle}>Nuestro Menú</h2>
        <DropdownButton 
          className={styles.dropdownButton}
          id="dropdown-basic-button" 
          title={categorySelected.name || 'Selecciona una categoria'}
        >
          { categories.map((category, i)=>{
            return <Dropdown.Item 
              onClick={()=> this.handleCategorySelected(category)}
              key={i}
            >{category.name}</Dropdown.Item>
          })}
        </DropdownButton>
        <div className={styles.menuItemContainer}>
          { categorySelected.products && categorySelected.products.map((product)=>{
            return (
              product.variants.map((variant) => {
                return(
                  <div key={variant.id} className={styles.itemContainer}>
                    <h2 className={styles.itemName}>{product.name} {variant.name}</h2>
                    <div className={styles.separatorLine}></div>
                    <h2 className={styles.itemPrice}>${variant.price}</h2>
                  </div>
                )
              })
            )
          }) }
        </div>
      </div>
    )
  }
}

export default DropdownMenu;
