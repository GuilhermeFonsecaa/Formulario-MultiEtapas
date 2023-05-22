import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import { useForm, FormActions } from '../../Contexts/FormContext'
import Theme from '../../Components/Theme'
import { ChangeEvent, useEffect } from 'react'

const FormStep1 = () => {
    const history = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, [dispatch]);

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                type: FormActions.setName,
                payload: e.target.value
            })
    }

    const handleNextStep = () => {
        if (state.name) {
            history('/step2')
        }
        else
            alert("Preencha seu nome completo para prosseguir")
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 1/4 - {state.name}</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>

                <hr />

                <label>Seu nome completo
                    <input
                        type='text'
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>

    )
}

export default FormStep1;