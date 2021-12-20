<template>
    <div>
        <div class="flex flex-wrap relative">
            <app-nav></app-nav>
            <main class="lg:w-10/12 md:w-9/12 w-full absolute right-0 py-4  px-10" style=" background:#f9f9f9" >
                <nav class="bg-white py-1 border-b border-gray px-2 flex justify-end items-center">
                    
                    <ul class="flex items-center">
                        <li class="mr-5 relative cursor-pointer">
                            <i class="ri-notification-3-line text-large text-gray-darker ri-fw"></i>
                            <span class="bg-red h-3 w-3 rounded-full flex items-center justify-center text-white absolute top-0 right-0" style="font-size: 10px">1</span>
                        </li>
                        <li class="mr-5 cursor-pointer">
                            <div class="h-8 w-8 mx-auto rounded-full bg-gray flex items-center justify-center mb-3">
                                <i class="ri-user-line text-large text-gray-darker"></i>
                            </div>
                        </li>
                    </ul>
                </nav>
                <router-view />
            </main>
        </div>
    </div>

</template>

<script>
export default {
    name:'TutorLayout',
    data() {
        return {

        };
    },
    components:{
        AppNav : () => import("@/components/tutor/Nav.vue")
    },

}
</script>