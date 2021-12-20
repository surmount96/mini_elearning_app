<template>
    <div class="bg-white  absolute right-0 top-0 w-64 mx-auto flex flex-col mt-12" style="height: 100vh" :class="{'hidden': !data}">
        <p class="hover:opacity-40 ml-8 my-3 pt-6">
            <a href="/login" class="py-2 ">Login</a>
        </p>
        <p class="hover:opacity-40 ml-8 my-3">
            <a href="/tutor/register" class="bg-warning rounded text-white py-2 px-10">Become a tutor</a>
        </p>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        data(){
            return {

            }
        },
        props:{
            data:{ type: Boolean}
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
