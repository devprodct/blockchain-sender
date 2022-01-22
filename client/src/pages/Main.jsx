import React, {useContext} from 'react'

import { TransactionContext } from '../context/TransactionContext'; 
import { Form } from '../components/form';
import { Connect } from '../components/connect';
import './Main.sass';

const App = () => {

  const {connectWallet, accounts, formData, currentAccount, handleChange, sendTransaction, transactions } = useContext(TransactionContext)

  const {ethereum} = window

  const submit = () => {
    const {addressTo, amount, keyword, message} = formData;

    if (!addressTo || !amount || !message) return;

    sendTransaction()
  }

  return (
    <div className="main">
      <div className="main__background">
        <div className='main__container'>
          <div className='grid grid-cols-6 gap-4'>
            <div className='col-span-6'>

              <div className="main__form">
                { 
                  currentAccount ? (
                    <Form onChange={handleChange} submit={submit} />
                  ) : <Connect onClick={connectWallet} />
                }
              </div>

            </div>          
          </div>

          <div className='grid grid-cols-6 gap-4'>
            <div className='col-span-6'>

              <div className="main__form">
                <div className='main__transactions'>
                  {
                    transactions.map( (item, index) => {
                      return(<div key={index}> { item.message } </div>)
                    })
                  }
                </div>
              </div>

            </div>     
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
