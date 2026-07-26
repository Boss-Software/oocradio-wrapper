const { create } = require('axios');

class OOCRadio {
    constructor({ version, oocAPIKey }, {
        baseURL = `https://oocradio.com/api/${version}` // Base URL For OOC Radio Api
    } = {}) {
        this.client = create({
            baseURL, headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${oocAPIKey}`
            }
        })
    }
    async nowPlaying() {
        try {
            const { data } = await this.client.get(`/now-playing`)
            return data
        } catch (error) {
            console.log(error.message)
        }
    }

    async history() {
        try {
            const { data } = await this.client.get(`/history`)
            return data
        } catch (error) {
            console.log(error.message)
        }
    }

    async live() {
        try {
            const { data } = await this.client.get(`/live`)
            return data
        } catch (error) {
            console.log(error.message)
        }
    }

    async schedule() {
        try {
            const { data } = await this.client.get(`/schedule`)
            return data
        } catch (error) {
            console.log(error.message)
        }
    }
    
    async presenters() {
        try {
            const { data } = await this.client.get(`/presenters`)
            return data
        } catch (error) {
            console.log(error.message)
        }
    }

    async presenterProfile(id) {
        try {
            const { data } = await this.client.get(`/presenter/${id}`)
            return data
        } catch (error) {
            console.log(error.message)
        }
    }

    async trending() {
        try {
            const { data } = await this.client.get(`/trending`)
            return data
        } catch (error) {
            console.log(error.message)
        }
    }
}

module.exports = OOCRadio;
