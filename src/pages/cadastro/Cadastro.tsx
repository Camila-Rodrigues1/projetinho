import React, { useState } from 'react';
import './Cadastro.css'
import { useNavigate } from 'react-router-dom';

interface FormData {
    name: string;
    email: string;
    password: string | number;
}

const App = () => {
    const Navigate = useNavigate()
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log('Dados do formulário:', formData);
        Navigate('/login')
        // Aqui você pode adicionar a lógica para enviar os dados do formulário
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <h2>Cadastro</h2>
                <input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default App;