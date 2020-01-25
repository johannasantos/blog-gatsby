import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hola!</h1>
            <h2>Soy Jo, QA Analyst, baby dev y música de Buenos Aires.</h2>
            <p>Querés contactarte conmigo? <Link to="/contact">Contacto.</Link></p>
        </Layout>
    )
}

export default IndexPage