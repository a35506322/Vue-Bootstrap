<template>
  <div class="container mt-5 d-flex justify-content-center">
      <button type="button" class="btn btn-primary" v-on:click="openModal">{{text}}</button>
  </div>
  <div ref="modal" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">我是Modal</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="d-grid gap-2">
            <button type="button" class="btn btn-warning rounded-pill">我是百分之百</button>
          </div>
          <div class="position-relative m-4">
            <div class="progress" style="height: 2px;">
              <div class="progress-bar bg-success" role="progressbar" style="width: 100%;"></div>
            </div>
            <div class="position-absolute top-0 start-50 translate-middle text-success bg-white fw-bold text-center px-2">我綠綠的</div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '../../node_modules/bootstrap/js/dist/modal'

export default {
  data () {
    return {
      text: '打開Modal',
      modal: {}
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  },
  methods: {
    openModal () {
      this.modal.show()
    }
  }
}
</script>
