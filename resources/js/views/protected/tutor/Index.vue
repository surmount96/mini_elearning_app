<template>
    <div>
        <div class="mt-10 ">

            <div class="flex flex-wrap">
                <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full mb-4 px-5">
                    <div class=" flex items-center bg-white rounded p-5
                     ">
                        <div class="bg-blue-base h-10 w-12 flex items-center justify-center text-white shadow rounded">
                            <i class="ri-book-line"></i>
                        </div>
                        <div class="ml-4">
                            <p class="text-medium my-1">Total Classes</p>
                            <p class="text-h4 font-bold">1</p>
                        </div>

                    </div>

                    <div class="bg-gray-200 py-4 px-5">
                        <p class="text-blue text-medium font-bold">View all</p>
                    </div>
                </div>

                <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full mb-4 px-5">
                    <div class=" flex items-center bg-white rounded p-5
                     ">
                        <div class="bg-blue-base h-10 w-12 flex items-center justify-center text-white shadow rounded">
                            <i class="ri-book-line"></i>
                        </div>
                        <div class="ml-4">
                            <p class="text-medium my-1">Total Learners</p>
                            <p class="text-h4 font-bold">8</p>
                        </div>

                    </div>

                    <div class="bg-gray-200 py-4 px-5">
                        <p class="text-blue text-medium font-bold">View all</p>
                    </div>
                </div>

                <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full mb-4 px-5">
                    <div class=" flex items-center bg-white rounded p-5
                     ">
                        <div class="bg-blue-base h-10 w-12 flex items-center justify-center text-white shadow rounded">
                            <i class="ri-book-line"></i>
                        </div>
                        <div class="ml-4">
                            <p class="text-medium my-1">Wallet</p>
                            <p class="text-h4 font-bold">NGN 2,000</p>
                        </div>

                    </div>

                    <div class="bg-gray-200 py-4 px-5">
                        <p class="text-blue text-medium font-bold">View all</p>
                    </div>
                </div>
            </div>

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