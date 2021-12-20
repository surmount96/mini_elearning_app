<template>
    <div>
        <div class="px20 py-3 flex lg:border-none md:border-none border-b-4 border-success">
            <div class="lg:border-b-4 md:border-b-4 lg:border-success md:border-success pb-3 lg:w-2/12 md:w-2/12 lg:px-10 md:px-10 px-3 text-center">
                <a href="/">
                    <img src="/img/logo/logo.png" alt="" class="w-10 h-12 object-cover lg:mr-5 md:mr-5">
                </a>
            </div>
            <div class="lg:flex md:flex hidden w-10/12">
                <div class="flex items-center border-b-4 border-success pb-3  text-center px-8">
                    <div class="border-2 border-success h-10 w-10 flex items-center justify-center text-success rounded-full">
                        1
                    </div>
                    <p class="font-semibold text-success ml-3">About Child</p>
                </div>
                <div class="flex items-center border-b-4 pb-3 text-center px-8" :class="{'border-success text-success' : contactTag, 'border-gray': !contactTag}">
                    <div class="border-2 h-10 w-10 flex items-center justify-center rounded-full" :class="{'border-success' : contactTag, 'border-gray': !contactTag}">
                        2
                    </div>
                    <p class="font-semibold ml-3">Contact Information</p>
                </div>
                <div class="flex items-center border-b-4 pb-3 text-center px-8" :class="{'border-success text-success' : scheduleTag, 'border-gray': !scheduleTag}">
                    <div class="border-2 h-10 w-10 flex items-center justify-center rounded-full" :class="{'border-success' : scheduleTag, 'border-gray': !scheduleTag}">
                        3
                    </div>
                    <p class="font-semibold ml-3">Lesson Schedule</p>
                </div>
                <div class="flex items-center border-b-4 pb-3 text-center px-8" style="width:30%" :class="{'border-success text-success' : completeTag, 'border-gray': !completeTag}">
                    <div class="border-2 h-10 w-10 flex items-center justify-center rounded-full" :class="{'border-success' : completeTag, 'border-gray': !completeTag}">
                        4
                    </div>
                    <p class="font-semibold ml-3">Complete Request</p>
                </div>
            </div>
        </div>

        <!-- Get Started -->
        <div class="lg:w-1/2 md:w-1/2  lg:mx-auto md:mx-auto mx-3" style="height:85vh" v-show="show">
            <div class="text-center text-gray-darker py-20">
                <h1 class="text-h3 font-semibold">Let's get started</h1>
                <p>Welcome to course invite, please choose your preferred platform suitable for your need.</p>
            </div>

            <div class="flex flex-wrap">
                <div class="lg:w-1/2 md:w-1/2 w-full mb-4">
                    <div class="border border-gray-200 flex flex-col items-center justify-center mx-8 h-64 py-4 rounded-md cursor-pointer hover:shadow-lg" @click="showLearner('online')">
                        <div class="w-16 mx-auto">
                            <img src="/img/icon/online-learning.svg" alt="">
                        </div>
                        <p class="my-6 text-body-2">Online Class</p>
                    </div>
                </div>
                <div class="lg:w-1/2 md:w-1/2 w-full mb-4">
                    <div class="border border-gray-200 flex flex-col items-center justify-center mx-8 h-64 py-4 rounded-md cursor-pointer hover:shadow-lg" @click="showLearner('physical')">
                        <div class="w-16 mx-auto">
                            <img src="/img/icon/physical-class.svg" alt="">
                        </div>
                        <p class="my-6 text-body-2">Physical Class</p>
                    </div>
                </div>
            </div>            
        </div>

        <!-- Learner Details -->
        <div class="">
            <div class="lg:px-20 md:px-10 px-4 py-20">
                <div v-show="learner">
                    <div class="text-center" >
                        <h2 class="text-h3 text-blue-base">Tell us about the Learner</h2>
                        <p class="my-2">Choose Learner information to proceed with your request</p>
                    </div>
                    <div class="bg-white lg:w-11/12 md:w-10/12 w-full mx-auto py-5 px-8 rounded-lg shadow">
                        <div class="flex justify-end">
                            <button class="bg-blue-base text-white py-2 rounded px-8 text-medium" @click="moreLearnerFields">Add learners</button>
                        </div>
                        <div class="flex flex-wrap my-5">
                            <div class="lg:w-1/2 md:w-1/2 w-full mb-4" v-for="(i,index) in learnerField" :key="i.id">
                                <div class="border border-blue p-4 rounded mx-5 h-128 relative">
                                    <div class="absolute top-0 right-0 mr-5 mt-2 cursor-pointer" @click="deleteLearner(i)">
                                        <i class="ri-close-line"></i>
                                    </div>
                                    <h3 class="text-medium text-blue-base font-semibold">Tell us about this learner</h3>
                                    <p class="text-medium text-gray-darker">Choose Class group and subject for this user</p>
                                    <div class="my-4">
                                        <label for="" class="text-gray-darker text-medium">Name of Learner</label>
                                        <input type="text" v-model="form.students[index].name" class="w-full p-2 border border-gray mt-2 text-medium focus:outline-none" placeholder="Learner's Name">
                                        
                                    </div>
                                    <div class="mb-3">
                                        <label for="" class="text-gray-darker text-medium">What's your goal for this child?</label>
                                        <el-select v-model="form.students[index].goal" placeholder="Select goal">
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
                                        <el-select v-model="form.students[index].category_id" placeholder="Select">
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
                                        <textarea v-model="form.students[index].description" class="w-full p-2 border border-gray mt-2 text-medium focus:outline-none" placeholder="Tell us about the learner">
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="flex mb-4" :class="{'justify-end' : !show,'justify-between': show}">
                            <!-- <button class="bg-white flex items-center py-3 px-8 text-medium rounded" @click="hideLearner">
                                <i class="ri-arrow-left-s-line mr-2"></i>
                                Back
                            </button> -->
                            <button :disabled="!isLearnerComplete" class="bg-blue flex items-center text-white py-3 px-6 text-medium rounded" @click="showContact">
                                Proceed
                                <i class="ri-arrow-right-s-line ml-2"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- complete request -->
                <div class="bg-white lg:w-12/12 md:w-11/12 w-full mx-auto py-5 px-8 rounded-lg shadow p-5 flex flex-wrap items-center" v-show="completeRequest">
                    <div class="flex items-center pb-12 border-b border-gray mb-3">
                        <div class="bg-gray w-24 h-24 flex items-center justify-center rounded-full">
                            <img src="/img/icon/cracker.svg" class="h-20 w-16" alt="">
                        </div>
                        <div class="ml-4">
                            <h3 class="text-large mb-3 font-semibold text-gray-grayer">Thank you for placing a request!</h3>
                            <p class="text-medium">I'm Joan, a Customer Service Agent at Hesec. I'm here to ensure you get the best experience working with us.</p>
                        </div>
                    </div>
                    <div class="p-5 flex flex-wrap items-center" >
                        <div class="lg:w-2/3 md:w-2/3 w-full mb-4">
                            
                            <div class="pb-8 border-b border-gray mb-5">
                                <h3 class="text-large mb-10 font-semibold ">What Proceed?</h3>
                                <div class="flex flex-wrap justify-between">
                                    <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full mb-3">
                                        <div class="mx-2">
                                            <div class="border border-success h-8 w-8 flex items-center justify-center text-success rounded-full">
                                                1
                                            </div>
                                            <div class="my-2">
                                                <h3 class="text-body-2 mb-3 font-semibold ">Call from me</h3>
                                                <p class="text-medium">I'll review your request and give you a call for better understanding of your needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full mb-3">
                                        <div class="mx-2">
                                            <div class="border border-success h-8 w-8 flex items-center justify-center text-success rounded-full">
                                                2
                                            </div>
                                            <div class="my-2">
                                                <h3 class="text-body-2 mb-3 font-semibold ">Get a list of Tutors</h3>
                                                <p class="text-medium">I'll review your request and give you a call for better understanding of your needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full mb-3">
                                        <div class="mx-2">
                                            <div class="border border-success h-8 w-8 flex items-center justify-center text-success rounded-full">
                                                3
                                            </div>
                                            <div class="my-2">
                                                <h3 class="text-body-2 mb-3 font-semibold ">Pay and Begin Lessons</h3>
                                                <p class="text-medium">I'll review your request and give you a call for better understanding of your needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                            <div class="pb-8 border-b border-gray">
                                <h3 class="text-large mb-5 font-semibold ">Have Questions?Feel free to reach out to me</h3>
                                <div class="flex items-center">
                                    <p class="flex items-center mr-3 text-medium">
                                        <i class="ri-mail-line mr-2 text-success"></i>
                                        janedoe@mail.com
                                    </p>
                                    <p class="flex items-center mr-3 text-medium">
                                        <i class="ri-phone-line mr-2 text-success"></i>
                                        +2348063138322
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 md:w-1/3 w-full mb-4 lg:pl-5 md:pl-5">
                            <div class=" border border-gray p-4 rounded">
                                <div class="pb-1 border-b border-gray mb-3">
                                    <h3 class="text-large mb-3 text-gray-grayer">Fee</h3>
                                </div>
                                <div class="flex flex-wrap">
                                    <div class="lg:w-2/3 md:w-2/3 w-full mb-3">
                                        <p class="text-medium">₦1,460 × {{ form.lesson_schedule.hour_per_day }} hrs × {{form.lesson_schedule.duration *  form.lesson_schedule.days.length}}lessons</p>
                                    </div>
                                    <div class="lg:w-1/3 md:w-1/3 w-full mb-3">
                                        <p class="text-medium ml-4"> NGN{{ 1460* parseInt(form.lesson_schedule.hour_per_day) * parseInt(form.lesson_schedule.duration * form.lesson_schedule.days.length) | numberComma}}</p>
                                    </div>
                                </div>
                                <div class="flex flex-wrap">
                                    <div class="lg:w-2/3 md:w-2/3 w-full mb-3">
                                        <p class="text-medium">Total:</p>
                                    </div>
                                    <div class="lg:w-1/3 md:w-1/3 w-full mb-3">
                                        <p class="text-medium ml-4"> NGN{{ price * parseInt(form.lesson_schedule.hour_per_day) * parseInt(form.lesson_schedule.duration * form.lesson_schedule.days.length) | numberComma }}</p>
                                    </div>
                                </div>
                                <div class="">
                                    <div class=" mb-3">
                                        <p class="text-medium ml-4">
                                            An email has been sent to you.
                                        </p>
                                    </div>
                                </div>
                                <a href="/login" class="bg-blue py-3 block w-full text-center text-white text-medium">
                                    Proceed to login
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Schedules -->
                <div class="bg-white lg:w-8/12 md:w-8/12 w-full mx-auto py-5 px-8 rounded-lg shadow" v-show="schedule">
                    <div>
                        <h3 class="text-h4 text-success font-semibold mb-3">Lesson Schedule</h3>
                        <p class="text-medium">How long you need tutor for and what time?</p>

                        <div class="my-3">
                            <p class="text-medium">What days do you want lessons to hold?</p>
                            <div class="my-3 w-2/3">
                                <el-checkbox-group v-model="form.lesson_schedule.days" size="medium">
                                    <el-checkbox  label="Monday"></el-checkbox>
                                    <el-checkbox label="Tuesday"></el-checkbox>
                                    <el-checkbox label="Wednesday"></el-checkbox>
                                    <el-checkbox label="Thursday"></el-checkbox>
                                    <el-checkbox label="Friday"></el-checkbox>
                                    <el-checkbox label="Saturday"></el-checkbox>
                                    <el-checkbox label="Sunday"></el-checkbox>
                                </el-checkbox-group>
                            </div>
                            <div class="flex flex-wrap mb-4">
                                <div class="lg:w-1/2 md:w-1/2 w-full mb-4">
                                    <div class="lg:mr-2 md:mr-2">
                                        <label for="" class="text-gray-darker text-medium">When do u want to start?</label>
                                        <el-date-picker
                                            v-model="form.lesson_schedule.start_date"
                                            type="date"
                                            placeholder="Pick a day">
                                        </el-date-picker>
                                        
                                    </div>
                                </div>
                                <div class="lg:w-1/2 md:w-1/2 w-full mb-4">
                                    <div class="lg:ml-2 md:ml-2">    
                                        <label for="" class="text-gray-darker text-medium">For how long?</label>
                                        <select v-model="form.lesson_schedule.duration" class="w-full py-3 border border-gray px-2 rounded mt-2 text-medium focus:outline-none">
                                            <option value="1">1 week</option>
                                            <option value="2">2 weeks</option>
                                            <option value="3">3 weeks</option>
                                            <option value="4">1 month</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-wrap mb-4">
                                <div class="lg:w-1/2 md:w-1/2 w-full mb-4">
                                    <div class="lg:mr-2 md:mr-2">
                                        <label for="" class="text-gray-darker text-medium">How many Hours per day?</label>
                                        <select v-model="form.lesson_schedule.hour_per_day" class="w-full py-3 border border-gray px-2 rounded mt-2 text-medium focus:outline-none">
                                            <option value="1">1 hour</option>
                                            <option value="2">2 hours</option>
                                            <option value="3">3 hours</option>
                                        </select>
                                        
                                    </div>
                                </div>
                                <div class="lg:w-1/2 md:w-1/2 w-full mb-4">
                                    <div class="lg:ml-2 md:ml-2">    
                                        <label for="" class="text-gray-darker text-medium">From what time</label>
                                        <select v-model="form.lesson_schedule.start_time" class="w-full py-3 border border-gray px-2 rounded mt-2 text-medium focus:outline-none">
                                            <option value="8">8:00 Am</option>
                                            <option value="9">9:00 Am</option>
                                            <option value="10">10:00 AM</option>
                                            <option value="11">11:00 AM</option>
                                            <option value="12">12:00 Pm</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex mb-4" :class="{'justify-end' : !show,'justify-between': show}">
                        <!-- <button class="bg-white flex items-center py-3 px-8 text-medium rounded" @click="hideSchedule">
                            <i class="ri-arrow-left-s-line mr-2"></i>
                            Back
                        </button> -->
                        <button class="bg-blue flex items-center text-white py-3 px-6 text-medium rounded" :disabled="!isScheduleComplete" @click="() => { this.completeRequest = true; this.schedule = false; this.completeTag = true; this.handleForm()}">
                            Complete
                            <i class="ri-arrow-right-s-line ml-2"></i>
                        </button>
                    </div>
                </div>


                <!-- Contact Information -->
                <div class="bg-white lg:w-8/12 md:w-8/12 w-full mx-auto py-5 px-8 rounded-lg shadow" v-show="contactInfo">
                    <h3 class="text-body-2 text-gray-darker">Get A Professional Pre-Primary & Lower Primary Tutor.</h3>
                    <div class="my-4">
                        <div class="flex flex-wrap mb-4">
                            <div class="lg:w-1/2 md:w-1/2 w-full mb-4">
                                <div class="lg:mr-2 md:mr-2">
                                    <label for="" class="text-gray-darker text-medium">Last Name *</label>
                                    <input v-model="form.user.lastname" type="text" class="w-full px-2 py-3  border border-gray mt-2 text-medium focus:outline-none focus:border-blue rounded" placeholder="Jane"/>
                                </div>
                            </div>
                            <div class="lg:w-1/2 md:w-1/2 w-full mb-4">
                                <div class="lg:ml-2 md:ml-2">
                                    <label for="" class="text-gray-darker text-medium">First Name *</label>
                                    <input type="text" v-model="form.user.firstname" class="w-full px-2 py-3 border border-gray mt-2 text-medium focus:outline-none focus:border-blue rounded" placeholder="Doe"/>
                                </div>
                            </div>
                        </div>
                        
                        <div class="flex flex-wrap mb-4">
                            <div class="lg:w-1/2 md:w-1/2 w-full mb-4">
                                <div class="lg:mr-2 md:mr-2">
                                    <label for="" class="text-gray-darker text-medium"> Email Address *</label>
                                    <input type="email" v-model="form.user.email"  class="w-full px-2 py-3 border border-gray mt-2 text-medium focus:outline-none focus:border-blue rounded" placeholder="Test@mail.com"/>
                                    
                                </div>
                            </div>
                            <div class="lg:w-1/2 md:w-1/2 w-full mb-4">
                                <div class="lg:ml-2 md:ml-2">
                                    <label for="" class="text-gray-darker text-medium">Phone number *</label>
                                    <input type="text" v-model="form.user.phone_number"  class="w-full px-2 py-3 border border-gray mt-2 text-medium focus:outline-none" place focus:border-blue roundedholder="080****"/>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-wrap mb-4">
                            <div class="lg:w-1/2 md:w-1/2 w-full mb-4">
                                <div class="lg:mr-2 md:mr-2">
                                    <label for="" class="text-gray-darker text-medium">Your State of residence *</label>
                                    <el-select @change="handleLga" v-model="form.user.state" placeholder="Select a state">
                                        <el-option
                                        v-for="item in state"
                                        :key="item.id"
                                        :value="item">
                                        </el-option>
                                    </el-select>
                                    
                                </div>
                            </div>
                            <div class="lg:w-1/2 md:w-1/2 w-full mb-4">
                                <div class="lg:ml-2 md:ml-2">
                                    <label for="" class="text-gray-darker text-medium">Local government *</label>
                                    <el-select v-model="form.user.city" placeholder="Select local govt">
                                        <el-option
                                        v-for="item in lgas"
                                        :key="item.id"
                                        :label="item"
                                        :value="item">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="">
                            <button class="bg-blue-base py-3 px-4 text-medium text-white w-full  my-3">Get a tutor</button>
                        </div> -->
                    </div>
                    <div class="flex mb-4" :class="{'justify-end' : !show,'justify-between': show}">
                        <!-- <button class="bg-white flex items-center py-3 px-8 text-medium rounded" @click="hideContact">
                            <i class="ri-arrow-left-s-line mr-2"></i>
                            Back
                        </button> -->
                        <button :disabled="!isContactComplete" class="bg-blue flex items-center text-white py-3 px-6 text-medium rounded" @click="showSchedule">
                            Proceed
                            <i class="ri-arrow-right-s-line ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import NaijaStates from 'naija-state-local-government';

