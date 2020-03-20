<template>
  <div class="container mt-4">
    <ContactForm @onSubmit="onSubmit" :contact="contact" />
  </div>
</template>

<script>
import { contacts } from '../services/Contacts';
import ContactForm from '../components/ContactForm.vue';

export default {
  components: {
    ContactForm
  },
  data() {
    return {
      contact: {
        first_name: '',
        last_name: '',
        email: '',
        number: ''
      },
      isEdit: false
    };
  },
  methods: {
    onSubmit(contact) {
      this.isEdit ? this.editContact(contact) : this.addContact(contact);
    },
    addContact(contact) {
      contacts.add(contact).then(() => {
        this.$router.push('/contacts');
      });
    },
    editContact(contact) {
      contacts.edit(contact).then(() => {
        this.$router.push('/contacts');
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    if (to.params.id) {
      contacts.get(to.params.id).then(response => {
        next(vm => {
          vm.contact = response.data;
          vm.isEdit = true;
        });
      });
    } else {
      next();
    }
  }
};
</script>