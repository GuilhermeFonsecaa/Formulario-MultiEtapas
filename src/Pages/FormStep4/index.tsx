import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import { useForm, FormActions } from '../../Contexts/FormContext'
import Theme from '../../Components/Theme'


const FormStep4 = () => {
    const { state, dispatch } = useForm();
    const history = useNavigate();
    

    useEffect(() => {
        if (state.name === '') {
            history('/');
        }

        if (state.email === '' || state.github === '') {
            history('/step3')
        }

        dispatch({
            type: FormActions.setCurrentStep,
            payload: 4
        })
    })

    const handleBackStep = () => {
        history("/step3")
    }

    const handleFormConfirm = () => {
        alert("Cadastro Finalizado")
        history("/")
        dispatch({
            type: FormActions.setName,
            payload: ""
        })
        dispatch({
            type: FormActions.setLevel,
            payload: 0
        })
        dispatch({
            type: FormActions.setEmail,
            payload: ""
        })
        dispatch({
            type: FormActions.setGitHub,
            payload: ""
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 4/4 - {state.name}</p>
                <h1>{state.name}, confirme seus dados</h1>
                <p>Antes de finalizar o cadastro verifique se seus dados estão corretos</p>
                <hr />

                <h1>Seu Nome Completo:</h1> <p>{state.name}</p>
                <h1>Seu Nível:</h1> <p>{state.level === 0 ? "Sou Iniciante 🥳" : "Já programo há 2 anos ou mais 😎"}</p>
                <h1>Seu GitHub:</h1> <p>{state.github}</p>
                <h1>Seu E-mail:</h1> <p>{state.email}</p>
                <button onClick={handleBackStep}>Voltar</button>
                <button type='submit' onClick={handleFormConfirm}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    )
}

export default FormStep4;