export default function FormPesquisa({handleSubmit,nome,preco,setNome,setPreco}){
    return(
        <>
            <form
            onSubmit={handleSubmit}
            className="flex gap-2 mb-6"
                >
                <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />

                <input
                className="input input-bordered"
                type="number"
                step="0.01"
                placeholder="Preço"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                />

                <button
                type="submit"
                className="btn btn-primary"
                >
                Salvar
                </button>
            </form>
        </>
    )
}