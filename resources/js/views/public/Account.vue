<template>
    <div class="flex flex-wrap bg-white rounded-md shadow relative" style="min-height:104vh">
        <div class="absolute top-0 right-0 mr-4 mt-4 bg-white">
            <a href="/">
                <img src="/img/logo/logo.png" alt="" class="object-cover w-16 mx-auto">
            </a>
        </div>
        <div class="lg:w-5/12 md:w-5/12 w-full mb-4 lg:px-20 md:px-8 lg:py-12 lg:flex md:flex hidden bg-blue ">
            <img src="/img/register.svg" alt="register">
        </div>
        <div class="lg:w-7/12 md:w-7/12 w-full mb-4 ">
            <div class="lg:px-10 py-10" >
                <div class=" px-5">    
                    <div class="lg:mt-20 mt-16">
                        <h3 class="text-h3 text-gray-grayer font-semibold">Become a tutor</h3>
                    </div>
                    <!-- {{ form }}
                    {{ isPersonalComplete }} -->
                </div>

                <!-- Registration -->
                <div class=" px-5 pt-3 pb-6" v-show="personal">
                    <div class="mb-5 flex flex-wrap">
                        <div class="lg:w-1/2 md:w-1/2 w-full ">
                            <div class="lg:mr-2 md:mr-2">
                                <label for="" class="text-medium mb-3">Full name</label>
                                <input type="text" v-model="form.name" placeholder="Full name" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                                <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['name'] }} </small>
                            </div>
                        </div>
                        <div class="lg:w-1/2 md:w-1/2 w-full ">
                            <div class="">
                                <label for="" class="text-medium mb-3">Email Address</label>
                                <input type="email" v-model="form.email" placeholder="Email Address" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                                <small class="text-small text-red">{{ errors['email'] }} </small>
                            </div>
                        </div>
                    </div>
                    <div class="mb-5 flex flex-wrap">
                        <div class="lg:w-1/2 md:w-1/2 w-full ">
                            <div class="lg:mr-2 md:mr-2">
                                <label for="" class="text-medium mb-3">Gender</label>
                                <select v-model="form.gender" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="not">Not specified</option>
                                </select>
                                <small class="text-small text-red">{{ errors['gender'] }} </small>
                            </div>
                        </div>
                        <div class="lg:w-1/2 md:w-1/2 w-full ">
                            <div class="">
                                <label for="" class="text-medium mb-3">Date of birth *</label>
                                <el-date-picker
                                v-model="form.date_of_birth"
                                type="date"
                                placeholder="Pick a day">
                                </el-date-picker>
                                <small class="text-small text-red">{{ errors['date_of_birth'] }} </small>
                            </div>
                        </div>
                    </div>
               
                    <div class="mb-5 flex flex-wrap">
                        <div class="lg:w-1/2 md:w-1/2 w-full ">
                            <div class="lg:mr-2 md:mr-2">
                                <label for="" class="text-medium mb-3">State</label>
                                <el-select v-model="form.state" @change="handleLga" placeholder="Select state">
                                    <el-option
                                    v-for="item in state"
                                    :key="item.id"
                                    :label="item"
                                    :value="item">
                                    </el-option>
                                </el-select>
                                <small class="text-small text-red">{{ errors['state'] }} </small>
                            </div>
                        </div>
                        <div class="lg:w-1/2 md:w-1/2 w-full ">
                            <div class="">
                                <label for="" class="text-medium mb-3">Local Govt</label>
                                <el-select v-model="form.lga" placeholder="Select Local government">
                                    <el-option
                                    v-for="item in lgas"
                                    :key="item.id"
                                    :label="item"
                                    :value="item">
                                    </el-option>
                                </el-select>
                                <small class="text-small text-red">{{ errors['lga'] }} </small>
                            </div>
                        </div>
                    </div>
                    <div class="mb-5 flex flex-wrap">
                        <div class="lg:w-1/2 md:w-1/2 w-full ">
                            <div class="lg:mr-2 md:mr-2">
                                <label for="" class="text-medium mb-3">Password</label>
                                <input type="password" v-model="form.password" placeholder="*******" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                                <small class="text-small text-red">{{ errors['password'] }} </small>
                            </div>
                        </div>
                        <div class="lg:w-1/2 md:w-1/2 w-full ">
                            <div class="">
                                <label for="" class="text-medium mb-3">Confirm Password</label>
                                <input type="password" v-model="form.password_confirmation" placeholder="*******" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                                <small class="text-small text-red">{{ errors['password_confirmation'] }} </small>
                            </div>
                        </div>
                    </div>

                    <div class="mb-5 flex flex-wrap">
                        <div class="lg:w-1/2 md:w-1/2 w-full ">
                            <div class="lg:mr-2 md:mr-2">
                                <label for="" class="text-medium mb-3">Address</label>
                                <input type="text" v-model="form.address" placeholder="plot 2, street 7 Lagos" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                                <small class="text-small text-red">{{ errors['address'] }} </small>
                            </div>
                        </div>
                        <div class="lg:w-1/2 md:w-1/2 w-full ">
                            <div class="">
                                <label for="" class="text-medium mb-3">Phone number</label>
                                <input type="text" v-model="form.phone_number" placeholder="080*****" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                                <small class="text-small text-red">{{ errors['phone_number'] }} </small>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <button class="bg-blue py-3 px-8 text-white text-medium rounded-md w-40 ml-auto" :disabled="!isPersonalComplete" @click="() => { this.handleTutorForm()}">
                            
                            proceed
                        </button>
                    </div>
                </div>
                <div class="px-5 pt-3 pb-6" v-show="welcome">
                    <h4 class="text-large text-blue font-semibold mb-3">Hello, {{ form.name }}</h4>
                    <p class="text-medium leading-28">
                        
                        Welcome to Heseg Academy tutor registration portal. This page contains a picture demo that will help you understand what the whole registration process entails. If you think you do not need to go through this brief, please click “Skip Demo” at the bottom of this page, and start your registration. However, we advise all prospective tutors to go through this page carefully to fully understand the entire process and avoid not being verified from the first instance due to corrections on their profile.
                    </p>

                    <div class="mt-5">
                        <button class="bg-blue py-3 px-8 text-white text-medium rounded-md " @click="() => { this.education = true; this.welcome = false}">Proceed to registration</button>
                    </div>
                </div>


                <!-- education -->
                <div class="px-5 pt-3 pb-6" v-show="education">
                    <h4 class="text-body-2 text-gray-grayer font-semibold mb-3">
                        Education Information
                    </h4>
                    <p class="text-small text-gray-grayer">Note: You can add as many Educational information as possible</p>
                    <div class="mb-5 flex flex-wrap">
                        <div class="lg:w-1/2 md:w-1/2 w-full ">
                            <div class="lg:mr-2 md:mr-2">
                                <label for="" class="text-medium mb-3">University</label>
                                <input type="text" v-model="form.university" placeholder="Obafemi Awolowo University" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                            </div>
                            <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['university'] }} </small>
                        </div>
                        <div class="lg:w-1/2 md:w-1/2 w-full ">
                            <div class="">
                                <label for="" class="text-medium mb-3">Course</label>
                                <input type="email" v-model="form.course" placeholder="Engineering Physics" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                                <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['course'] }} </small>
                            </div>
                        </div>
                    </div>
                    <div class="mb-5 flex flex-wrap">
                        <div class="lg:w-1/2 md:w-1/2 w-full ">
                            <div class="lg:mr-2 md:mr-2">
                                <label for="" class="text-medium mb-3">Degree type</label>
                                <select v-model="form.degree_type" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                                    <option value="hnd">HND</option>
                                    <option value="ond">OND</option>
                                    <option value="msc"> MSC</option>
                                    <option value="bsc"> BSC</option>
                                </select>
                                <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['degree_type'] }} </small>
                            </div>
                        </div>
                        <div class="lg:w-1/2 md:w-1/2 w-full ">
                            <div class="">
                                <label for="" class="text-medium mb-3">Class Honour</label>
                                <select v-model="form.honor" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                                    <option value="first-class">First Class</option>
                                    <option value="second-class">Second Class</option>
                                    <option value="pass"> Pass</option>
                                </select>
                                <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['honor'] }} </small>
                            </div>
                        </div>
                    </div>
                    <div class="mb-5">
                        <label for="" class="text-medium mb-3">Cgpa</label>
                        <input type="email" v-model="form.cgpa" placeholder="7.0" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                        <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['cgpa'] }} </small>
                    </div>
                    <div class="mb-5 flex flex-wrap">
                        <div class="lg:w-1/2 md:w-1/2 w-full ">
                            <div class="lg:mr-2 md:mr-2">
                                <label for="" class="text-medium mb-3">Start Date</label>
                                <el-date-picker
                                v-model="form.start_date"
                                type="date"
                                placeholder="Pick a day">
                                </el-date-picker>
                                <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['start_date'] }} </small>
                            </div>
                        </div>
                        <div class="lg:w-1/2 md:w-1/2 w-full ">
                            <div class="">
                                <label for="" class="text-medium mb-3">End date</label>
                                <el-date-picker
                                v-model="form.end_date"
                                type="date"
                                placeholder="Pick a day">
                                </el-date-picker>
                                <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['end_date'] }} </small>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between">
                        <button class="bg-blue py-3 px-8 text-white text-medium rounded-md" @click="this.handleEducationForm">Add Qualification</button>
                        <button class="bg-blue py-3 px-8 text-white text-medium rounded-md" @click="() => { this.education = false; this.experience = true}">Proceed to next page</button>
                    </div>
                </div>
            </div>


