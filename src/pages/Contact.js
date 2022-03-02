import { useLocation } from 'react-router-dom'

export default function Contact() {
    const queryString = useLocation().search

    const queryParams = new URLSearchParams(queryString)
    const name = queryParams.get("name")
    return (
        <div>
            <h2>Hi {name}, Contact us here...</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque est incidunt quam iusto magni eius blanditiis aliquam quasi sequi. Eveniet vitae blanditiis rerum molestiae necessitatibus similique esse hic laboriosam ipsa.</p>
        </div>
    )
}
