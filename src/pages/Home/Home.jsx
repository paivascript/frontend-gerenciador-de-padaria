import { useState} from 'react';  

export default function Home() {
    const [data, setData] = useState(null);


    function ProdutoCard({ nome, preco }) {
        return (
            <div>
                <h2>{nome}</h2>
                <p>Preço: R${preco}</p>
            </div>
        );
    }
    return(
        <>
            <main>
                <section>
                    {data.map((produto) => (
                        <ProdutoCard
                        key={produto.id}
                        nome={produto.nome}
                        preco={produto.preco}
                        />
                    ))}
                </section>
            </main>
        </>
    )
}