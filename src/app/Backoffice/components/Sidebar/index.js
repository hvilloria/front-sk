import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './styles.module.scss';
import { useHistory } from "react-router-dom";

function Sidebar() {
  let history = useHistory();
  const handleClick = ()=>{
    history.push('/admin/products')
  }
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.ul}>
        <li>
          <Button
            className={styles.adminButton}
            size="large"
            onClick={handleClick}
          >Productos</Button>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;
