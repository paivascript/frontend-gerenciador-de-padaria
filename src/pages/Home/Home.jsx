import { useEffect,useState } from 'react';  
import api from '#services/api.js';

export default function Home() {
    const [data, setData] = useState();

    useEffect(()=> {
        api.get("/produtos")
        .then((response) => {
            setData(response.data) ;
        })
    }, [])

    if(!data) return null

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