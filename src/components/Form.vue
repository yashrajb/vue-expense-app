<template>
<div class="Form">
  <b-container>
    <h2>Add Expense</h2>
     <b-form @submit="onSubmit" class="forms">
      <b-form-group
        id="input-group-1"
        label="Date:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.date"
          type="date"
          placeholder="Enter date"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Time:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.time"
          type="time"
          placeholder="Enter Time"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Money:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.money"
          type="number"
          placeholder="Enter Money"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label="Description:" label-for="input-4">
      <b-form-textarea
      id="input-4"
      v-model="form.description"
      placeholder="Enter something..."
      rows="5"
    ></b-form-textarea>
      </b-form-group>
      <b-form-group>
        <b-button type="submit" v-bind:disabled="!(form.date && form.time && form.money && form.description)"  variant="primary">Submit</b-button>
      </b-form-group>
      
    </b-form>
  </b-container>
   
  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
  name:"Form",
  data(){
    return {
      form:{
        date:'',
        time:'',
        money:0,
        description:''
      }
    }
  },
  methods:{
    ...mapActions([
      'add'
    ]),
    onSubmit:function(event){
      event.preventDefault();
      const {date,time,money,description} = this.form;
      this.add({date,time,money,description});
      this.$router.push("expenses");
    }
  }
}
</script>
<style scoped>
 h2 {
   border-bottom:1px solid black;
   padding:10px 0px;
   margin:10px 0px 0px 0px;
 }
 .forms {
   margin-top:20px;
 }
</style>