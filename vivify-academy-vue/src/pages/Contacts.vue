<template>
  <span>
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <ContactList :contacts="contacts" />
        </div>
        <div class="col-8">
          <ContactDetails :contact="routeContact" />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <ContactForm @onSubmit="addContact" />
        </div>
      </div>
    </div>
  </span>
</template>

<script>
import ContactList from '../components/ContactList.vue';
import ContactDetails from '../components/ContactDetails.vue';
import ContactForm from '../components/ContactForm.vue';

export default {
  components: {
    ContactList,
    ContactDetails,
    ContactForm
  },
  data() {
    return {
      contacts: [
        {
          id: 1,
          first_name: 'John',
          last_name: 'Doe',
          email: 'johndoe@example.com',
          number: '555-12345'
        },
        {
          id: 2,
          first_name: 'Pera',
          last_name: 'Peric',
          email: 'peraperic@example.com',
          number: '555-54321'
        },
        {
          id: 3,
          first_name: 'Sava',
          last_name: 'Katic',
          email: 'sava.k@example.com',
          number: '555-67890'
        }
      ]
    };
  },
  computed: {
    routeContact() {
      return this.contacts.find(contact => contact.id == this.$route.params.id);
    }
  },
  methods: {
    addContact(contact) {
      console.log(contact); // eslint-disable-line
      this.contacts.push(contact);
    }
  }
};
</script>
