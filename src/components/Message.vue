<template>
<div class="col-12">
  <div class="border-start border-3  border-light-yellow bg-light rounded p-3 mb-4">
    <h5 class="fw-bold text-center m-0">只有本專案的贊助者才可以留言哦，如果有任何專案相關的問題，歡迎<span class="text-danger">聯絡提案人</span>！</h5>
  </div>
  <ul class="list-unstyled">
    <li class="border border-1  border-gray-200 rounded p-3 mb-4" v-for="(message, index) in messages" v-bind:key="'key'+index">
      <div class="d-flex align-items-center mb-2">
          <img v-bind:src="`${publicPath}${message.photoStickerImageSrc}`" alt="" class="border border-1 border-light-yellow rounded-circle">
          <span class="ms-2">
          <h5 class="fw-bold mb-0">{{message.questioner}}</h5>
          <p class="text-secondary mb-0">{{message.questionTime}}</p>
          </span>
      </div>
      <article class="fw-bold mb-2">
        {{message.question}}
      </article>
      <template v-if="message.responses.length>0">
        <div class="bg-light rounded p-3" v-for="(response, index) in message.responses" v-bind:key="'key'+index">
          <h6 class="text-danger fw-bold">{{response.questioner}}回覆:</h6>
          <article class="fw-bold mb-2">
          {{response.answer}}
          </article>
        </div>
      </template>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  inject: ['publicPath'],
  data () {
    return {
      messages: [
        {
          questionId: '01',
          photoStickerImageSrc: 'image/user_img02.jpg',
          questioner: '許廷煥',
          questionTime: '2020年5月22日 11:32',
          question: '晚上起床上廁所看到照片裡的人一直動其實有點恐怖，希望可以有暫停或是定時的功能！',
          responses: [
            {
              questioner: '提案者',
              answer: '你要嘛起床的時候開燈，要嘛給我們更多錢開發阿'
            }
          ]
        },
        {
          questionId: '02',
          photoStickerImageSrc: 'image/user_img02.jpg',
          questioner: '許廷煥',
          questionTime: '2020年5月22日 11:32',
          question: '晚上起床上廁所看到照片裡的人一直動其實有點恐怖，希望可以有暫停或是定時的功能！',
          responses: [
            {
              questioner: '提案者',
              answer: '你要嘛起床的時候開燈，要嘛給我們更多錢開發阿'
            }
          ]
        },
        {
          questionId: '03',
          photoStickerImageSrc: 'image/user_img02.jpg',
          questioner: '許廷煥',
          questionTime: '2020年5月22日 11:32',
          question: '晚上起床上廁所看到照片裡的人一直動其實有點恐怖，希望可以有暫停或是定時的功能！',
          responses: [
          ]
        },
        {
          questionId: '04',
          photoStickerImageSrc: 'image/user_img02.jpg',
          questioner: '許廷煥',
          questionTime: '2020年5月22日 11:32',
          question: '晚上起床上廁所看到照片裡的人一直動其實有點恐怖，希望可以有暫停或是定時的功能！',
          responses: [
            {
              questioner: '提案者',
              answer: '你要嘛起床的時候開燈，要嘛給我們更多錢開發阿'
            }
          ]
        }
      ]
    }
  }
}
</script>
