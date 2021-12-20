export default function auth ({ next, store }){
  
    if(store.state.auth.user.role != 'tutor'){
        return window.location.href = '/';
    }

    return next()
}