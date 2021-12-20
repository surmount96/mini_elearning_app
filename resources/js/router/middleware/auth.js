export default function auth ({ next, store }){
  
    if(!store.state.auth.token){
        return window.location.href = '/';
    }

    return next()
}