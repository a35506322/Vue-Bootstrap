<template ref="sponsorshipForm">
  <div class="col-12 mt-5">
    <div class="row mb-3">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <span class="">
          <img v-bind:src="`${publicPath}image/icon_heart.svg`" alt="愛心" style="max-width:43px;">
        </span>
      </div>
    </div>
    <div class="row mb-5">
      <div class="position-relative" style="z-index:-1">
        <div class="progress" style="height: 3px;">
          <div class="progress-bar bg-light-yellow" role="progressbar" style="width: 100%;"></div>
        </div>
        <h4 class="position-absolute top-0 start-50 translate-middle bg-white rounded-pill px-4 fw-bold">贊助方案</h4>
      </div>
    </div>
    <form>
      <div class="mb-3">
        <label for="sponsorshipProgram " class="form-label f">贊助方案</label>
        <select class="form-select" id="sponsorshipProgram">
          <option value="" disabled>請選擇贊助方案</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="recipientName" class="form-label">收件人姓名</label>
        <input type="text" class="form-control" id="recipientName" placeholder="" v-model="sponsorship.recipientName">
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">聯絡電話</label>
        <input type="text" class="form-control" id="phone" placeholder="" v-model="sponsorship.phone">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">聯絡信箱</label>
        <input type="email" class="form-control" id="email" placeholder="" v-model="sponsorship.email">
      </div>
      <div class="mb-3">
        <label for="paymentMmethod" class="form-label">付款方式</label>
        <select class="form-select" id="paymentMmethod"  v-model="sponsorship.paymentMmethod">
          <option value="" disabled>請選擇付款方式</option>
        </select>
      </div>
      <div class="mb-3 d-flex justify-content-center align-items-center">
        <button type="button" class="btn btn-light-yellow rounded-pill px-5 fw-bold">贊助專案</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  inject: ['publicPath'],
  data () {
    return {
      sponsorship: {}
    }
  },
  mounted () {
    // offsetTop 當前元素在此葉面scllohight的高度
    this.$emit('update-offsetTop', this.$el.offsetTop)
  },
  watch: {
    // 監聽route
    $route (to, from) {
      console.log(this.$el.top)
      this.$emit('update-offsetTop', this.$el.offsetTop)
    }
  }
}
</script>
