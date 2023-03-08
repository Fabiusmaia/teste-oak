function NovoProduto({removeProduct, nome, preco, descricao, venda, index}){
let handleRemove = (e) => {
    e.preventDefault()
    removeProduct(index)
}
return(
    <tr className="text-3xl text-center ">
    <td className="border border-black">
     {nome}
     </td>
     <td className="border border-black">
     R$ {preco}
     </td>
     <td className="border border-black">
     {descricao} 
     </td>
     <td className="border border-black p-4">
     {venda}
    </td>
    <td className="border border-black p-4">
     {index}
    </td>
    <div>
    <input type="button" value="X" onClick={((e) => {handleRemove(e)})}  className="text-6xl ml-6 bg-white text-red-700 my-2 cursor-pointer"/>
    </div>

    </tr>
)
}

export default NovoProduto