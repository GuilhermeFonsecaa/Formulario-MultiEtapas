import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import { useForm, FormActions } from '../../Contexts/FormContext'
import Theme from '../../Components/Theme'
import { useEffect } from 'react'
import { SelectOption } from '../../Components/SelectOption'

const FormStep2 = () => {
    const history = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            history('/');
        }
        else
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
    });

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    const handleBackStep = () => {
        history('/');
    }

    const handleNextStep = () => {
        history('/step3');
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/4 - {state.name}</p>
                <h1>{state.name}, o que melhor descreve você</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

                <hr />
                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />
                <SelectOption
                    title="Sou programador"
                    description="Já programa 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />
                <button onClick={handleBackStep}>Voltar</button>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>

    )
}

export default FormStep2;