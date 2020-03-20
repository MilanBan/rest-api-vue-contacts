<template>
  <div class="container">
    <form class="form-signin" @submit.prevent="login">
      <h2>Login Page</h2>
      <input
        v-model="email"
        type="email"
        class="form-control"
        name="email"
        placeholder="Email Address"
        required
      />
      <input
        v-model="password"
        type="password"
        class="form-control"
        name="password"
        placeholder="Password"
        required
      />
      <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { authService } from '../services/Auth';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      authService.login(this.email, this.password).then(() => {
        this.$router.push({ name: 'contacts' });
      });
    }
  }
};
</script>