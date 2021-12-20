<template>
    <div class="">
        <div class="flex flex-wrap relative">
            <aside class="lg:w-2/12 md:w-2/12 lg:flex md:flex flex-col justify-between hidden shadow-lg fixed z-10 bg-white" style="height: 100vh">
                <div class="">
                    <div class="border-b border-gray">
                        <img src="/img/logo/logo.jpg" alt="logo" class="w-16 mx-auto h-20">
                    </div>
                    <div class=" mt-16 ml-10">
                        <a href="/tutor/dashboard" class="flex items-center text-body-2" :class="{'text-blue-base': '/tutor/dashboard' == $route.path}">
                            <i class="ri-dashboard-fill mr-2 ri-fw"></i>
                            Dashboard
                        </a>
                    </div>
                    <div class=" mt-6 ml-10">
                        <a href="/tutor/classroom" class="flex items-center text-body-2 " :class="{'text-blue-base': '/tutor/classroom' == $route.path}">
                            <i class="ri-wallet-line mr-2 ri-fw"></i>
                            Classroom
                        </a>
                    </div>
                    
                    <div class=" mt-6 ml-10">
                        <a href="qrcode" @click.prevent="signOut" class="flex items-center text-body-2 " :class="{'text-blue-base': '/qrcode' == $route.path}">
                            <i class="ri-logout-box-line mr-2 ri-fw"></i>
                            Logout
                        </a>
                    </div>

                </div>
                <!-- <div class=" mt-6 mb-3 mx-3">
                    <a href="#" @click.prevent="signOut" class="bg-sky-blue py-3 px-4 rounded-full text-white flex items-center justify-center text-body-2 ">
                        <i class="ri-logout-box-line mr-2 ri-fw"></i>
                        Logout
                    </a>
                </div> -->
            </aside>
             
        </div>
    </div>
</template>

<script>
    import { createNamespacedHelpers } from "vuex";
    const { mapActions } = createNamespacedHelpers('auth');

    export default {
        name: "Layout",
        methods: {
            ...mapActions(['logout']),
            async signOut() {
                const res = await this.logout();
                if(res === true){
                    window.location.href = '/';
                }
            }
        }
    }
</script>

<style scoped>

</style>