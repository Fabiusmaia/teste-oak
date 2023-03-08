import NovoProduto from "./NovoProduto"

function Listagem({dados, removeProduct}){
return(
  <table className="w-1/2 mx-auto my-0 mt-16">
    <tr className="bg-green-200 ">
        <th className="text-3xl border border-black mx-6">Nome do produto</th>
        <th className="text-3xl border border-black  mx-6">Preço do produto</th>
        <th className="text-3xl border border-black  mx-6">Descrição do produto</th>
        <th className="text-3xl border border-black p-4 mx-6">Disponível para venda?</th>
        <th className="text-3xl border border-black p-4 mx-6">Índice</th>


    </tr>
    {dados.map((produto, index) => (
      <NovoProduto 
        index={index}
        nome={produto.nome}
        preco={produto.preco}
        descricao={produto.descricao}
        venda={produto.venda}
        removeProduct={removeProduct}
      />
    ))}
    </table>
)
}
export default Listagem                                                    