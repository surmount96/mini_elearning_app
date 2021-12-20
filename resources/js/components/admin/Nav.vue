<template>
    <div class="">
        <div class="flex flex-wrap relative">
            <aside class="lg:w-2/12 md:w-2/12 lg:flex md:flex flex-col justify-between hidden shadow-lg fixed z-10 bg-white" style="height: 100vh;width:210px">
                <div class="">
                    <div class="border-b border-gray">
                        <img src="/img/logo/logo.jpg" alt="logo" class="w-16 mx-auto h-20">
                    </div>
                    <div class=" mt-16 ml-10">
                        <a href="/admin/dashboard" class="flex items-center text-body-2" :class="{'text-blue font-semibold': '/admin/dashboard' == $route.path}">
                            <i class="ri-dashboard-fill mr-2 ri-fw"></i>
                            Dashboard
                        </a>
                    </div>
                    <div class=" mt-6 ml-10">
                        <a href="/admin/classes" class="flex items-center text-body-2 " :class="{'text-blue font-semibold': '/admin/classes' == $route.path}">
                            <i class="ri-book-open-line mr-2 ri-fw"></i>
                            Classes
                        </a>
                    </div>
                   <div class=" mt-6 ml-10">
                        <a href="/admin/learner" class="flex items-center text-body-2 " :class="{'text-blue font-semibold': '/admin/learner' == $route.path}">
                            <i class="ri-group-line mr-2 ri-fw"></i>
                            Learner
                        </a>
                    </div>
                    <div class=" mt-6 ml-10">
                        <a href="/admin/tutor" class="flex items-center text-body-2 " :class="{'text-blue font-semibold': '/admin/tutor' == $route.path}">
                            <i class="ri-user-shared-line mr-2 ri-fw"></i>
                            Tutor
                        </a>
                    </div>
                    <div class=" mt-6 ml-10">
                        <a href="qrcode" @click.prevent="signOut" class="flex items-center text-body-2 " :class="{'text-blue-base font-semibold': '/qrcode' == $route.path}">
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

            <div class="lg:hidden md:hidden block fixed z-50 w-full bottom-0 bg-white">
                <div class="flex items-center justify-between px-10 text-medium">
                    <a href="/admin/dashboard"  class="flex flex-col items-center py-3 justify-center " :class="{'text-blue border-t border-blue': '/admin/dashboard' == $route.path}">
                        <i class="ri-dashboard-fill mr-2 ri-fw"></i>
                        <span>Dashboard</span>
                    </a>
                    <a href="/admin/classes"  class="flex flex-col items-center py-3 justify-center   "
                    :class="{'text-blue border-t border-blue': '/admin/classes' == $route.path}">
                        <i class="ri-book-open-line mr-2 ri-fw"></i>
                        Classes
                    </a>
                    <a href="/admin/learner"  class="flex flex-col items-center py-3 justify-center "  :class="{'text-blue border-t border-blue': '/admin/learner' == $route.path}">
                        <i class="ri-group-line mr-2 ri-fw"></i>
                            Learner
                    </a>
                    <a href="/admin/tutor"  class="flex flex-col items-center py-3  justify-center" :class="{'text-blue border-t border-blue': '/admin/tutor' == $route.path}">
                        <i class="ri-user-shared-line mr-2 ri-fw"></i>
                            Tutor
                    </a>
                    <a href="/admin/settings" @click.prevent="signOut" class="flex flex-col items-center py-3 justify-center ">
                        <i class="ri-logout-box-line mr-2 ri-fw"></i>
                            Logout
                    </a>
                </div>
            </div>
             
        </div>
    </div>
</template>

<script>
    import { createNamespacedHelpers } from "vuex";
    const { mapActions } = createNamespacedHelpers('auth');

    export default {
        name: "Nav",
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