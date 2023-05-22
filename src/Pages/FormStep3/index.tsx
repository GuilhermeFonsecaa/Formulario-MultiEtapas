import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import { useForm, FormActions } from '../../Contexts/FormContext'
import Theme from '../../Components/Theme'
import { ChangeEvent, useEffect } from 'react'


const FormStep3 = () => {
    const history = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            history('/');
        }
        else
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
    });

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGitHub,
            payload: e.target.value
        });
    }

    const handleBackStep = () => {
        history('/step2');
    }

    const handleNextStep = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        const isValidEmail = emailRegex.test(state.email);
        const isValidUrl = urlRegex.test(state.github);

        if (state.email !== '' && state.github !== '' && isValidEmail && isValidUrl)
            history('/step4');

        else if (state.email === '' && state.github === '')
            alert("Preencha os campos para prosseguir")

        else if (!isValidEmail) {
            alert("Preencha o campo Email com um formato válido")
        }

        else if (!isValidUrl) {
            alert("Preencha o campo GitHub com o link de seu perfil")
        }
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/4 - {state.name}</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha e-mail e GitHub para conseguirmos entrar em contato</p>

                <hr />
                <label>Qual seu e-mail?
                    <input
                        type='email'
                        autoFocus
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>
                <label>Qual seu GitHub?
                    <input
                        type='url'
                        value={state.github}
                        onChange={handleGitHubChange}
                    />
                </label>
                <button onClick={handleBackStep}>Voltar</button>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>

    )
}

export default FormStep3;