<!-- Experience -->
            <div class="px-5 pt-3 pb-6" v-show="experience">
                <h4 class="text-body-2 text-gray-grayer font-semibold mb-3">
                    Work Experience
                </h4>
                <p class="text-small text-gray-grayer">Note: You can add as many Work Experience as possible</p>
                <div class="mb-5 flex flex-wrap">
                    <div class="lg:w-1/2 md:w-1/2 w-full ">
                        <div class="lg:mr-2 md:mr-2">
                            <label for="" class="text-medium mb-3">Organization Name</label>
                            <input type="text" v-model="form.organization_name" placeholder="Organization Name" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                            <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['organization_name'] }} </small>
                        </div>
                    </div>
                    <div class="lg:w-1/2 md:w-1/2 w-full ">
                        <div class="">
                            <label for="" class="text-medium mb-3">Position</label>
                            <input type="email" v-model="form.position" placeholder="Position" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                            <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['position'] }} </small>
                        </div>
                    </div>
                </div>
                <div class="mb-5 flex flex-wrap">
                    <div class="lg:w-1/2 md:w-1/2 w-full ">
                        <div class="lg:mr-2 md:mr-2">
                            <label for="" class="text-medium mb-3">Enroll date</label>
                            <el-date-picker
                            v-model="form.enroll_date"
                            type="date"
                            placeholder="Pick a day">
                            </el-date-picker>
                            <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['enroll_date'] }} </small>
                        </div>
                    </div>
                    <div class="lg:w-1/2 md:w-1/2 w-full ">
                        <div class="">
                            <label for="" class="text-medium mb-3">End date</label>
                            <el-date-picker
                            v-model="form.enroll_end_date"
                            type="date"
                            placeholder="Pick a day">
                            </el-date-picker>
                            <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['enroll_end_date'] }} </small>
                        </div>
                    </div>
                </div>
                
                <div class="mb-5">
                    <label for="" class="text-medium mb-3">Description</label>
                    <textarea
                    rows="4"
                    v-model="form.description"
                    class="focus:outline-none py-2 px-4 border border-gray text-medium w-full"
                    placeholder="Description">
                    </textarea>
                    <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['description'] }} </small>
                </div>
                <div class="flex justify-between">
                    <button class="bg-blue py-3 px-8 text-white text-medium rounded-md" @click="addWorkExperience">Add Experience</button>
                    <button class="bg-blue py-3 px-8 text-white text-medium rounded-md" @click="() => { this.experience = false; this.certificate = true;}">Proceed to next page</button>
                </div>
            </div>


            <!-- Certificate -->
            <div class="px-5 pt-3 pb-6" v-show="certificate">
                <h4 class="text-body-2 text-gray-grayer font-semibold mb-3">
                    Certificate
                </h4>
                <div class="mb-5 flex flex-wrap">
                    <div class="lg:w-1/2 md:w-1/2 w-full ">
                        <div class="lg:mr-2 md:mr-2">
                            <label for="" class="text-medium mb-3">Title</label>
                            <input type="text" v-model="form.title" placeholder="Title" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                            <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['title'] }} </small>
                        </div>
                    </div>
                    <div class="lg:w-1/2 md:w-1/2 w-full ">
                        <div class="">
                            <label for="" class="text-medium mb-3">Year</label>
                            <el-date-picker
                            v-model="form.year"
                            type="date"
                            placeholder="Pick a day">
                            </el-date-picker>
                            <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['year'] }} </small>
                        </div>
                    </div>
                </div>
                
                
                <div class="flex justify-between">
                    <button class="bg-blue py-3 px-8 text-white text-medium rounded-md" @click="addCertificate">Add Certificate</button>
                    <button class="bg-blue py-3 px-8 text-white text-medium rounded-md" @click="() => { this.referee = true; this.certificate = false;}">Proceed to next page</button>
                </div>
            </div>   


            <!-- verification -->
            <div class="px-5 pt-3 pb-6" v-show="verification">
                <h4 class="text-body-2 text-gray-grayer font-semibold mb-3">
                    Verification
                </h4>
                <div class="mb-5 flex flex-wrap">
                    <div class="lg:w-1/2 md:w-1/2 w-full ">
                        <div class="lg:mr-2 md:mr-2">
                            <label for="" class="text-medium mb-3">Identity Type</label>
                            <input type="text" v-model="form.identity_type" placeholder="Type" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                            <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['identity_type'] }} </small>
                        </div>
                    </div>
                    <div class="lg:w-1/2 md:w-1/2 w-full ">
                        <div class="">
                            <label for="" class="text-medium mb-3">Identity Number</label>
                            <input type="text" v-model="form.identity_number" placeholder="Identity " class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                            <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['identity_number'] }} </small>
                        </div>
                    </div>
                </div>
                <div class="">
                    <label for="" class="text-medium mb-3">Identity Card Upload</label>
                    <input type="file" @change="cardUpload" placeholder="Identity " class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                    <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['document'] }} </small>
                </div>
                
                <div class="flex justify-between">
                    
                    <button class="bg-blue py-3 px-8 text-white text-medium rounded-md" @click="this.addVerification">Proceed</button>
                </div>
            </div>    


            <!-- Bank -->
            <div class="px-5 pt-3 pb-6" v-show="bank">
                <h4 class="text-body-2 text-gray-grayer font-semibold mb-3">
                    Bank
                </h4>
                <div class="mb-5">
                    <label for="" class="text-medium mb-3">Bank Name</label>
                    <input type="text" v-model="form.bank_name" placeholder="Bank name" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                    <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['bank_name'] }} </small>
                </div>
                <div class="mb-5 flex flex-wrap">
                    <div class="lg:w-1/2 md:w-1/2 w-full ">
                        <div class="lg:mr-2 md:mr-2">
                            <label for="" class="text-medium mb-3">Account Name</label>
                            <input type="text" v-model="form.account_name" placeholder="Account name" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                            <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['account_name'] }} </small>
                        </div>
                    </div>
                    <div class="lg:w-1/2 md:w-1/2 w-full ">
                        <div class="">
                            <label for="" class="text-medium mb-3">Account Number</label>
                            <input type="text" v-model="form.account_number" placeholder="Account name" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                            <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['account_number'] }} </small>
                        </div>
                    </div>
                </div>
                         
                <div class="flex justify-between">
                    <button class="bg-blue py-3 px-8 text-white text-medium rounded-md" @click="addBank">Complete registration</button>
                </div>
            </div>  

             <!-- Referee -->
            <div class="px-5 pt-3 pb-6" v-show="referee">
                <h4 class="text-body-2 text-gray-grayer font-semibold mb-3">
                    Referee
                </h4>
                <div class="mb-5 flex flex-wrap">
                    <div class="lg:w-1/2 md:w-1/2 w-full ">
                        <div class="lg:mr-2 md:mr-2">
                            <label for="" class="text-medium mb-3">Referee Name</label>
                            <input type="text" v-model="form.referee_name" placeholder="Name" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                            <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['referee_name'] }} </small>
                        </div>
                    </div>
                    <div class="lg:w-1/2 md:w-1/2 w-full ">
                        <div class="">
                            <label for="" class="text-medium mb-3">Occupation</label>
                            <input type="text" v-model="form.referee_occupation" placeholder="Occuptation" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                            <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['referee_occupation'] }} </small>
                        </div>
                    </div>
                </div>

                <div class="mb-5 flex flex-wrap">
                    <div class="lg:w-1/2 md:w-1/2 w-full ">
                        <div class="lg:mr-2 md:mr-2">
                            <label for="" class="text-medium mb-3">Email Address </label>
                            <input type="text" v-model="form.referee_email" placeholder="Email" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                            <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['referee_email'] }} </small>
                        </div>
                    </div>
                    <div class="lg:w-1/2 md:w-1/2 w-full ">
                        <div class="">
                            <label for="" class="text-medium mb-3">Phone Number</label>
                            <input type="text" v-model="form.referee_phone_number" placeholder="Phone Number" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                            <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['referee_phone_number'] }} </small>
                        </div>
                    </div>
                </div>

                <div class="mb-5 flex flex-wrap">
                    <div class="lg:w-1/2 md:w-1/2 w-full ">
                        <div class="lg:mr-2 md:mr-2">
                            <label for="" class="text-medium mb-3">Relationship </label>
                            <input type="text" v-model="form.referee_relationship" placeholder="Relationship" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                            <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['referee_relationship'] }} </small>
                        </div>
                    </div>
                    <div class="lg:w-1/2 md:w-1/2 w-full ">
                        <div class="">
                            <label for="" class="text-medium mb-3">Address</label>
                            <input type="text" v-model="form.referee_address" placeholder="Address" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                            <small class="text-small text-red">{{ Object.keys(errors).length === 0 ? '' : errors['referee_address'] }} </small>
                        </div>
                    </div>
                </div>
                
                
                <div class="flex justify-between">          
                    <button class="bg-blue py-3 px-8 text-white text-medium rounded-md" :disabled="!isReferee" @click="() => { this.addReferee() }">Proceed</button>
                </div>
            </div>        
            </div>
        </div>

        <!-- <div class="lg:flex md:flex flex-col justify-center linear" style="minHeight: 100vh">
            
        </div> -->
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers('auth');
import NaijaStates from 'naija-state-local-government';

