export default function guest ({ next, store }){

    if(store.state.auth.token){
        return window.location.href = '/';
    }

    return next()
}