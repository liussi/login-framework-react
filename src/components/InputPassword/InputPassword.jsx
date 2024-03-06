import Icon from 'components/Icon/Icon';
import React from 'react';
import Icons from '../../img/sprite.svg';

function PasswordInput({ value, onChange, placeholder, name }) {
  return (
    <div>
      <label htmlFor={name}>Пароль:</label>
      <input
        type="password"
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <button>
        <Icon iconPath={Icons + '#icon-eye'} width={18} height={14} />
      </button>
    </div>
  );
}

export default PasswordInput;
