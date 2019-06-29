<template>
<div id="expenses">
<b-container>
<h1>Your Expenses</h1>
<h3 class="text-center" v-if="!expenses.expenses.length">There is no expenses</h3>
<b-card :title="expense.date" v-for="(expense,index) in expenses.expenses" :key="expense.date">
    <b-card-text>
      <p>Time - {{ expense.time }}</p>
      <p>Money - {{ expense.money }}</p>
      <p>{{ expense.description }}</p>
    </b-card-text>
    <b-button variant="danger" @click="onDelete(index)">Delete</b-button>
</b-card>
</b-container>
</div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
name:"expenses",
computed:{
...mapState([
  'expenses'
])
},
methods:{
...mapActions([
      'delete'
]),
onDelete:function(index){
       this.delete(index);
}
}
}
</script>
<style>
h1{
 border-bottom:1px solid black;
 padding:10px 0px;
}
</style>