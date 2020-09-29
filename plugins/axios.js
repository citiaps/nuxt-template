export default function ({ store, $axios, mapGetters, redirect }) {
    $axios.onRequest(config => {
        console.log('Making request to ' + config.url)
        console.log("url", process.env.BASE_URL_BACKEND)
        console.log("CONFIG", config)

        if (!config.handlerEnabled) {

            store.commit('store/START_LOADING')
        }
    })

    $axios.onResponse(response => {
        console.log('RESPONSE!!!')

        console.log('Request done', response)
        console.log("quantity", response.headers['pagination-count'])

        if (!response.config.handlerEnabled) {
            setTimeout(() => store.commit('store/STOP_LOADING'))
        }


    })

    $axios.onError(error => {

        if (!response.config.handlerEnabled) {
            setTimeout(() => store.commit('store/STOP_LOADING'))
        }
    })
}