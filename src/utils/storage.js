export default {
    key: 'state',

    saveState(state) {
        localStorage.setItem(this.key, JSON.stringify(state))
    },

    getState() {
        try {
            let state = localStorage.getItem(this.key)

            if (!state) {
                return {}
            }

            return JSON.parse(state)
        } catch (errors) {
            return {}
        }
    }
}
