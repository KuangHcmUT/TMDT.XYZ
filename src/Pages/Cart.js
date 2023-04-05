import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

// import '../Styles/Cart.css';

const carts = [
    { id: 1, name: 'Product 1', price: 10.99, quantity: 1 },
    { id: 2, name: 'Product 2', price: 19.99, quantity: 1 },
    { id: 3, name: 'Product 3', price: 7.99, quantity: 1 },
    { id: 4, name: 'Product 4', price: 5.99, quantity: 1 },
];
// save cart data to local storage
localStorage.setItem('cart', JSON.stringify(carts));

function Cart(props) {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [total, setTotal] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [show, setShow] = useState(false);

    useEffect(() => {
        let cart = localStorage.getItem('cart');
        if (cart) {
            setCart(JSON.parse(cart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(cart);
    }, [cart]);

    useEffect(() => {
        let total = 0;
        let quantity = 0;
        cart.forEach((item) => {
            total += item.price * item.quantity;
            quantity += item.quantity;
        });
        setTotal(total.toFixed(2));
        setQuantity(quantity);
        localStorage.setItem('quantity', quantity);
        localStorage.setItem('total', total.toFixed(2));
    }, [cart]);

    const handleRemove = (id) => {
        let newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    };

    const handleIncrease = (id) => {
        let newCart = cart.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCart(newCart);
    };

    const handleDecrease = (id) => {
        let newCart = cart.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCart(newCart);
    };

    const handleCheckout = () => {
        setShow(true);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 style={{ textAlign: 'center' }}>Cart</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleDecrease(item.id)}
                                        >
                                            -
                                        </button>
                                        <span> {item.quantity} </span>
                                        <button
                                            className="btn btn-sm btn-success"
                                            onClick={() => handleIncrease(item.id)}
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td>{(item.price * item.quantity).toFixed(2)}</td>
                                    <td>
                                        <button className="btn btn-sm btn-danger" onClick={() => handleRemove(item.id)}>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Total: {total}</h3>
                            <h3>Quantity: {quantity}</h3>
                        </div>
                        <div className="col-md-6">
                            <button className="btn btn-success" onClick={handleCheckout}>
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Checkout</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Total: {total}</h3>
                    <h3>Quantity: {quantity}</h3>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => setShow(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Cart;
