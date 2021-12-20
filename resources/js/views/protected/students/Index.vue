<template>
    <div>
        <div class="mt-10 ">
            <div class="">
                <h3 class="text-h4 text-blue font-bold">Guardian Dashboard</h3>
                <p class="text-medium text-blue my-3">Welcome. Here are the things you can do. You can always find them on the sidebar on the left.</p>
                <p></p>
            </div>
            <div class="flex flex-wrap my-4">
                <div class="lg:w-3/12 md:w-3/12 sm:w-1/2 w-full mb-4">
                    <div class="bg-white shadow rounded-md px-4 py-5
                     lg:mr-2 md:mr-2">
                       
                         <div class="mb-4">
                            <p class="text-large my-1 text-blue font-semibold">Classes</p>
                           <p class="text-medium text-gray-grayer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates amet veniam totam laboriosam.</p>
                        </div>
                        <div class="mt-5">
                            <img src="/img/icon/classroom.svg" alt="classroom" class="w-32 ml-auto">
                        </div>
                    </div>
                </div>

                <div class="lg:w-3/12 md:w-3/12 sm:w-1/2 w-full mb-4">
                    <div class="bg-white shadow rounded-md px-4 py-5
                     lg:ml-2 md:ml-2">
                       
                         <div class="mb-4">
                            <p class="text-large my-1 text-blue font-semibold">Learners</p>
                           <p class="text-medium text-gray-grayer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates amet veniam totam laboriosam.</p>
                        </div>
                        <div class="mt-5">
                            <img src="/img/icon/learner.svg" alt="classroom" class="w-32 ml-auto">
                        </div>
                    </div>
                </div>

            </div>
            <full-calendar :events="fcEvents" locale="en"></full-calendar>

        </div>
    </div>
</template>

<script>
    import { createNamespacedHelpers } from "vuex";
    const { mapGetters } = createNamespacedHelpers('auth');
    // import { RepositoryFactory as Repo } from "./../../../repository/RepositoryFactory";
    // const PR = Repo.get('request');

    var demoEvents = [
        {
            title : 'Sunny Out of Office',
            start : '2016-08-25',
            end : '2017-07-27'
        }
    ]
    export default {
        components:{

        },
        data() {
            return {
                fcEvents : demoEvents
            }
        },
        computed:{
            ...mapGetters(['getUser'])
        },
        async mounted(){
        //   console.log(this.$route);
            // const res  = await PR.getBooks();
            // console.log(res)
        },
        methods:{
            hardCopy(){
                //
            }
        }
    }
</script>