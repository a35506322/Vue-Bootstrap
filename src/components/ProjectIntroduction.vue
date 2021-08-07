<template>
  <div class="col-12">
    <img v-bind:src="`${publicPath}${product.introductionImageSrc1}`" alt="產品圖片" style="border-radius:2rem;" class="img-fluid w-100">
    <h3 class="border-4 border-start border-light-yellow fw-bold my-3 ps-2">{{product.introductionTitle1}}</h3>
    <p class="fw-bold">{{product.introductionText1}}</p>
  </div>
  <div class="col-12">
    <img v-bind:src="`${publicPath}${product.introductionImageSrc2}`" alt="產品圖片" style="border-radius:2rem;" class="img-fluid w-100">
    <h3 class="border-4 border-start border-light-yellow fw-bold my-3 ps-2">{{product.introductionTitle1}}</h3>
    <p class="fw-bold">{{product.introductionText2}}</p>
  </div>
</template>

<script>
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
      publicPath: process.env.BASE_URL
    }
  }
}
</script>
