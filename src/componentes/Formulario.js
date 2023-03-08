import { useState } from "react"
import Listagem from './Listagem.js'
function Formulario({onAddUser}){
    const [preco, setPreco] = useState(0)
    const [nome, setNome] = useState()
    const [descricao, setDescricao] = useState()
    const [venda, setVenda] = useState()
    let handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            nome,preco,descricao,venda
        }
        onAddUser(data)
    }
return(
    <form  onSubmit={((e) => {handleSubmit(e)})} className="bg-white mt-4 shadow-md px-8 pt-6 pb-8 mb-4 max-w-lg  mx-auto my-0">
        <div className="my-4">
        <label htmlFor="nome" className="text-grey-700">Nome do produto</label>
        <input type="text" required value={nome} onChange={((e) => {setNome(e.target.value)})} className="border text-center border-black border-2 rounded w-full"></input>
        </div>
        <div className="my-4">
        <label htmlFor="preço" className="text-grey-700">Preço</label>
        <input type="number" required value={preco} onChange={((e) => {setPreco(e.target.value)})} min="0" className="border text-center border-black border-2 rounded w-full"></input>
        </div>
        <div className="my-4">
        <label htmlFor="descricao" className="text-grey-700">Descrição do produto</label>
        <input type="text" required value={descricao} onChange={((e) => {setDescricao(e.target.value)})} className="border text-center border-black border-2 rounded w-full"></input>
        </div>
        <div className="flex flex-col my-4">
            <div>
        <label htmlFor="nome" className="text-grey-700 my-4">Disponível para venda?</label><br></br>
        </div>
        <div className="flex justify-center">
        <input type="radio" name="yesOrNo" required  onChange={(() => {setVenda("Sim")})}></input><p className="mx-2">Sim</p>
        <input type="radio" name="yesOrNo" required  onChange={(() => {setVenda("Não")})}></input><p className="mx-2">Não</p>
        </div>
        </div>
        <input type="submit" className="cursor-pointer bg-green-700 w-full rounded-sm text-white h-full"></input>
    </form>
)
}

export default Formulario