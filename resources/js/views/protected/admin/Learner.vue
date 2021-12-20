<template>
    <div>
        <div class="flex justify-end">
            <a href="/get-started" class="text-medium bg-green text-white rounded py-2 px-5 focus:outline-none">Add Learner</a>
        </div>
        <h3 class="text-center my-3 text-blue-base text-h4" >All Learners</h3>
        <div class="w-2/3 mx-auto">
            <input type="search" placeholder="Search for a user" class="w-full p-3 text-medium rounded">
        </div>  
        <div class="flex flex-wrap lg:mx-16 md:mx-8 my-5">
            <div class="lg:w-1/3 md:w-1/2 sm:w-1/2 w-full mb-4" v-for="student in students" :key="student.id">
                <div class="bg-white mx-5 h-56 border-t-4 border-yellow flex flex-col items-center justify-center cursor-pointer">
                    <div class="h-20 w-20 mx-auto rounded-full bg-gray flex items-center justify-center mb-3">
                        <i class="ri-user-line "></i>
                    </div>
                    <p class="font-semibold">{{ student.name }}</p>
                    <p class="text-small">{{ student.category.name }}</p>
                    <button class="text-white bg-red py-1 px-4 my-3 text-small rounded" @click="deleteLearner(student)">Delete</button>
                </div>
            </div>            
        </div>
    </div>
</template>

<script>
    import { createNamespacedHelpers } from "vuex";
    const { mapActions } = createNamespacedHelpers('admin');

    export default {
        data() {
            return {
                students:{}
            }
        },
        async mounted() {
            this.getStudents();
        },
        methods:{
            ...mapActions(["learner","removeLearner"]),
            async getStudents(){
                try{
                    const res = await this.learner();
                    this.students = res.learner;
                    console.log(res);
                } catch (e){
                    console.log(e.response)
                }
            },
            async deleteLearner(item) {
                this.$confirm('Are you sure to delete this learner?','Warning',{
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                })
                .then(() => {
                    const res = this.removeLearner(item.id);
                    this.getStudents()
                    // console.log(res)
                    console.log(item)
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
            }
        }
    }
</script>