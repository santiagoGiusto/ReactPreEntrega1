import { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [emailMatchError, setEmailMatchError] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleConfirm = (event) => {
    event.preventDefault();

    if (email !== confirmEmail) {
      setEmailMatchError(true);
      setFormError(false);
      return;
    } else {
      setEmailMatchError(false);
    }

    if (!name || !phone || !email || !confirmEmail) {
      setFormError(true);
      return;
    } else {
      setFormError(false);
    }

    const userData = {
      name,
      phone,
      email,
    };

    onConfirm(userData);
  };

  const handleInputChange = (target, setValue) => {
    // Al cambiar un campo, verifica si hay errores y vuelve a habilitar el botón
    if (formError || emailMatchError) {
      setFormError(false);
      setEmailMatchError(false);
    }
    setValue(target.value);
  };

  return (
    <div className='Container'>
      <form onSubmit={handleConfirm} className='Form'>
        <div className='LabelContainer'>
          <label className='Label'>
            Nombre
            <input
              className='Input'
              type='text'
              value={name}
              onChange={({ target }) => handleInputChange(target, setName)}
            />
          </label>
          <label className='Label'>
            Telefono
            <input
              className='Input'
              type='text'
              value={phone}
              onChange={({ target }) => handleInputChange(target, setPhone)}
            />
          </label>
          <label className='Label'>
            Email
            <input
              className={`Input ${emailMatchError ? 'Error' : ''}`}
              type='text'
              value={email}
              onChange={({ target }) => handleInputChange(target, setEmail)}
            />
          </label>
          <label className='Label'>
            Confirmar Email
            <input
              className={`Input ${emailMatchError ? 'Error' : ''}`}
              type='text'
              value={confirmEmail}
              onChange={({ target }) => handleInputChange(target, setConfirmEmail)}
            />
          </label>
        </div>
        {emailMatchError && (
          <p className='ErrorMessage'>Los correos electrónicos no coinciden.</p>
        )}
        {formError && (
          <p className='ErrorMessage'>Por favor, complete todos los campos correctamente.</p>
        )}
        <div className='Label'>
          <button type='submit' className='Button' disabled={formError || emailMatchError}>
            Crear Orden
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;