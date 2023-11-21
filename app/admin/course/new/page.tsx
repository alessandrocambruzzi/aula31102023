import { sql } from "@vercel/postgres";
export default async function New(){
    async function saveCourse (formData: FormData){
        "use server"
        const title = formData.get("title") as string;
        const descripton = formData.get("description") as string;
        const url = formData.get ("URL")as string;
        await sql `INSERT INTO courses (title,description,url) VALUES ( ${title},${description},${url} )`
        console.log("Acessou a função")
    }
    return (
        <div>
            <h1 className="text-white text-center text-4xl">Cadastrar Cursos</h1>
            <form>
                <input type="text" name="title" placeholder="Digite o Titulo do Curso"/><br/>
                <input type="text" name="description" placeholder="Digite a descrição do Curso"/><br/>
                <input type="text" name="URL" placeholder="Digite a URL da imagem"/><br/>
                <button formAction={saveCourse} className="text-white">Salvar</button>

            </form>
        </div>
    )
}