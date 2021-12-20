<template>
    <div>
        <div class="mt-10 ">
            <h3 class="text-h4"><span class="font-bold text-blue">Hi {{ $store.state.auth.user.name }},</span> Welcome back 🤗</h3>
          
            <div class="flex flex-wrap my-5">
                <div class="lg:w-1/3 md:w-1/2 sm:w-1/2 w-full mb-4">
                    <div class=" flex items-center justify-between bg-white rounded p-5
                     mr-2">
                       
                        <div class="">
                            <p class="text-h4 font-bold">{{ count.class }}</p>
                            <p class="text-medium my-1 text-gray-grayer">Classes</p>
                           
                        </div>
                        <div class="bg-red opacity-90 flex items-center justify-center rounded-full h-16 w-16">
                            <img src="/img/icon/seminar.svg" alt="seminar" class="w-10 h-10">
                        </div>

                    </div>
                </div>

                <div class="lg:w-1/3 md:w-1/2 sm:w-1/2 w-full mb-4 ">
                    <div class=" flex items-center justify-between bg-white rounded p-5
                     mx-2">
                       
                        <div class="">
                            <p class="text-h4 font-bold">{{ count.student }}</p>
                            <p class="text-medium my-1 text-gray-grayer">Learners</p>
                           
                        </div>
                        <div class="bg-warning opacity-90 flex items-center justify-center rounded-full h-16 w-16">
                            <img src="/img/icon/graduate.svg" alt="seminar" class="w-10 h-10">
                        </div>

                    </div>
                </div>

                <div class="lg:w-1/3 md:w-1/2 sm:w-1/2 w-full mb-4">
                    <div class=" flex items-center justify-between bg-white rounded p-5
                     mx-2">
                       
                        <div class="">
                            <p class="text-h4 font-bold">{{ count.tutor }}</p>
                            <p class="text-medium my-1 text-gray-grayer">Tutors</p>
                           
                        </div>
                        <div class="bg-blue-deep opacity-90 flex items-center justify-center rounded-full h-16 w-16">
                            <img src="/img/icon/tutor.svg" alt="seminar" class="w-10 h-10">
                        </div>

                    </div>
                </div>
                <div class="lg:w-1/3 md:w-1/2 sm:w-1/2 w-full mb-4">
                    <div class=" flex items-center justify-between bg-white rounded p-5
                    mr-2">
                       
                        <div class="">
                            <p class="text-h4 font-bold">{{ count.guardian }}</p>
                            <p class="text-medium my-1 text-gray-grayer">Guardian/Parent</p>
                           
                        </div>
                        <div class="bg-gray-grayer opacity-90 flex items-center justify-center rounded-full h-16 w-16">
                            <img src="/img/icon/team.svg" alt="seminar" class="w-10 h-10">
                        </div>

                    </div>
                </div>
            </div>
            <h3 class="text-large text-blue mt-4">Active Tutors</h3>
            <div class="my-3 bg-white h-64 rounded-md px-4 py-2">
                
                <table class="table w-full">
                    <tr class="border-b border-gray font-semibold">
                        <td class="py-2 px-4 text-medium">Name</td>
                        <td class="py-2 px-4 text-medium">Class</td>
                        <td class="py-2 px-4 text-medium">Guardian</td>
                    </tr>
                    <tr class="border-b border-gray text-gray-grayer">
                        <td class="py-2 px-4 text-medium">Jane Doe</td>
                        <td class="py-2 px-4 text-medium">Pry 2</td>
                        <td class="py-2 px-4 text-medium">Layo</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import { createNamespacedHelpers } from "vuex";
    const { mapActions } = createNamespacedHelpers('admin');


    export default {
        components:{

        },
        data() {
            return {
                count:{}
            }
        },
        computed:{
            
        },
        async mounted(){
            this.userCount();
        },
        methods:{
            ...mapActions(['users']),
            async userCount(){
                try {
                    const res = await this.users();
                    this.count = res.data;
                    console.log(res)
                } catch(e){

                }
            }
        }
    }
</script>