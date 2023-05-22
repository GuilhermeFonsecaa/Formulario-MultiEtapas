//Context, Reducer, Provider, Hook
import { ReactNode, createContext, useContext, useReducer } from 'react'

type State = {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    github: string;
}

type Action = {
    type: FormActions; //tipo da ação: todas as ações dentro de FormActions
    payload: any;
}

type ContextType = {
    state: State;
    dispatch: (action: Action) => void //função para executar as actions, recebe vazio e como parametro a ação com type Action
}

type FormProviderProps = {
    children: ReactNode
}

const initialData: State = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
}

//Context
const FormContext = createContext<ContextType | undefined>(undefined);

//Reducer
export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGitHub,
}

const formReducer = (state: State, action: Action) => {       //função reducer = (dados atuais, ação a ser executada no estado)

    switch (action.type) {
        case FormActions.setCurrentStep:                     //executa ação de pegar o step atual
            return { ...state, currentStep: action.payload } //recebe os dados atuais pelo state + os dados a serem adicionados no currentStep

        case FormActions.setName:
            return { ...state, name: action.payload }

        case FormActions.setLevel:
            return { ...state, level: action.payload }

        case FormActions.setEmail:
            return { ...state, email: action.payload }

        case FormActions.setGitHub:
            return { ...state, github: action.payload }

        default:
            return state;
    }
}

//Provider
export const FormProvider = ({ children }: FormProviderProps) => {
    //[estado atual, função para executar as ações] = useReducer(função reducer, estadoinicial)
    // retorna um array com dois elementos state e dispatch
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch };  //Objeto utilizado para disponibilizar valores para outros componentes filhos.

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

//Context Hook
export const useForm = () => {
    const context = useContext(FormContext)
    if (context === undefined) {
        throw new Error('useForm necessita ser usado dentro do FormProvider');
    }

    return context;
}