<template>
  <div class="modal" tabindex="-1" ref="loginModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">登入</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="account" class="form-label fw-bold">帳號</label>
            <input type="email" class="form-control" id="account" v-model="login.account" placeholder="請輸入帳號">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label fw-bold">密碼</label>
            <input type="email" class="form-control" id="password"  v-model="login.password" placeholder="請輸入密碼">
          </div>
          <div class="mb-3">
            <a href="#" class="link-secondary text-decoration-none">忘記密碼?</a>
          </div>
          <div class="mb-3">
            <div class="d-grid">
              <button type="button" class="btn btn-light-yellow  rounded-pill fw-bold text-white py-2">登入</button>
            </div>
          </div>
          <div class="mt-5">
            <div class="position-relative">
              <div class="progress" style="height: 1px;">
                <div class="progress-bar bg-secondary" role="progressbar" style="width: 100%;">
                </div>
              </div>
              <div class="position-absolute position-absolute top-50 start-50 translate-middle p-2">
                <span href="#" class="text-nowrap text-secondary badge bg-white">
                  還沒有帳號？<a href="#" class="link-danger text-decoration-none">註冊一個帳號忘記密碼</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '../../node_modules/bootstrap/js/dist/modal.js'
export default {
  data () {
    return {
      modal: {},
      login: {
        account: '',
        password: ''
      }
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.loginModal)
  },
  methods: {
    show () {
      this.initData(this.login)
      this.modal.show()
    },
    close () {
      this.modal.close()
    },
    initData (obj) {
      for (const key in obj) {
        obj[key] = ''
      }
    }
  }
}
</script>
