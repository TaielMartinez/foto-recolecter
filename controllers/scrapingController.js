/*
const getPhoto = (user, pass) => {
    return new Promise((resolve, reject) => {

    })
}
*/

const cheerio = require('cheerio')
var axios = require('axios')

const getPhoto = (url) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: url,
            headers: {}
        })
            .then(function (response) {
                try {
                    const $ = cheerio.load(response.data)
                    var a = $.html($('body'))
                    //a = a.toString(true)
                    /*
                    a = a.split('src="')[1]
                    a = a.split('"')[0]
                    a = a.replaceAll('&amp;', '&')
                    */
                    resolve(a)
                } catch (error) {
                    reject(error)
                }
            })
            .catch(function (err) {
                reject(err)
            })
    })
}


const checkProfile = (url) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: url,
            headers: {}
        })
            .then(function (response) {
                try {
                    resolve(response.status)
                } catch (error) {
                    reject(error)
                }
            })
            .catch(function (err) {
                try {
                    if (err.response.status === 404) resolve(404)
                    else reject(err)
                } catch (error) {
                    reject(error)
                }
            })
    })
}


module.exports = {
    getPhoto,
    checkProfile
}
