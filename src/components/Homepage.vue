<!--New Homepage-->
<template>
    <div class="homepage">
      <h1>Welcome!</h1>
      <h2>This is IE Bank Corp Account Management System</h2>
      <p>Manage your bank accounts effortlessly. You can view, create, update, and delete accounts.</p>
      <!-- When button is clicked, it navigates to the Accounts page -->
      <button @click="goToAccounts">Go to Accounts</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    methods: {
      goToAccounts() {
        // Use Vue Router to navigate to the "Accounts" page
        this.$router.push({ name: 'AppAccounts' });
      }
    }
  };
  </script>
  
  <style scoped>
  .homepage {
    text-align: center;
    margin: 0 auto;
    max-width: 600px;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    color: #42b983;
  }
  
  h2 {
    font-family: 'Montserrat', sans-serif;
    color: #42b983;
    margin-bottom: 20px; /* Adds 20px of space below the h1 */
  }

  p{
    font-family: 'Montserrat', sans-serif;
  }

  /* Adds Button */
  button {
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #2c3e50;
  }
  </style>
  