const { mapState, mapActions } = createNamespacedHelpers('auth');
  export default {
    data() {
      return {
        active: 0,
        show:true,
        checkList:[],
        learner:false,
        schedule:false,
        completeRequest:false,
        contactInfo:false,
        contactTag:false,
        completeTag:false,
        scheduleTag:false,
        state:{},
        lgas:{},
        price:0,
        value1:'',
        goals:[
            'Prepare for school tests and exam',
            'Home assistance and revisions',
            'Improve phonics reading and writing',
            'Build Foundation and confidence',
            'Homeschooling',
            'Special need support'
        ],
        categories:'',
        learnerField: [1],
        form:{
            class_type:'',
            students:[
                {
                    name:'',
                    goal:'',
                    description:'',
                    category_id:''
                },
            ],
            user:{
                firstname:'',
                lastname: '',
                phone_number:'',
                email: '',
                state:'',
                city:''
            },
            lesson_schedule:{
                days: [],
                start_date: '',
                start_time: '',
                hour_per_day: '',
                duration: ''
            }
        }
      };
    },
    async mounted(){
      this.classData();
    //   this.handleState();
      this.price = process.env.MIX_APP_FEE;
      this.state = NaijaStates.states();
    //   console.log(NaijaStates.states())
    },
    filters:{
        numberComma(value){
            return new Intl.NumberFormat('en-IN').format(value);
        }
    },
    computed:{
        isLearnerComplete(){
            // console.log(this.form.students)
            const data = this.form.students[0].name.length > 0 && this.form.students[0].goal.length > 0 && this.form.students[0].description.length > 0 && this.form.students[0].category_id.length > 0;
            // console.log(data)
            return data;
        },
        isContactComplete(){
            const data = this.form.user.lastname.length > 0 && this.form.user.firstname.length > 0 && this.form.user.email.length > 0 && this.form.user.phone_number.length > 0 && this.form.user.state.length > 0 && this.form.user.city.length > 0 ;
            // console.log(data);
            return data;
        },
        isScheduleComplete(){
            const data = this.form.lesson_schedule.days && this.form.lesson_schedule.start_date && this.form.lesson_schedule.start_time && this.form.lesson_schedule.duration && this.form.lesson_schedule.hour_per_day;
            // console.log(data);
            // console.log(this.form.lesson_schedule.start_date)
            // console.log(this.form.lesson_schedule.duration)
            // console.log(this.form.lesson_schedule.start_time)
            // console.log(this.form.lesson_schedule.days)
            // console.log(this.form.lesson_schedule.hour_per_day)
            // console.log(this.form.lesson_schedule);
            return data
        },
    },
    methods: {
        ...mapActions(['getClass','createUser',"getState",'getLga']),
        async handleState(){
            const res = await this.getState();
            this.state = res;
            // console.log(res)
        },
        async handleLga(){
            if(this.form.user.state){
                // const res = await this.getLga({lga: this.form.user.state});
                this.lgas = NaijaStates.lgas(this.form.user.state).lgas;
                // console.log(this.lgas)
            }
            
        },
        async classData(){
            try {
                const res = await this.getClass();
                this.categories = res.data;
            } catch(e) {
                this.$message.error('Oops, Couldnt get data.')
                console.log(e.response)
            }
        },
        showLearner(option){
            this.learner = true;
            this.show = false;
            this.form.class_type = option;
        },
        async handleForm(){
            try {
                const res = await this.createUser(this.form);
                this.$notify({
                    title: 'Success',
                    message: 'Registration successful',
                    type: 'success'
                });
            }catch (e) {
                this.$message.error('Oops, Something went wrong.')
            }
        },
        moreLearnerFields(){
            let item = 1;
            const field = {
                    name:'',
                    goal:'',
                    description:'',
                    category_id:''
                };
            this.form.students.push(field);
            this.learnerField.push(item++);
        },
        deleteLearner(item){
            const index = this.learnerField.indexOf(item);
            
            if(index != -1){
                this.learnerField.splice(index,1);
                this.form.students.pop();
            }
        },
        hideLearner(){
            this.learner = false;
            this.show = true;
        },
        hideContact(){
            this.contactInfo = false;
            this.learner = true;
        },
        hideSchedule(){
            this.contactInfo = true;
            this.schedule = false;
        },
        showContact(){
            this.contactInfo = true;
            this.contactTag = true;
            this.learner = false
        },
        showSchedule(){
            this.schedule = true;
            this.scheduleTag = true;
            this.contactInfo = false
        }
    }
  }
</script>

<style>
.el-select{
    display: block;
}
button:disabled,
button[disabled]{
  opacity: .3;
}
</style>