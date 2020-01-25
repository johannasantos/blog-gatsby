import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
            <h1>Sobre mi</h1>
            <p>Mi nombre es Johanna Santos, me dicen "Jo" por mi nombre artistico "Jo Bleu", hago música en mi tiempo libre y trabajo como QA Analyst hace ya 3 años, desde mediados de 2019 estoy aprendiendo a programar y hasta ahora mi lenguaje favorito es Python. Me encanta ser parte de la comunidad de sistemas y con este blog mi meta es mostrarles mis avances en programación y testing.</p>
            <p><Link to="/contact">Queres saber mas sobre mi? Contactame!</Link></p>
        </Layout>
    )
}

export default AboutPage