import React from 'react'
import './Form.sass'

export const Form = ({ onChange, submit }) => {


    const onSubmit = (e) => {
        e.preventDefault()

        submit()
    }


    return (
        <form className='form' onSubmit={onSubmit}>

            <h1 className="form__title">Hey, post your record to Ethereum blockchain</h1>

            <div className="form__group">
                <input className='form__input dirty' type="text" onChange={(e) => onChange(e, 'addressTo')}  />
                <label className="form__label">Address to</label>
            </div>

            <div className="form__group">
                <input className='form__input dirty' type="text" onChange={(e) => onChange(e, 'amount')} />
                <label className="form__label">Amount (ETH)</label>
            </div>

            <div className="form__group">
                <input className='form__input dirty' type="text" onChange={(e) => onChange(e, 'keyword')}  />
                <label className="form__label">Keyword(Gif)</label>
            </div>

            <div className="form__group">
                <input className='form__input dirty' type="text" onChange={(e) => onChange(e, 'message')}  />
                <label className="form__label">Enter Message</label>
            </div>

            <div className='form__submit'>
                <input 
                    className='form__input-submit' 
                    type={`submit`} 
                    value={`Send this shit!`} />
            </div>
        </form>
    )
}