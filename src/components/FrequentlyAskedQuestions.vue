<template>
  <div class="col-12">
    <ul class="list-unstyled" ref="questionsUl">
      <li v-for="(question, index) in product.questions" v-bind:key="'key'+index" class="mt-3">
        <div class="d-grid">
          <button class="btn border border-grays-100 rounded p-3 d-flex justify-content-start align-items-center box-shadow-none" type="button"  data-bs-toggle="collapse"
          v-bind:data-bs-target="`#answer${ index+1 }`"  v-on:click="toggleRotate180(`chevronUp${ index+1 }`)">
            <div class="flex-grow-1  d-flex justify-content-start align-items-center">
              <span class="bg-light-yellow rounded p-1 fw-bold">{{`Q${index+1}`}}</span>
              <h5 class="text-muted mb-0 ms-3">{{question.topic}}</h5>
            </div>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-up transition-transform-02" viewBox="0 0 16 16" v-bind:ref="`chevronUp${ index+1 }`">
              <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
            </svg>
            </span>
          </button>
        </div>
        <div class="collapse multi-collapse" v-bind:id="`answer${ index+1 }`">
          <div class="card card-body border-top-0 rounded-0 rounded-bottom">
            {{question.answer}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Collapse from '../../node_modules/bootstrap/js/dist/collapse'
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
      collapseList: []
    }
  },
  mounted () {
    // collapse轉成就可以使用了Bs物件就可以使用了
    // 在折疊的按鈕加上 data-bs-toggle="collapse"
    // data-bs-target = 需要collapse的id
    const collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
    this.collapseList = collapseElementList.forEach((collapse, index) => {
      return new Collapse(collapse, {
        toggle: false,
        // 在這父元素裡面只有一個可以被折疊
        parent: this.$refs.questionsUl
      })
    })
  },
  methods: {
    toggleRotate180 (id) {
      this.$refs[id].classList.toggle('rotate-180')
    }
  }
}
</script>
