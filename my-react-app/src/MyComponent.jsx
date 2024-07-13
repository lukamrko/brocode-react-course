import {useState} from 'react'

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <input value={name} onChange={handleNameChange}/>

            <p>Quantity: {quantity}</p>
            <input value={quantity} onChange={handleQuantityChange} type="number" />

            <p>Comment: {comment}</p>
            <textarea value={comment} onChange={handleCommentChange} placeholder="Additional instructions"/>
        
            <p>Payment: {payment}</p>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>

            <p>Shipping: {shipping}</p>
            <label>
                <input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleShippingChange} />
                Pick up
            </label>
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
                Delivery
            </label>
        </div>
    );
}

export default MyComponent