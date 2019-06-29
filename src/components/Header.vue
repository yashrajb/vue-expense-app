<template>
<div class="home">
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Expense App</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
     

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
         <b-navbar-nav>
        <router-link to="/" exact tag="b-nav-item">Add Expense</router-link>
        <router-link to="/expenses" exact tag="b-nav-item">Expenses</router-link>
      </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
               name:"home"
}
</script>
<style>
.active {
  color:white;
}
</style>