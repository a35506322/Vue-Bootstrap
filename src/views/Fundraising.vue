<template>
  <header>
    <div class="container my-3">
      <nav-bar></nav-bar>
    </div>
    <div class="bg-light-yellow" style="height:5px">
    </div>
  </header>
  <main class="position-relative">
    <div class="bg-light">
      <div class="container pt-5">
        <div class="row">
          <div class="col-12">
            <span class="badge bg-light-gray fw-bold">{{product.class}}</span>
          </div>
          <div class="col-12">
            <h2 class="fw-bold py-2">{{product.secondaryTitle}}｜{{product.mainTitle}}</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7 mb-5 mb-lg-0">
            <img v-bind:src="publicPath+product.imageSrc" alt="產品圖片" style="border-radius:2rem;" class="img-fluid">
          </div>
          <div class="col-lg-5 mb-5 mb-lg-0">
            <p class="text-light-gray fw-bold">目標價{{product.targetPrice}}</p>
            <h2 class="fw-bold">${{product.reachedPrice}}</h2>
            <div class="progress mb-3">
              <div class="progress-bar bg-light-yellow" role="progressbar" v-bind:style="{'width': `${fundrasingProgress}%`}">
                <span> {{ fundrasingProgress }}%</span>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <p class="text-light-gray fw-bold">贊助人數</p>
                <h4>{{product.sponsors}}人</h4>
              </div>
              <div class="col-lg-6">
                <p class="text-light-gray fw-bold">募資倒數</p>
                  <h4>{{dayDiff(product.deadline)}}天</h4>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-12">
                <span class="me-3">
                  <img v-bind:src="`${publicPath}image/icon_good01.svg`" alt="" style="max-width:24px;">
                </span>
                <span class="me-3">
                  <img v-bind:src="`${publicPath}image/icon_good02.svg`" alt="" style="max-width:24px;">
                </span>
                <span class="me-3">
                  <img v-bind:src="`${publicPath}image/icon_good03.svg`" alt="" style="max-width:24px;">
                </span>
                <span class="me-3">
                  <img v-bind:src="`${publicPath}image/icon_good04.svg`" alt="" style="max-width:24px;">
                </span>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-12 bg-white p-3 rounded">
                <span>專案募資中！</span><br>
                <span>在 {{product.deadline}} 募資結束前，您都可以贊助我們！</span>
              </div>
            </div>
            <div class="row justify-content-between">
              <div class="d-grid gap-2 col-12 mb-2">
                <button type="button" class="btn btn-light-yellow rounded-pill py-2 fw-bold">贊助專案</button>
              </div>
              <div class="d-grid gap-2 col-7">
                  <button type="button" class="btn btn btn-outline-light-gray rounded-pill py-2 fw-bold">追蹤專案</button>
              </div>
              <div class="d-grid gap-2 col-5">
                  <button type="button" class="btn btn btn-outline-light-gray rounded-pill py-2 fw-bold">分享</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border border-2 border-light position-sticky top-0 bg-white" style="z-index:1100">
      <div class="container fw-bold">
        <ul class="nav">
          <li class="nav-item">
            <router-link  v-slot="{ href, isActive }" to="/fundraising/project_introduction">
              <a class="nav-link link-dark py-md-4 questions-hover active"  data-bs-toggle="tab" v-bind:class="{'questions-active': isActive}" v-bind:href="href">專案介紹</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link  v-slot="{ href, isActive }" to="/fundraising/frequently_asked_questions">
              <a class="nav-link link-dark py-md-4 questions-hover"  data-bs-toggle="tab" v-bind:class="{'questions-active': isActive}" v-bind:href="href">常見問答</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link  v-slot="{ href, isActive }" to="/fundraising/current_progress">
              <a class="nav-link link-dark py-md-4 questions-hover"  data-bs-toggle="tab" v-bind:class="{'questions-active': isActive}" v-bind:href="href">目前進度</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link  v-slot="{ href, isActive }" to="/fundraising/message">
              <a class="nav-link link-dark py-md-4 questions-hover"  data-bs-toggle="tab" v-bind:class="{'questions-active': isActive}" v-bind:href="href">留言</a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="container py-5">
      <div class="row content">
        <div class="col-lg-8 gx-5">
          <div class="row list-nav">
            <router-view></router-view>
            <sponsorship-form v-if="screen.width>992" v-on:update-offsetTop="updateOffsetTop"></sponsorship-form>
          </div>
        </div>
        <div class="col-12 col-lg-4 gx-5">
          <div class="row sticky-top">
            <div class="col-12 mb-5">
              <div class="row">
                <div class="border border-1 border-light py-3">
                  <div class="col-12 mb-3">
                    <div class="row d-flex justify-content-start align-items-center">
                      <div class="col-4">
                        <img v-bind:src="`${publicPath}image/store_img.jpg`" alt="" class="border border-1 border-light-yellow rounded-circle">
                      </div>
                      <div class="col-8 pt-3">
                        <h4 class="fw-bold">缺錢事務所</h4>
                        <p class="text-light-gray">已發起 1 個專案</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-3">
                    <h6 class="fw-bold">需要點錢錢做些酷酷的東西，拜託各位乾爹乾媽囉！</h6>
                  </div>
                  <div class="col-12 mb-3">
                    <div class="row">
                      <div class="col-7 d-flex justify-content-start">
                        <button type="button" class="btn btn-sm btn-light-gray rounded-circle me-2 d-flex justify-content-center align-items-center" style="width:30px;height:30px;">
                          <i class="bi bi-facebook"></i>
                        </button>
                        <button type="button" class="btn btn-sm btn-light-gray rounded-circle me-2 d-flex justify-content-center align-items-center" style="width:30px;height:30px;">
                          <i class="bi bi-youtube"></i>
                        </button>
                      </div>
                      <div class="col-5 d-flex justify-content-end">
                        <button type="button" class="btn btn-sm btn-outline-light-gray rounded-pill px-3">聯絡我們</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 mb-5">
              <div class="border-start border-end border-4 border-light-yellow rounded bg-light d-flex justify-content-center">
                <h3 class="fw-bold m-0 py-1">選擇一個方案來支持</h3>
              </div>
            </div>
            <div class="col-12 mb-5">
              <div class="row g-3">
                <div class="col-12" v-for="(plan, index) in product.preferentialPlans" v-bind:key="'key'+index">
                  <div class="card"  style="border-radius:0.5rem">
                    <img v-bind:src="`${publicPath}${plan.imageSrc}`" class="card-img-top" alt="產品圖片">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-6 text-start">
                          <span class="text-light-gray">限時優惠</span>
                        </div>
                        <div class="col-6 text-end">
                          <span class="text-light-gray">{{ `${dayDiff(plan.offerPeriod)}  days` }}</span>
                        </div>
                      </div>
                      <div class="bg-light mb-2" style="height: 0.1em;"></div>
                      <h5 class="fw-bold">{{plan.offerSolgan}}</h5>
                      <h5 class="fw-bold">NT$ {{plan.price}}</h5>
                      <div class="row mb-2">
                        <div class="col-12 text-start">
                          <span class="badge bg-light text-dark me-2">已被贊助{{plan.sponsorShip}}次</span>
                          <span class="badge bg-light-gray me-2">限量<span class="text-light-yellow">{{plan.limitedCount}}</span>個</span>
                        </div>
                      </div>
                      <p class="card-text text-light-gray letter-spacing-1">{{plan.offerText}}</p>
                      <div class="d-grid">
                        <button type="button" class="btn btn-light-yellow fw-bold">贊助此專案</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <sponsorship-form v-if="screen.width<992" v-on:update-offsetTop="updateOffsetTop"></sponsorship-form>
      </div>
    </div>
    <template v-if="screen.width < 768 && windowScrollTop < sponsorshipFormOffsetTop">
      <div class="container-fluid bg-light-yellow p-3  text-center position-fixed bottom-0 fixed-fundraising" style="z-index:1100" v-on:click="scrollInto">
        <h5 class="mb-0 fw-bold">
          贊助專案
        </h5>
      </div>
    </template>
  </main>
  <footer>
    <div class="bg-light-gray text-white text-center p-3">
      Copyright © 拼拼 All rights reserved.
    </div>
  </footer>