export default {
    data(){
        return {
            state:{},
            lgas:{},
            errors:{},
            personal:true,
            welcome:false,
            education:false,
            certificate:false,
            referee:false,
            experience:false,
            verification:false,
            bank:false,
            form: {
                name:'',
                gender:'',
                address:'',
                date_of_birth:'',
                phone_number:'',
                email:'',
                password: '',
                password_confirmation: '',
                state:'',
                lga:'',
                cover_letter:'',
                profile_picture:'',  

                university:'',
                course:'',
                cgpa:'',
                honor:'',
                start_year:'',
                end_year:'',
                degree_type:'',
               
                title:'',
                year:'',
                
                organization_name:'',
                position: '',
                enroll_date:'',
                enroll_end_date:'',
                description:'',

                identity_type:'',
                identity_number:'',
                document:'',

                
                referee_name:'',
                referee_relationship:'',
                referee_address:'',
                referee_email: '',
                referee_occupation:'',
                referee_phone_number:'',
    
                
                account_name:'',
                bank_name:'',
                account_number:'',
             
                tutor_id:''
            },
        };
    },
    async mounted(){
        // this.handleState();
        this.state = NaijaStates.states();
        this.handleLga()
    },
    computed:{
        isReferee(){
            const data = this.form.referee_name && this.form.referee_relationship && this.form.address && this.form.address && this.form.referee_email && this.form.referee_occupation && this.form.referee_phone_number;
            // console.log(data)
            return data;
        },
        isPersonalComplete(){
            const data = this.form.name && this.form.email && this.form.gender && this.form.date_of_birth && this.form.address && this.form.phone_number && this.form.state && this.form.lga && this.form.password;
            return data;
        }
    },
    methods:{
        ...mapActions(["signIn","getState",'getLga','tutor','saveEducation','saveExperience','saveCertificate','saveReferee','saveVerification','saveBank']),
        async handleTutorForm(){
            try {
                const res = await this.tutor(this.form);
                this.$notify({
                    title: 'Success',
                    message: 'successful',
                    type: 'success'
                });
                this.personal = false; this.welcome = true; 
                this.form.tutor_id = this.$store.state.auth.tutor.tutor.id;
                console.log(this.form.tutor_id)
                console.log(this.$store.state.auth.tutor.tutor)
                console.log(res)
            } catch (e) {
                this.$message.error(e.response.data.message);
                this.errors = e.response.data.errors;
                console.log(e.response)
            }
        },
        async handleEducationForm(){
            try {
                this.form.tutor_id = this.$store.state.auth.tutor.tutor.id;
                const res = await this.saveEducation(this.form);
                this.$swal({
                    icon: 'success',
                    text: 'Your Education has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                this.form = {};
                console.log(res)
            } catch (e) {
                this.$message.error(e.response.data.message);
                this.errors = e.response.data.errors;
                console.log(e.response)
            }
        },
        async addWorkExperience(){
            try {
                this.form.tutor_id = this.$store.state.auth.tutor.tutor.id;
                const res = await this.saveExperience(this.form);
                this.$swal({
                    icon: 'success',
                    text: 'Your work experience has been saved',
                    showConfirmButton: false,
                    timer: 2500
                })
                this.form = {};
                // this.errors = {};
                console.log(res)
            } catch (e) {
                this.$message.error(e.response.data.message);
                this.errors = e.response.data.errors;
                console.log(e.response)
            }
        },
        async addReferee(){
            try {
                this.form.tutor_id = this.$store.state.auth.tutor.tutor.id;
                const res = await this.saveReferee(this.form);
                this.$swal({
                    icon: 'success',
                    text: 'Referee saved',
                    showConfirmButton: false,
                    timer: 2500
                })
                this.verification = true; this.referee = false;
                this.form = {};
                console.log(res)
            } catch (e) {
                this.$message.error(e.response.data.message);
                this.errors = e.response.data.errors;
                console.log(e.response)
            }
        },
        async addBank(){
            try {
                this.form.tutor_id = this.$store.state.auth.tutor.tutor.id;
                const res = await this.saveBank(this.form);
                this.$swal({
                    icon: 'success',
                    text: 'Registration completed redirecting to login page.',
                    showConfirmButton: false,
                    timer: 2500
                })
                this.form = {};
                window.location.href = '/login';
                console.log(res)
            } catch (e) {
                this.$message.error(e.response.data.message);
                this.errors = e.response.data.errors;
                console.log(e.response)
            }
        },
        async addCertificate(){
            try {
                this.form.tutor_id = this.$store.state.auth.tutor.tutor.id;
                const res = await this.saveCertificate(this.form);
                this.$swal({
                    icon: 'success',
                    text: 'Your certificate has been saved',
                    showConfirmButton: false,
                    timer: 2500
                })
                this.form = {};
                console.log(res)
            } catch (e) {
                this.$message.error(e.response.data.message);
                this.errors = e.response.data.errors;
                console.log(e.response)
            }
        },
        async addVerification(){
            try {
                this.form.tutor_id = this.$store.state.auth.tutor.tutor.id;
                let fd = new FormData();
                fd.append('identity_type',this.form.identity_type);
                fd.append('identity_number',this.form.identity_number);
                fd.append('document',this.form.document);
                fd.append('tutor_id',this.form.tutor_id);
                const res = await this.saveVerification(fd);
                this.$swal({
                    icon: 'success',
                    text: 'Successfully saved',
                    showConfirmButton: false,
                    timer: 2500
                })
                this.verification = false; this.bank = true;
                this.form = {};
                console.log(res)
            } catch (e) {
                this.$message.error(e.response.data.message);
                this.errors = e.response.data.errors;
                console.log(e.response)
            }
        },
        cardUpload(e){
            this.form.document = e.target.files[0];
            console.log(e.target.files[0])
        },
        async handleState(){
            const res = await this.getState();
            this.state = res;
            // console.log(res)
        },
        async handleLga(){
            if(this.form.state){
                // const res = await this.getLga({lga: this.form.state});
                this.lgas = NaijaStates.lgas(this.form.state).lgas;
            }
            
        },
        async handleRegister(){
            try {
                const res  = await this.signIn(this.form);

                if(res.user.role === 'parent'){
                
                    this.$message.error('Oops, Please check your credentials.');
                }
            }catch (e) {
                this.$message.error(e.response.data.message);
            }

        }
    }
}
</script>

<style>
.el-input{
    display: block;
}
.el-date-editor.el-input, .el-date-editor.el-input__inner{
    width:100%;
}
</style>