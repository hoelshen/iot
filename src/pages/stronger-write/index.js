import App from './write'
import Vue from 'vue'

const app = new Vue(App)

app.$mount()

export default {
    config: {
        navigationBarBackgroundColor: '#fff',
        navigationBarTextStyle: 'black',
        navigationBarTitleText: 'MYS',
        backgroundColor:"#FAFAFA"
    }
}