<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="(item,index) in blogs" v-bind:key="'key'+index">
              <a class="nav-link link-secondary fw-bold active" data-bs-toggle="collapse" href="#" v-on:click.prevent="collapseToggle(item.id)">{{item.id}}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <template v-for="(item,index) in blogs" v-bind:key="'key'+index">
      <div class="collapse collapse-div" v-bind:id="item.id">
        <div class="card card-body">
          <img v-bind:src="item.imgSrc" alt="">
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Collapse from '../../node_modules/bootstrap/js/dist/collapse'

export default {
  data () {
    return {
      blogs: [
        {
          id: 'HOME',
          imgSrc: 'https://fakeimg.pl/350x200/?text=Home'
        },
        {
          id: 'ABOUT',
          imgSrc: 'https://fakeimg.pl/350x200/?text=ABOUT'
        },
        {
          id: 'ABLUM',
          imgSrc: 'https://fakeimg.pl/350x200/?text=ABLUM'
        }
      ],
      collapseList: []
    }
  },
  mounted () {
    // slice 會淺複製
    // call 使用函數(裡面放物件陣列給這函數使用)
    // 原本打法
    // var collapseElementList = document.querySelectorAll('.collapse-div')
    // var collapseList = collapseElementList.slice()
    var collapseElementList = [].slice.call(document.querySelectorAll('.collapse-div'))
    this.collapseList = collapseElementList.map(function (element, index) {
      return new Collapse(element, {
        // 預防一開始全部開啟
        toggle: false
      })
    })
  },
  methods: {
    collapseToggle (id) {
      // 預防重疊
      this.collapseList.forEach((element) => {
        element.hide()
      })
      const collapseHtml = this.collapseList.find(element => element._element.id === id)
      collapseHtml.show()
    }
  }
}
</script>
