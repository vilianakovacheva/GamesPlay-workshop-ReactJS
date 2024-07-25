import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";

const initialValues = { email: '', password: '', 'confirm-password': '' };

export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async (values) => {
        if (values.password !== values['confirm-password']) {
            setError('Passwords don\'t match!');
            return;
        }

        try {
            await register(values.email, values.password);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    }

    const { changeHandler, submitHandler, values } = useForm(initialValues, registerHandler);

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={changeHandler}
                        placeholder="maria@email.com"
                    />
                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        value={values.password}
                        onChange={changeHandler}
                    />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        value={values['confirm-password']}
                        onChange={changeHandler}
                    />

                    {error && (
                        <p>
                            <span style={{fontSize: '18px', color: 'red'}}>
                                {error}
                            </span>
                        </p>
                    )}

                    <input className="btn submit" type="submit" defaultValue="Register" />
                    <p className="field">
                        <span>
                            If you already have profile click <a href="#">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>

    );
}