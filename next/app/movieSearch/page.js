import Form from "next/form"
export default async function MovieForm(){
    return (
        <Form action="/movies">
            <div style={{ marginBottom: "15px" }}>
            <label htmlFor="idTitleSearchKey">Título</label>            
            <input id="idTitleSearchKey" name="titleSearchKey"/>
            </div>

            <div style={{ marginBottom: "15px" }}>
            <label htmlFor="idType">Tipo</label>            
            <input id="idType" name="type"/>
            </div>

            <div>
            <button type="submit">Pesquisar</button>
            </div>
        </Form>
    )
}