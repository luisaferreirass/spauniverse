import * as events from './events.js'

export class Router {
routes ={}

add(routeName, link){
    this.routes[routeName] = link
}

route(event){
    event = event || window.event
event.preventDefault()

window.history.pushState({},"", event.target.href)

this.handle()
}

handle(){
const {pathname} = window.location
const route = this.routes[pathname] || this.routes[404]

fetch(route).then(data => data.text()).then(html => {
    document.querySelector('#app').innerHTML = html
})

if(pathname === "/"){
events.handleHomePage()

}

else if (pathname === "/universo"){
events.handleUniversePage()
}

else if(pathname === "/exploracao"){
    events.handleExplorrationPage()
}

}

}