function ButtonComponents({titulo, type, clickou}){
    return (
        <div>
          <button onClick={clickou} style={{backgroundColor: type === 'primario' ? 'blue' : type === 'secundario' ? 'green' : 'orange'}}>
        {titulo}
          </button>
        </div>
    )
}


export default ButtonComponents