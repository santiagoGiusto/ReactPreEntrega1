import { useState } from 'react';
import './CheckoutForm.css'

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [emailMatchError, setEmailMatchError] = useState(false);

  const handleConfirm = (event) => {
    event.preventDefault();

    if (email !== confirmEmail) {
      setEmailMatchError(true);
      return;
    } else {
      setEmailMatchError(false);
    }

    const userData = {
      name,
      phone,
      email,
    };

    onConfirm(userData);
  };

  return (
    <div className='Container'>
      <form onSubmit={handleConfirm} className='Form'>
        <label className='Label'>
          Nombre
          <input
            className='Input'
            type='text'
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label className='Label'>
          Telefono
          <input
            className='Input'
            type='text'
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>
        <label className='Label'>
          Email
          <input
            className={`Input ${emailMatchError ? 'Error' : ''}`}
            type='text'
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <label className='Label'>
          Confirmar Email
          <input
            className={`Input ${emailMatchError ? 'Error' : ''}`}
            type='text'
            value={confirmEmail}
            onChange={({ target }) => setConfirmEmail(target.value)}
          />
        </label>
        {emailMatchError && (
          <p className='ErrorMessage'>Los correos electrónicos no coinciden.</p>
        )}
        <div className='Label'>
          <button type='submit' className='Button'>
            Crear Orden
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;

