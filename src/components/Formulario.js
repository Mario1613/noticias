import React from 'react';
import PropTypes from 'prop-types';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        {value: 'general ', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnologia'},

    ]
    //custom hooks
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    const buscarCategoria = e =>{
        e.preventDefault();
        guardarCategoria(categoria)
    }


    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarCategoria}
                >
                    <h2 className={styles.heading}>Encuentra Noticias Por Categoria</h2>
                    <SelectNoticias/>
                    <div className="input-field col s12">
                        <input type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}
 
 
export default Formulario;