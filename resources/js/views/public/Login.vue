<template>
    <div>
        <div class="lg:flex md:flex flex-col justify-center linear" style="minHeight: 100vh">
            <div class="lg:w-1/3 md:w-1/3 w-full lg:mx-auto md:mx-auto bg-white rounded-md shadow py-10">
                <div class=" px-5 py-2">
                    <div class="">
                        <img src="/img/logo/logo.png" alt="" class="object-cover w-16 mx-auto">
                    </div>
                    <h3>Login</h3>
                </div>
                <div class="px-5 pt-3 pb-6">
                    <div class="mb-5">
                        <label for="" class="text-medium mb-3">Email Address</label>
                        <input type="text" v-model="form.email" placeholder="Email Address" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                    </div>
                    <div class="mb-5">
                        <label for="" class="text-medium mb-3">Password</label>
                        <input type="password" v-model="form.password" placeholder="*******" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                    </div>
                    <div>
                        <button @click="handleLogin" class="bg-blue py-3 px-8 text-white text-medium rounded-md w-full">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers('auth');

export default {
    data(){
        return {
            form: {
                email:'',
                password: ''
            }
        }
    },
    methods:{
        ...mapActions(["signIn"]),
        async handleLogin(){
            try {
                const res  = await this.signIn(this.form);

                if(res.user.role === 'parent'){
                    window.location.href = '/student/dashboard';
                }else if(res.user.role === 'admin'){
                    window.location.href = '/admin/dashboard';
                }else if(res.user.role === 'tutor'){
                    window.location.href = '/tutor/dashboard';
                } else{
                    this.$message.error('Oops, Please check your credentials.');
                }
            }catch (e) {
                this.$message.error(e.response.data.message);
            }

        }
    }
}
</script>