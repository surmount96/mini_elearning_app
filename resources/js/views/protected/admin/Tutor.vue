<template>
    <div>
        <div v-if="!$store.state.admin.showTutor">
            <div class="flex justify-end">
                <a href="/tutor/register" class="text-medium bg-green text-white rounded py-2 px-5 focus:outline-none">Add Tutor</a>
            </div>
            <h3 class="text-center my-3 text-blue-base text-h4">All Tutors</h3>
            <div class="w-2/3 mx-auto">
                <input type="search" placeholder="Search for a user" class="w-full p-3 text-medium rounded">
            </div>
            <div class="flex flex-wrap lg:mx-16 md:mx-8 my-5">
                <div class="lg:w-1/3 md:w-1/2 sm:w-1/2 w-full mb-4" v-for="tutor in tutors" :key="tutor.id">
                    <div class="bg-white mx-5 h-56 border-t-4 border-yellow flex flex-col items-center justify-center cursor-pointer">
                        <div @click="singleTutor(tutor)" class="h-20 w-20 mx-auto rounded-full bg-gray flex items-center justify-center mb-3">
                            <i class="ri-user-line "></i>
                        </div>
                        <p class="font-semibold">{{ tutor.name }}</p>
                        <p class="text-small">{{ tutor.phone_number }}</p>

                        <button class="text-white bg-red py-1 px-4 my-3 text-small rounded" @click="deleteTutor(tutor)">Delete</button>
                    </div>
                </div>            
            </div>
        </div>

        <tutor />
    </div>
</template>

<script>
    import { createNamespacedHelpers } from "vuex";
    const { mapMutations, mapActions } = createNamespacedHelpers('admin');
    export default {
        components:{
            Tutor: () => import('./showTutor')
        },
        data() {
            return {
                tutors:{},
                drawer:false
            }
        },
        async mounted() {
            this.getTutors();
        },
        methods:{
            ...mapMutations(["toggleState"]),
            ...mapActions(["tutor","removeTutor"]),
            async getTutors(){
                try{
                    const res = await this.tutor();
                    this.tutors = res.tutor;
                    console.log(res);
                } catch (e){
                    console.log(e.response)
                }
            },
            async deleteTutor(item) {
                this.$confirm('Are you sure to delete this tutor?','Warning',{
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                })
                .then(() => {
                    const res = this.removeTutor(item.id);
                    this.getTutors()
                    // console.log(res)
                    // console.log(item)
                    this.$message({
                        type: 'success',
                        message: 'Delete completed'
                    });
                })
                .catch( () => {
                    this.$message({
                        type: 'info',
                        message: 'Delete canceled'
                    }); 
                });
            },
            singleTutor(tutor){
                const data = {
                    state: true,
                    tutor
                };
                this.toggleState(data)
            }
        }
    }
</script>>