import React from 'react';
import Noticia from './Noticias';
import PropTypes from 'prop-types';
import styles from './Formulario.module.css';


const ListadoNoticias = ({noticias}) => {
    return ( 
        <div className={`${styles.container} row`}>
            {noticias.map(noticia=>(
                <Noticia
                key={noticia.url}
                noticia={noticia}
                />

            ))}
        </div>
     );
}
ListadoNoticias.propTypes = {
    noticias: PropTypes.array.isRequired
}
 
export default ListadoNoticias;