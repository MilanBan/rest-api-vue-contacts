<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group row">
      <label for="first_name" class="col-4 col-form-label">First Name</label>
      <div class="col-8">
        <div class="input-group">
          <input
            id="first_name"
            name="first_name"
            type="text"
            required="required"
            class="form-control here"
            v-model="draftContact.first_name"
          />
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="last_name" class="col-4 col-form-label">Last Name</label>
      <div class="col-8">
        <div class="input-group">
          <input
            id="last_name"
            name="last_name"
            type="text"
            required="required"
            class="form-control here"
            v-model="draftContact.last_name"
          />
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="email" class="col-4 col-form-label">Email</label>
      <div class="col-8">
        <input
          id="email"
          name="email"
          type="email"
          required="required"
          class="form-control here"
          v-model="draftContact.email"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="number" class="col-4 col-form-label">Number</label>
      <div class="col-8">
        <div class="input-group">
          <input
            id="number"
            name="number"
            type="tel"
            required="required"
            class="form-control here"
            v-model="draftContact.number"
          />
        </div>
      </div>
    </div>
    <div class="form-group row">
      <div class="offset-4 col-8">
        <button name="submit" type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      draftContact: {}
    };
  },
  props: {
    contact: {
      type: Object,
      required: false,
      default: () => ({
        first_name: '',
        last_name: '',
        email: '',
        number: ''
      })
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.draftContact);
    }
  },
  watch: {
    contact() {
      this.draftContact = this.contact;
    }
  }
};
</script>