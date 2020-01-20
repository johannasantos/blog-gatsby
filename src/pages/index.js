import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hola!</h1>
            <h2>Soy Jo, QA Analyst, dev en progreso y música de Buenos Aires.</h2>
            <p>Queres contactarte conmigo? <Link to="/contact">Contacto.</Link></p>
        </Layout>
    )
}

export default IndexPage