</template>

<script>
import NavBar from '@/components/NvaBar.vue'
import SponsorshipForm from '@/components/SponsorshipForm.vue'

export default {
  data () {
    return {
      product: {
        class: '魔法科技',
        mainTitle: 'LivePhotos 魔法拍立得',
        secondaryTitle: '拍出會動的照片',
        imageSrc: 'image/produt_image.jpg',
        introductionImageSrc1: 'image/p1.jpg',
        introductionTitle1: '施了魔法的照片',
        introductionText1: '受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。',
        introductionImageSrc2: 'image/p2.jpg',
        introductionTitle2: '留下當下的美好',
        introductionText2: '受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。',
        targetPrice: '600000',
        reachedPrice: '280047',
        sponsors: '1374',
        deadline: '2021/08/30',
        currentProgress: [
          {
            topic: '高雄體驗會',
            subtitle: '免費參加送帆布袋',
            activityTime: '2021-6-20',
            content: '大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步 ，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！'
          },
          {
            topic: '高雄體驗會',
            subtitle: '免費參加送帆布袋',
            activityTime: '2021-6-20',
            content: '大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步 ，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！'
          },
          {
            topic: '高雄體驗會',
            subtitle: '免費參加送帆布袋',
            activityTime: '2021-6-20',
            content: '大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步 ，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！'
          }
        ],
        questions: [
          {
            topic: '影片拍完之後可以編輯嗎?',
            answer: '可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！'
          },
          {
            topic: '有提供保固或維修服務嗎?',
            answer: '可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！'
          },
          {
            topic: '補充包底片要去哪裡購買?',
            answer: '可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！'
          },
          {
            topic: '印出來的拍立得照片需要充電嗎?',
            answer: '可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！'
          },
          {
            topic: '運送方式及付款方式有哪些?',
            answer: '可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！'
          },
          {
            topic: '退換貨方式及規則?',
            answer: '可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！'
          }
        ],
        preferentialPlans: [
          {
            imageSrc: 'image/plan_img.jpg',
            offerPeriod: '2021/08/2',
            offerSlogan: '買一送一，只有兩百組別錯過',
            price: 1600,
            sponsorShip: 88,
            limitedCount: 200,
            offerText: '受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。'
          },
          {
            imageSrc: 'image/plan_img.jpg',
            offerPeriod: '2021/08/2',
            offerSlogan: '買一送一，只有兩百組別錯過',
            price: 1600,
            sponsorShip: 88,
            limitedCount: 200,
            offerText: '受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。'
          },
          {
            imageSrc: 'image/plan_img.jpg',
            offerPeriod: '2021/08/2',
            offerSlogan: '買一送一，只有兩百組別錯過',
            price: 1600,
            sponsorShip: 88,
            limitedCount: 200,
            offerText: '受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。'
          }
        ]
      },
      publicPath: process.env.BASE_URL,
      screen: {
        width: 0,
        height: 0
      },
      width: 0,
      windowScrollTop: 0,
      sponsorshipFormOffsetTop: 0
    }
  },
  provide () {
    return {
      publicPath: this.publicPath
    }
  },
  components: {
    // 導覽列
    NavBar,
    // 贊助表格
    SponsorshipForm
  },
  mounted () {
    this.screen.width = window.innerWidth
    this.screen.height = window.innerHeight
    this.windowScrollTop = document.documentElement.scrollTop
    window.onresize = () => {
      this.screen.width = window.innerWidth
      this.screen.height = window.innerHeight
    }
    window.onscroll = () => {
      this.windowScrollTop = document.documentElement.scrollTop
    }
  },
  methods: {
    dayDiff (date) {
      const today = new Date()
      const today2 = new Date(date)
      let result = Number(Math.abs(today2 - today)) / 1000 / 60 / 60 / 24
      result = Math.round(result)
      return result
    },
    scrollInto () {
      // documentElement.scrollTop 設置被滾動的高度/目前滾動高度
      // document.documentElement.scrollHeight
      document.documentElement.scrollTop = document.documentElement.scrollHeight

      // 當documentElement.scrollTop 目前滾動高度 < 元素高度就可以消失
    },
    updateOffsetTop (value) {
      this.sponsorshipFormOffsetTop = value
    }
  },
  computed: {
    fundrasingProgress () {
      return Math.round((this.product.reachedPrice / this.product.targetPrice) * 100)
    }
  }
}
</script>
