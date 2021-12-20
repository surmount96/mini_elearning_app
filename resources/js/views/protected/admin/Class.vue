<template>
    <div>
        <div class="flex flex-wrap items-center">
            <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="Classes" name="first">
                    <el-button type="text" @click="classForm = true">Create Classes</el-button>
                </el-tab-pane>
                <el-tab-pane label="Subjects" name="second">Config</el-tab-pane>
            </el-tabs> -->

          <button class="text-medium bg-blue text-white rounded py-2 px-5 focus:outline-none" @click="classForm">Create Classes</button>
          <button class="text-medium bg-blue text-white rounded py-2 px-5 mx-3 focus:outline-none" @click="subjectForm">Subjects</button>
        </div>
        <div class=" my-6 flex items-center bg-white rounded p-6"
          v-for="item in categories" :key="item.id">
            <div class="">
                <img src="/img/icon/graduation.svg" class="w-20" alt="">
            </div>
            <div class="ml-4">
                <p class="text-large my-1">{{ item.name }}</p>
                <p class="text-medium">subject: <span v-for="sub in item.subjects" :key="sub.id"> {{ sub.title }}</span></p>
                <div class="flex text-small mt-2">
                  <i class="ri-edit-line text-large text-blue mr-3 cursor-pointer"></i>
                  <i class="ri-delete-bin-line text-large text-red cursor-pointer" @click="deleteClass(item.id)"></i>
                </div>
            </div>
        </div>
         <modal name="class" >
            <div class="p-4">
              <h3 class="text-h4">Class</h3>
              <div>
                <div class="my-4">
                  <label for="">Name</label>
                  <input type="text" v-model="form.name" placeholder="Name" class="py-3 px-4 text-medium w-full focus:outline-none border border-gray">
                </div>
                <div class="my-4">
                  <label class="file-select">
                    <p class="bg-blue py-3 w-full text-center text-white text-medium">Upload Image</p>
                    {{ form.cover_image ? form.cover_image.name : '' }}
                    <input type="file" @change="handleChange" accept="image/*" class="hidden">
                  </label>
                </div> 
                <button class="py-3 px-6 bg-blue text-white text-medium rounded" @click="handleForm">
                  Submit
                </button>
              </div>
            </div>
         </modal>

         <modal name="subject" height="460px">
            <div class="p-4">
              <h3 class="text-h4">Subject</h3>
              <div>
                <div class="my-4">
                  <label for="">Title</label>
                  <input type="text" v-model="form.title" placeholder="Name" class="py-3 px-4 text-medium w-full focus:outline-none border border-gray">
                </div>
                <div class="my-4">
                  <label for="">Description</label>
                  <input type="text" v-model="form.description" placeholder="Description" class="py-3 px-4 text-medium w-full focus:outline-none border border-gray">
                </div>
                <div class="my-4">
                  <label for="">Class type</label>
                  <select type="text" v-model="form.category_id" placeholder="Name" class="py-3 px-4 text-medium w-full focus:outline-none border border-gray">
                  <option v-for="item in categories" :key="item.id" :value="item.id">
                    {{ item.name }}
                  </option>
                  </select>
                </div>
                <div class="my-4">
                  <label class="file-select">
                    <p class="bg-blue py-3 w-full text-center text-white text-medium">Upload Image</p>
                    {{ form.cover_image ? form.cover_image.name : '' }}
                    <input type="file" @change="handleChange" accept="image/*" class="hidden">
                  </label>
                </div>
                <button class="py-3 px-6 bg-blue text-white text-medium rounded" @click="handleSubjectForm">
                  Submit
                </button>
              </div>
            </div>
         </modal>
        
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions } = createNamespacedHelpers('auth');
  export default {
    data() {
      return {
        categories:{},
        form: {
          name: '',
          title:'',
          description:'',
          category_id:'',
          cover_image:''
        },
        formLabelWidth: '120px',
        activeName: 'first'
      };
    },
    async mounted(){
      this.classData();
    },
    methods: {
      ...mapActions(['createClass','getClass','createSubject','classDelete']),
      async classData(){
        try {
          const res = await this.getClass();
          this.categories = res.data;
        } catch(e) {
          console.log(e.response)
        }
      },
      classForm(){
        this.$modal.show('class');
      },
      subjectForm(){
        this.$modal.show('subject');
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleChange(e){
        this.form.cover_image = e.target.files[0];
        // console.log(e.target.files[0])
      },
      async handleForm(){
        try {
          let fd = new FormData();
          fd.append('name',this.form.name);
          fd.append('cover_image',this.form.cover_image)
          const res = await this.createClass(fd);
          this.form = {};
          this.$modal.hide('class');
          this.classData();
          this.$notify({
            title: 'Success',
            message: 'Successfully created',
            type: 'success'
          });
        } catch (e) {
          console.log(e.response)
        }
        // console.log(res)
      },
      async handleSubjectForm(){
        try {
          let fd = new FormData();
          fd.append('title',this.form.title);
          fd.append('description',this.form.description);
          fd.append('category_id',this.form.category_id);
          fd.append('cover_image',this.form.cover_image)
          const res = await this.createSubject(fd);
          this.form = {};
          this.$modal.hide('subject');
          this.classData();
          this.$notify({
            title: 'Success',
            message: 'Successfully created',
            type: 'success'
          });
        } catch (e) {
          console.log(e.response)
        }
        // console.log(res)
      },
      async deleteClass(id){
        const res = await this.classDelete(id);
        this.classData();
        this.$notify({
            title: 'Success',
            message: 'Successfully deleted',
            type: 'success'
          });
      }
    }
  };
</script>

<style scoped>
.upload-demo{ 
  margin: 0 auto;
}
</style>>