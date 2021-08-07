<template>
  <ul class="list-unstyled">
    <li v-for="(progress, index ) in product.currentProgress" v-bind:key="'key'+index" class="mb-4">
      <div class="row border border-grays-100 rounded">
        <div class="col-6 col-md-4 ps-0">
          <img v-bind:src="`${publicPath}image/news0${index+1}.jpg`" class="rounded-start" alt="">
        </div>
        <div class="col-6 col-md-8 px-0 py-3">
          <h6 class="fw-bold mb-1">{{progress.topic}}|{{progress.subtitle}}</h6>
          <p class="text-muted mb-1">{{progress.activityTime}}</p>
          <p class="text-muted mb-1 d-none d-md-block">{{progress.content}}</p>
          <span class="fw-bold text-danger">More</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  inject: ['publicPath'],
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
      }
    }
  }
}
</script>
