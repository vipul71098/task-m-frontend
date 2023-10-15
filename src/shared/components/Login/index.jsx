

import React, { useState } from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaGoogle, FaGithub } from 'react-icons/fa';
import {  useHistory } from 'react-router-dom';



const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const Illustration = styled.div`
  flex: 1;
  margin-right: 50px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const LoginFormContainer = styled.div`
  flex: 1;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  padding: 30px;
  border-radius: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const SocialButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: gray;
  font-size: 24px;
  transition: color 0.2s;

  &:hover {
    color: blue;
  }
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const history = useHistory();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // handle the login logic here
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        // Assuming your backend sends a JWT token back on a successful login
        const token = data.token;
        console.log('data token', token);
        // Store the token (in a real app, you may want to use httpOnly cookies or other secure methods)
        localStorage.setItem('token', token);

        // Redirect to the dashboard
        history.push('/dashboard');
      } else {
        // Handle any errors from the backend (e.g., wrong credentials)
        alert(data.message || 'Login failed.');
      }
    } catch (error) {
      console.error('ThereThere was an error logging in:', error);
      alert('Login failed.');
    }
  };

  return (
    <Container>
      <Illustration>
       <image src="boy-with-rocket-ligh.png" />
      </Illustration>
      <LoginFormContainer>
        <h1>Sneat</h1>
        <h2>Welcome to Sneat!</h2>
        <p>Please sign-in to your account and start the adventure</p>
        <form onSubmit={handleSubmit}>
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <div>
            <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} /> Remember Me
            <a href="/">Forgot Password?</a>
          </div>
          <Button type="submit">SIGN IN</Button>
          <p>New on our platform? <a href="/">Create an account</a></p>
          <SocialIcons>
            <SocialButton><FaFacebookF /></SocialButton>
            <SocialButton><FaTwitter /></SocialButton>
            <SocialButton><FaGithub /></SocialButton>
            <SocialButton><FaGoogle /></SocialButton>
          </SocialIcons>
        </form>
      </LoginFormContainer>
    </Container>
  );
};

export default LoginForm;
