export default function auth ({ next, store }){
  
    if(store.state.auth.user.role != 'admin'){
        return window.location.href = '/';
    }

    return next()
}