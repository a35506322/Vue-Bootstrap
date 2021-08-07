<template>
  <nav class="navbar navbar-expand-md">
    <div class="container-fluid">
      <img v-bind:src="`${publicPath}image/logo.jpg`" alt="公司Logo" style="max-width:111px;max-heigh:40px" class="navbar-brand">
      <div class="row d-flex d-md-none justify-content-end">
        <button class="navbar-toggler navbar-dark bg-light-yellow" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="row collapse navbar-collapse" id="navbarSupportedContent">
        <div class="col-md-7 d-flex justify-content-start align-items-center">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="#" class="nav-link link-dark fw-bold p-3">關於</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link link-dark fw-bold p-3">挖寶</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link link-dark fw-bold p-3">我有個大膽的想法</a>
              </li>
            </ul>
          </div>
          <div class="col-md-5 d-md-flex justify-content-end">
            <button type="button" class="btn btn-light-yellow rounded-pill fw-bold px-4 ms-3" v-on:click="openLogin">登入</button>
            <button type="button" class="btn btn-outline-light-gray border-light-gray  fw-bold rounded-pill px-4 ms-3">登出</button>
          </div>
      </div>
    </div>
  </nav>
  <login-modal ref="loginModal"></login-modal>
</template>

<script>
import LoginModal from '../components/LoginModal.vue'
import Collapse from '../../node_modules/bootstrap/js/dist/collapse'
export default {
  inject: ['publicPath'],
  data () {
    return {
      collapseList: []
    }
  },
  components: {
    LoginModal
  },
  mounted () {
    var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
    this.collapseList = collapseElementList.map(function (collapseEl) {
      return new Collapse(collapseEl)
    })
  },
  methods: {
    openLogin () {
      this.$refs.loginModal.show()
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar-toggler:focus {
    box-shadow: 0 0 0 0rem;
}
</style>
