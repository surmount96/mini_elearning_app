export default function auth ({ next, store }){
  
    if(store.state.auth.user.role != 'parent'){
        return window.location.href = '/';
    }

    return next()
}