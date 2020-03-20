<template>
  <span>
    <Loading :active.sync="isLoading" :can-cancel="false" :is-full-page="true"></Loading>
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <ContactList :contacts="contacts" />
        </div>
        <div class="col-8">
          <ContactDetails :contact="routeContact" @onDelete="deleteContact" />
        </div>
      </div>
    </div>
  </span>
</template>

<script>
import ContactList from '../components/ContactList.vue';
import ContactDetails from '../components/ContactDetails.vue';
import { contacts } from '../services/Contacts.js';
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  components: {
    ContactList,
    ContactDetails,
    Loading
  },
  data() {
    return {
      contacts: [],
      isLoading: false
    };
  },
  computed: {
    routeContact() {
      return this.contacts.find(contact => contact.id == this.$route.params.id);
    }
  },
  methods: {
    addContact(contact) {
      this.contacts.push(contact);
    },
    deleteContact(id) {
      let index = this.contacts.findIndex(contact => contact.id === id);
      this.contacts.splice(index, 1);
    }
  },
  created() {
    this.isLoading = true;
    contacts.getAll().then(response => {
      this.isLoading = false;
      this.contacts = response.data;
    });
  }
};
</script>