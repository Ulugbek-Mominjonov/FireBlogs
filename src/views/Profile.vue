<template>
  <div class="profile">
    <Modal v-if="modalActive" :modalMessage="modalMessage" @close-modal="closeModal"/>
    <div class="container">
      <h2>Account Settings</h2>
      <div class="profile-info">
        <div class="initials">{{ this.$store.state.profileInitials}}</div>
        <div class="admin-badge">
          <adminIcon class="icon"/>
          <span>admin</span>
        </div>
        <div class="input">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" v-model="firstName">
        </div>
        <div class="input">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" v-model="lastName">
        </div>
        <div class="input">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username">
        </div>
        <div class="input">
          <label for="email">Email:</label>
          <input type="text" id="email" v-model="email">
        </div>
        <button>Save Changes</button>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
import adminIcon from '../assets/Icons/user-crown-light.svg';
  export default {
    name: "Profile",
    components: {
      Modal,
      adminIcon
    },
    data() {
      return {
        modalMessage: "Changes were saved",
        modalActive: null
      }
    },
    methods: {
      closeModal() {
        this.modalActive = !this.modalActive;
      }
    }
  }
</script>

<style lang="scss" scoped>
.profile {
  .container {
    max-width: 1000px;
    padding: 60px 25px;

    h2 {
      margin-bottom: 16px;
      text-align: center;
      font-weight: 300;
      font-size: 32px;
    }

    .profile-info {
      display: flex;
      flex-direction: column;
      max-width: 600px;
      margin: 32px auto;
      padding: 32px;
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      background: #f1f1f1;

      .initials {
        position: initial;
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        align-self: center;
        font-size: 32px;
        justify-content: center;
        color: #fff;
        background-color: #303030;
        border-radius: 50%;
      }
      
      .admin-badge {
        display: flex;
        align-self: center;
        margin: 16px 0;
        padding: 8px 24px;
        color: #fff;
        font-size: 14px;
        border-radius: 8px;
        background-color: #303030;
        text-align: center;
        text-transform: capitalize;
      }

      .icon {
        width: 14px;
        height: auto;
        margin-right: 8px;
      }

      .input {
        margin: 16px 0;

        label {
          display: block;
          padding-bottom: 6px;
          font-size: 14px;
        }

        input {
          width: 100%;
          padding: 8px;
          height: 50px;
          border: none;
          background-color: #f2f7f6;

          &:focus {
            outline: none;
          }
        }
      }

      button {
        align-self: center;
      }
    }
  }
}
</style>