'use server'

export async function searchMovies(formData){
    const titleSearchKey = formData.get("titleSearchKey")
    const type = formData.get("type")
    if (!titleSearchKey || titleSearchKey=='') return {Search: []}
    try{
        const url = new URL("http://www.omdbapi.com/")
        url.searchParams.append("apikey", "6b8a8a20")
        url.searchParams.append("s", titleSearchKey)
        if (type) url.searchParams.append("type", type)

        const httpRes = await fetch(url)
        const jsonRes = await httpRes.json()
        return jsonRes
    }catch(err){
        return {error: `Erro na requisição ${err}`}
    }
}