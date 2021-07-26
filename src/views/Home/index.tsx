import React, { useState, useEffect } from 'react';
import { Container } from './style';
import api from '../../services/api';
import { Header } from './header';
import { Placa } from './outdoor';

interface IProduto {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

const Home: React.FC = () => {
  const [data, setData] = useState<IProduto[]>([]);
  const [cart, setCart] = useState<IProduto[]>([]);

  useEffect(() => {
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, [])

  const handleCart = (index: number) => {
    let push: any = [...cart, cart.push(data[index])]
    setCart(push)
    const productStore = JSON.stringify(cart);
    localStorage.setItem('@cart', productStore);
  }

  return (
    <>
      <Header>O melhor de toda Lorência!
        <div className="cart">
          <div className="contador">Carroça: {cart.length}</div>
          <img src="https://i.pinimg.com/originals/21/a0/9a/21a09a922796a76bb9c5f7b7ef8007e4.jpg" width="60" height="46" alt="icon" />
        </div>
      </Header>
      <Placa>
        <div className="logo">
          <img src="https://i.pinimg.com/originals/bf/e1/cb/bfe1cb6e3613ac983d48927f8387642c.jpg" width="90" height="90" alt="brasao" />
        </div>
        <div className="nome">Taberna do Juca</div>
      </Placa>
      <Container>
        <section>
          {data.map((prod, index) => (
            <div className="flex">
              <div className="produto" key={prod.id}>
                <img src={prod.image} className="img" alt="healPotion" width="200" height="auto" />
                <h4>{prod.name}</h4>
                <span>{prod.description}</span>
                <h6>Preço: {prod.price}</h6>
              </div>
              <button onClick={() => handleCart(index)}>Dê-me isto!</button>
            </div>
          ))}
        </section>
      </Container>
    </>
  );
}

export default Home;