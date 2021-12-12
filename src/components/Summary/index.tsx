import React, { useContext } from 'react';
import icomeImg from '../../assets/income.svg'
import outcomImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionContext';
import { Container } from "./styles";


export function Summary() {
  const { transactions } = useContext(TransactionsContext)
  console.log(transactions)
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={icomeImg} alt="Entrada" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saída</p>
          <img src={outcomImg} alt="Saída" />
        </header>
        <strong>- R$500,00</strong>
      </div>

      <div className="highligh-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong> R$500,00</strong>
      </div>

    </Container>
  )
}