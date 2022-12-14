import React, { useState } from 'react';
import styles from './product.module.css';

const CreateProduct = (props) => {
    const reloadPage = props.reloadPage;

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handlePrice = (e) => {
        setPrice(e.target.value);
    };

    const handleSubmit = () => {
        const url = 'http://localhost:3005/todo';
        const body = {
            name,
            price
        };
        
        const options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(body),
        }
        fetch(url, options)
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            reloadPage();
        });
    }
    const handleSubmitWithWrapper = () => {
        const url = '/todo';
        const body = {
            name,
            price
        };

        apiWrapper(url, 'POST', body)
            .then((data) => {
                setProduct(data);
            });
    }


    return (
        <div className={styles.card}>
            <h3>Create new product</h3>
            <label for="name">
                Name*:
                <input required  minlength="5" type="text" value={name} placeholder='Pataticas' onChange={handleName}/>
            </label><br/>
            <label for="price">
                Price:
                <input type="number" value={price} onChange={handlePrice}/>
            </label><br/>
            <button onClick={handleSubmit}>Save</button>
        </div>
    )
};

export default CreateProduct;