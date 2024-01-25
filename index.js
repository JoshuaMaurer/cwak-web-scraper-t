const PORT = 8001

// import axios, {isCancel, AxiosError} from 'axios'
const axios = require('axios')
// import * as cheerio from 'cheerio'
const cheerio = require('cheerio')
const express = require('express')


const app = express()

const url = `https://www.theguardian.com/uk`

// axios(`https://www.cnn.com`)
// or
axios(url)
    .then(responce => {
        const html = responce.data
        const $ = cheerio.load(html)
        const articles = []

        $('.dcr-omk9hw', html).each(function(){
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))


app.listen(PORT, () => console.log( `Server Running On PORT ${PORT}.` ))