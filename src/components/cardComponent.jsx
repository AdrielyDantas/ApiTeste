import { formatCpfOrCnpj, formatPhone} from "helpersbr-js";

function CardComponent({data}){
    return(
<div>
    Dados Usuários:
{data.map((cl) => {
        return (
          <div>
            nome completo: {cl.nome}
            <br />
            cpf {formatCpfOrCnpj(cl.cpf)}
            <br />
            email: {cl.email}
            <br />
            telefone: {formatPhone(cl.telefone)}
            <br />
            <br />
          </div>
        );
      })}
</div>
    )
}

export default CardComponent