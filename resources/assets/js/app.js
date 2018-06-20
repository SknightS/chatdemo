
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'
import VueSocketio from 'vue-socket.io';

Vue.use(VueChatScroll)

//For Socket

Vue.use(VueSocketio, 'http://localhost:3000');
// Vue.use(VueSocketio, 'http://socketserver.com:1923'); // Automaticly socket connect from url string
// Vue.config.productionTip = false


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('message-component', require('./components/message.vue'));

const app = new Vue({
    el: '#app',
    data:{
        message:'',
        chat :{
            message:[]
        }
    },
    sockets:{
        connect: function(){
            console.log('socket connected')
            console.log(this.$socket.id);
        },
        customEmit: function(val){
            // console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
            console.log(val);
            this.chat.message.push(val);
        },

    },
    methods:{
        send(){
            if(this.message.length !=0){
                // console.log(this.message);
              var msg=  {
                    username: "me",
                    message: this.message
                };
                this.clickButton(msg);
                this.chat.message.push(msg);
                this.message='';
            }

        },
        clickButton(val){
            // $socket is socket.io-client instance
            console.log("i am "+val);
            this.$socket.emit('chat message', val);
        }
    },
});



