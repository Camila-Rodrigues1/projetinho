import React, { useState } from 'react';
import './Login.css'


interface LoginData {
  useremail: string;
  password: string | number;
}

const App = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    useremail: '',
    password: '',
  });
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (loginData.useremail === 'admin' && loginData.password === 'password') {
      setError('');
      alert('Login bem-sucedido!');
    } else {
      setError('Usuário ou senha incorretos.');
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Digite seu email"
          name="useremail"
          value={loginData.useremail}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Entrar</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default App;