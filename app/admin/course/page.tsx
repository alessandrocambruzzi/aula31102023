import { sql } from "@vercel/postgres"

export const revalidate =0

export default async function ListCourse(){
    const { rows } = await sql`SELECT * FROM courses`; 
    return (
        <div>
        <h1 className="text-center">Lista de Cursos</h1>

        <table>
            <thead>
                <tr> <td> Título do Curso </td><td> Descrição</td></tr>
            </thead>
            <tbody>
                {
                rows.map((course) => {
                    return (
                    <tr key={course.id}><td>{course.title}</td> <td> {course.description}</td></tr>
                    )
                })
                }
            </tbody>
        </table>

        </div>
    )
}