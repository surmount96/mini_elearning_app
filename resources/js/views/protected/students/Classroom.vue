<template>
    <div>
        <div class="h-20 mb-3 linear flex items-center rounded-md px-4">
            <h3 class="text-h4 text-white font-semibold">Classroom</h3>
        </div>
        <div class="flex justify-between">
            <!-- <p class="text-medium text-blue my-3">Welcome. Here are the things you can do. You can always find them on the sidebar on the left.</p> -->
            <!-- <p></p> -->
            <button class="bg-blue text-white py-2 rounded px-8 text-medium focus:outline-none" @click="drawer = true">Add Learner</button>
        </div>
        
        <div class="flex flex-wrap my-5">
            
            <div class="lg:w-3/12 md:w-3/12 sm:w-1/2 w-full mb-4" @click="startClass" v-for="student in students" :key="student.id">
                <div class="bg-white border-t-4 border-yellow h-56 flex flex-col items-center justify-center cursor-pointer mr-2">
                    <div class="flex items-center justify-between">
                        <div class="h-12 w-12 mx-auto rounded-full bg-gray flex items-center justify-center mb-3">
                            <i class="ri-user-line text-large font-semibold"></i>
                        </div>
                    
                    </div>
                    <p class="font-semibold">{{ student.name }}</p>
                    <p class="text-small">{{ student.category.name }}</p>
                </div>
            </div>
            <el-drawer
                title="I am the title"
                :visible.sync="drawer"
                :with-header="false">
                <div>
                    
                    <div class="mb-4 py-10">
                        <div class="border border-blue p-4 rounded mx-5 h-128 relative">
                            
                            <h3 class="text-medium text-blue-base font-semibold">Tell us about this learner</h3>
                            <p class="text-medium text-gray-darker">Choose Class group and subject for this user</p>
                            <div class="my-4">
                                <label for="" class="text-gray-darker text-medium">Name of Learner</label>
                                <input type="text" v-model="form.name" class="w-full p-2 border border-gray mt-2 text-medium focus:outline-none" placeholder="Learner's Name">
                                
                            </div>
                            <div class="mb-3">
                                <label for="" class="text-gray-darker text-medium">What's your goal for this child?</label>
                                <el-select v-model="form.goal" placeholder="Select goal">
                                    <el-option
                                    v-for="item in goals"
                                    :key="item.id"
                                    :label="item"
                                    :value="item">
                                    </el-option>
                                </el-select>
                                
                            </div>
                            <div class="mb-5">
                                <label for="" class="text-gray-darker text-medium">Class of child</label>
                                <el-select v-model="form.category_id" placeholder="Select">
                                    <el-option
                                    v-for="item in categories"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                                    </el-option>
                                </el-select>
                                
                            </div>
                            <div class="mb-3">
                                <label for="" class="text-gray-darker text-medium">More about the learner?</label>
                                <textarea v-model="form.description" class="w-full p-2 border border-gray mt-2 text-medium focus:outline-none" placeholder="Tell us about the learner">
                                </textarea>
                            </div>

                            <button class="bg-blue text-white py-2 rounded px-8 text-medium focus:outline-none" @click="handleLearner">Add</button>
                        </div>

                        
                    </div>
                    
                            
                </div>
            </el-drawer>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions } = createNamespacedHelpers('auth');
export default {
    data(){
        return {
            students:{},
            drawer:false,
            categories: {},
            form:{
                name:'',
                goal: '',
                description:'',
                category_id: '',
                user_id:''
            },
            goals:[
                'Prepare for school tests and exam',
                'Home assistance and revisions',
                'Improve phonics reading and writing',
                'Build Foundation and confidence',
                'Homeschooling',
                'Special need support'
            ],
        };
    },
    async mounted(){
        this.getStudents();
        this.classData()
    },
    computed:{
        isLearnerComplete(){
            return this.form.name && this.form.goal && this.form.description && this.form.category_id
        },
    },
    methods:{
        ...mapActions(['getStudent','getClass','addLearner']),
        async classData(){
            try {
                const res = await this.getClass();
                this.categories = res.data;
            } catch(e) {
                this.$message.error('Oops, Couldnt get data.')
                console.log(e.response)
            }
        },
        async getStudents(){
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            try {
                const res = await this.getStudent({id: this.$store.state.auth.user.id});
                loading.close();
                this.students = res.student;
                // console.log(res);
            } catch (e) {
                this.$message.error('Oops, Couldnt get data.')
            }
        },
        async handleLearner(){
           
            this.form.user_id = this.$store.state.auth.user.id;
            try {
                const res = await this.addLearner(this.form);
                this.$notify({
                    title: 'Success',
                    message: 'Learner successfully added',
                    type: 'success'
                });
                this.form = {};
                this.drawer = false;
                this.getStudents();
                // console.log(res);
            } catch (e) {
                this.$message.error('Oops, Couldnt get data.')
            }
        },
        startClass(){
            this.$message.warning('Online class has not started')
        },
        handleClose(){

        }
    }
}
</script>

<style scoped>
.linear{
    background-image: linear-gradient(to right, #0E6BE7,#fff);
}
</style>>