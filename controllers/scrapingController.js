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
                    for (let i = 0; i < 1; i++) {
                        //console.log($('').html())
                        var a = $.html($('.img')[1])
                        a = a.toString(true)
                        a = a.split('src="')[1]
                        a = a.split('"')[0]
                        a = a.replaceAll('&amp;', '&')
                        resolve(a)
                    }
                } catch (error) {
                    console.log(error)
                    reject(error)
                }
            })
            .catch(function (err) {
                console.log(err)
                reject(err)
            })
    })
}


const getProfile = (url) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: url,
            headers: {}
        })
            .then(function (response) {
                if (response.status != 200) reject(response.status)
                try {
                    const $ = cheerio.load(response.data)
                    for (let i = 0; i < 1; i++) {
                        //console.log($('').html())
                        var a = $.html($('._6x2x')[1])
                        //a = a.toString(true)
                        //a = a.split('src="')[1]
                        //a = a.split('"')[0]
                        //a = a.replaceAll('&amp;', '&')
                        resolve(a)
                    }
                } catch (error) {
                    console.log(error)
                    reject(error)
                }
            })
            .catch(function (err) {
                console.log(err)
                reject(err)
            })
    })
}


module.exports = {
    getPhoto: getPhoto,
    getProfile: getProfile
}
