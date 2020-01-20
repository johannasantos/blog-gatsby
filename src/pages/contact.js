import React from 'react'

import Layout from "../components/layout"

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contacto</h1>
            <p>
                Podes comunicarte conmigo en <a href="https://twitter.com/johannableu" target="_blank">@johannableu</a> en Twitter!
            </p>
            <p>
                Podes comunicarte conmigo en mi pagina <a href="https://www.instagram.com/jo_bleu" target="_blank">Jo Bleu</a> en Facebook!
            </p>
            <p>
                Podes comunicarte conmigo siguiendome en <a href="https://www.instagram.com/jo_bleu" target="_blank">@jo_bleu</a> en Instagram!
            </p>
            <p>
                Podes ver mis proyectos en <a href="https://github.com/johannasantos" target="_blank">@johannasantos</a> en Github!
            </p>
            <p>
                Y si queres escuchar mi música there you go: <a href="https://open.spotify.com/artist/4fjHDOnQRVHavkRGs0zgvL" target="_blank">Jo Bleu</a> en Spotify!
            </p>

        </Layout>
    )
}

export default ContactPage