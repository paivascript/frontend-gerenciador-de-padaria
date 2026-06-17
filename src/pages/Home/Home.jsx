import { useEffect, useState } from 'react';  
import api from '#services/api.js';
import ProdutoCard from '#components/ProdutoCard.jsx';
import LoadingComponent from '../../components/Loading';
  
export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        api.get("/produtos")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar dados:", error);
                setData([]);
            });
    }, []);

    if (!data) return ( <LoadingComponent/>);

    return(
        <main className="p-4 max-w-3xl mx-auto">
            <section>
                <ul className="list bg-base-100 rounded-box shadow-md">
                    <li className="p-4 pb-2 text-xs opacity-60 tracking-wide font-bold">
                        Produtos Recentes
                    </li>
                    
                    {data.map((produto) => (
                        <ProdutoCard
                            key={produto.id}
                            nome={produto.nome}
                            preco={produto.preco}
                        />
                    ))}
                    
                </ul>
            </section>
        </main>
    );
}