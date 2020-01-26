import React from 'react'

import Layout from "../components/layout"

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contacto</h1>
            <p align="center">
                Twitter: <a href="https://twitter.com/johannableu" target="_blank">@johannableu</a>
            </p>
            <p align="center">
                Github: <a href="https://github.com/johannasantos" target="_blank">@johannasantos</a>
            </p>
            <p align="center">
                Instagram: <a href="https://www.instagram.com/jo_bleu" target="_blank">@jo_bleu</a>
            </p>
            <p align="center">
                Facebook: <a href="https://www.facebook.com/jobleu.music/" target="_blank">Jo Bleu</a>
            </p>

            <p>
                Y si queres escuchar mi música en Spotify: <a href="https://open.spotify.com/artist/4fjHDOnQRVHavkRGs0zgvL" target="_blank">Jo Bleu</a>
            </p>

        </Layout>
    )
}

export default ContactPage