<template>
    <div v-if="$store.state.admin.showTutor">
        <div class="flex justify-between">
            <button class="text-medium bg-blue text-white rounded py-2 px-5 focus:outline-none" @click="back">Back</button>
            <button class="text-medium bg-green text-white rounded py-2 px-5 focus:outline-none" @click="approve">Approve User</button>
        </div>
        
        <div class="mt-5 ml-5 flex items-center justify-between">   
            <div class="flex items-center">
                <div class="h-32 w-32 rounded-full bg-blue">

                </div>
                <div class=" ml-5">
                    <p class="text-large font-semibold">{{ $store.state.admin.tutor.name }}</p>
                    <p class="text-medium font-light text-gray-grayer">Tutor</p>
                    <p class="text-medium font-light text-gray-grayer">{{ $store.state.admin.tutor.date_of_birth }}</p>
                </div>
            </div>
            <div class="">
                
                <p class="text-medium text-gray-grayer">Social media: </p>
               
            </div>
        </div>
        
        <div class="flex flex-wrap my-4">
            <div class="lg:w-1/2 md:w-1/2 w-full mb-4">
                <div class="bg-white lg:mr-3 md:mr-3 rounded-md rounded-md px-4 py-2">
                    <p class="text-dark font-semibold text-medium">Personal Information</p>
                    <div class="my-3">
                        <p class="text-medium">Email: {{ $store.state.admin.tutor.email }}</p>
                        <p class="text-medium">Gender: {{ $store.state.admin.tutor.tutor.gender }}</p>
                        <p class="text-medium">Date of Birth: {{ $store.state.admin.tutor.tutor.date_of_birth}}</p>
                        <p class="text-medium">Phone number: {{ $store.state.admin.tutor.phone_number }}</p>
                    </div>
                </div>
            </div>
            <div class="lg:w-1/2 md:w-1/2 w-full mb-4">
                <div class="bg-white lg:ml-3 md:ml-3 rounded-md rounded-md px-4 py-2">
                    <p class="text-dark font-semibold text-medium">Education</p>
                    
                    <div class="my-3" v-for="edu in $store.state.admin.tutor.tutor.education" :key="edu.id">
                        <p class="text-medium">{{ edu.university }}</p>
                        <p class="text-medium">{{ edu.honor }} honor</p>
                        <p class="text-medium">{{ edu.cgpa }} cgpa</p>
                        <p class="text-medium">{{ edu.start_year }} - {{ edu.end_year }}</p>
                    </div>
                </div>
            </div>
            
        </div>

        <div class="flex flex-wrap my-4">
            <div class="lg:w-1/2 md:w-1/2 w-full mb-4">
                <div class="bg-white lg:mr-3 md:mr-3 rounded-md rounded-md px-4 py-2">
                    <p class="text-dark font-semibold text-medium">Contact Information</p>
                    <div class="my-3">
                        <p class="text-medium">LGA: {{ $store.state.admin.tutor.tutor.lga }} </p>
                        <p class="text-medium">State: {{ $store.state.admin.tutor.tutor.state }} Nigeria</p>
                    </div>
                </div>
            </div>

            <div class="lg:w-1/2 md:w-1/2 w-full mb-4">
                <div class="bg-white lg:ml-3 md:ml-3 rounded-md rounded-md px-4 py-2">
                    <p class="text-dark font-semibold text-medium">Certificate & Achievement</p>
                    <div class="my-3" v-for="cert in $store.state.admin.tutor.tutor.certificate" :key="cert.id">
                        <p class="text-medium">{{ cert.title }}</p>
                        <p class="text-medium">{{ cert.year }}</p>
                    </div>
                </div>
            </div>

            <div class="lg:w-1/2 md:w-1/2 w-full mb-4">
                <div class="bg-white lg:mr-3 md:mr-3 rounded-md rounded-md px-4 py-2">
                    <p class="text-dark font-semibold text-medium">Bank Information</p>
                    <div class="my-3">
                        <p class="text-medium">Bank name: {{ $store.state.admin.tutor.tutor.bank.bank_name}} </p>
                        <p class="text-medium">Account name: {{ $store.state.admin.tutor.tutor.bank.account_name }} </p>
                        <p class="text-medium">Account number: {{ $store.state.admin.tutor.tutor.bank.account_number }}</p>
                    </div>
                </div>
            </div>

            <div class="lg:w-1/2 md:w-1/2 w-full mb-4">
                <div class="bg-white lg:ml-3 md:ml-3 rounded-md rounded-md px-4 py-2">
                    <p class="text-dark font-semibold text-medium">Referee</p>
                    <div class="my-3">
                        <p class="text-medium">Name: {{ $store.state.admin.tutor.tutor.referee.name }} </p>
                        <p class="text-medium">Email: {{ $store.state.admin.tutor.tutor.referee.email }} </p>
                        <p class="text-medium">Phone number: {{ $store.state.admin.tutor.tutor.referee.phone_number }}</p>
                        <p class="text-medium">Address: {{ $store.state.admin.tutor.tutor.referee.address }}</p>
                        <p class="text-medium">Occupation: {{ $store.state.admin.tutor.tutor.referee.occupation }}</p>
                        <p class="text-medium">Relationship: {{ $store.state.admin.tutor.tutor.referee.relationship }}</p>
                    </div>
                </div>
            </div>

            <div class="lg:w-1/2 md:w-1/2 w-full mb-4">
                <div class="bg-white lg:mr-3 md:mr-3 rounded-md rounded-md px-4 py-2">
                    <p class="text-dark font-semibold text-medium">Experience</p>
                    <div class="my-3" v-for="exp in $store.state.admin.tutor.tutor.experience" :key="exp.id">
                        <p class="text-medium">Organization Name: {{ exp.organization_name }} </p>
                        <p class="text-medium"> Position: {{ exp.position }} </p>
                        <p class="text-medium">Role Description: {{ exp.description }}</p>
                        <p class="text-medium">{{ exp.enroll_date }} - {{ exp.enroll_end_date }}</p>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
</template>

<script>
    import { createNamespacedHelpers } from "vuex";
    const { mapMutations } = createNamespacedHelpers('admin');
    export default {
        data(){
            return {

            };
        },
        methods:{
            ...mapMutations(["toggleState"]),
            back(){
                const data = {
                    state:false,
                    tutor: {}
                };
                this.toggleState(data);
            },
            approve(){
                 
                this.$swal.fire({
                    // title: 'Are you sure?',
                    text: "Are you sure you want to approve this tutor",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, confirm!'
                    }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                        )
                    }
                })
            }
        }
        
    }
</script>