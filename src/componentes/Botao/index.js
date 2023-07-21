import './Botao.css'

const Botao = (props) => {
    return (<button className='btn-two-box-in-Login' >
        {props.children}
    </button>)
}

export default Botao