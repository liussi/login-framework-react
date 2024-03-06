import React, { useState } from 'react';
import { createAccessToken, login } from '../../api/authApi';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';
import EmailInput from 'components/InputEmail/InputEmail';
import PasswordInput from 'components/InputPassword/InputPassword';
import Icons from '../../img/sprite.svg';
import Icon from 'components/Icon/Icon';
import Header from 'components/Title/Title';
import { Networks, StyleForm, StyledGit, StyledGoodle, StyledIcon } from './LoginForm.styled';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      if (!showPasswordInput) {
        // await createAccessToken(email);
        setShowPasswordInput(true);
      } else {
        await login(email, password);
        console.log('Login successful'); // Тут можна обробити успішний логін
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.error('Something went wrong', error);
    }
  };

  return (
    <div>
      <Icon iconPath={Icons + '#icon-qencode'} width={178} height={32} />
      <Header title={'Log in to your account'} />
      <Networks>Google</Networks>
      <StyledGoodle>
        <Icon iconPath={Icons + '#icon-google'} width={18} height={18} />
      </StyledGoodle>

      <Networks>Github</Networks>
      <StyledGit>
        <Icon iconPath={Icons + '#icon-git'} width={18} height={18} />
      </StyledGit>
      <StyleForm  onSubmit={handleSubmit}>
        <EmailInput
          value={email}
          onChange={handleEmailChange}
          placeholder="Work email"
        />
        {showPasswordInput && (
          <PasswordInput
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
        )}
        <Link to="/forgot-password">Forgot your password?</Link>
        <Button type="submit" label="Log in to Qencode" />
      </StyleForm>
      <p>Is your company new to Qencode? </p>
      <Link>Sign up</Link>
    </div>
  );
}

export default Login;
