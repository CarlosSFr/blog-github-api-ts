import { useForm } from "react-hook-form"
import { SearchForm } from "./styles"
import { useContext } from "react"
import { UserContext } from "../../../../contexts/UserContext"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchInput(){

    const { register, handleSubmit } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })

    const { getIssues } = useContext(UserContext)

    async function handleSearch(data: SearchFormInputs){
        await getIssues(data.query)
    }

    return (
        <SearchForm action="" onSubmit={handleSubmit(handleSearch)}>
            <input 
            type="text" 
            placeholder="Buscar conteúdo"
            {...register('query')}
            />
        </SearchForm>
    )
}