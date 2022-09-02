import axios from 'axios'
import React, { useState } from 'react'
import { IProduct } from '../model'
import { ErrorMessage } from './ErrorMessage'

const productData: IProduct =  {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating:{
        rate: 42,
        count: 10
    }
}

interface CreateProductProps {
    onCreate: (product:IProduct) => void
}

export const CreateProduct = ({onCreate}: CreateProductProps) => {

    const [value, setValue] = useState('')
    const [error, setError] = useState('')


    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (value.trim().length === 0){
            setError('Plaesa enter valid title')
            return
        }
        
        productData.title = value
        const response = await axios.post<IProduct>("https://fakestoreapi.com/products", productData)

        onCreate(response.data)
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value)
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className='py-2 px-4 border mb-2 w-full'
                placeholder='Enter product title...'
                value={value}
                onChange={changeHandler}
            />
            {error && <ErrorMessage error={error}/>}

            <button type='submit' className='py-2 px-4 bg-yellow-400 border'>Create</button>
        </form>
    )
}
