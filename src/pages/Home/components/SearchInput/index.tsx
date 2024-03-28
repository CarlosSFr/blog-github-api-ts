import { useForm } from "react-hook-form"
import { SearchForm } from "./styles"

export function SearchInput(){

    const { register, handleSubmit } = useForm()

    function handleSearch(){

    }

    return (
        <SearchForm action="" onSubmit={handleSubmit(handleSearch)}>
            <input 
            type="text" 
            placeholder="Buscar conteúdo"
            {...register('textSearch')}
            />
        </SearchForm>
    )
}