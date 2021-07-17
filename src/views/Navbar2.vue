<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-auto">
        <ul class="nav nav-tabs bg-dark">
          <li class="nav-item"   v-for="(item,index) in blogs" v-bind:key="'key'+index">
            <a class="nav-link fw-bold link-secondary" v-bind:class="{'active':index===0}" data-bs-toggle="tab"
              v-bind:data-bs-target="'#'+item.id" type="button" role="tab">{{item.id}}</a>
          </li>
        </ul>
        <div class="tab-content">
            <div class="tab-pane fade" v-bind:class="{'show':index===0,'active':index===0}" v-for="(item,index) in blogs" v-bind:key="'key'+index"  v-bind:id="item.id">
              <img v-bind:src="item.imgSrc" alt="">
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from '../../node_modules/bootstrap/js/dist/tab'

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
    var triggerTabList = [].slice.call(document.querySelectorAll('.nav > .nav-tabs > button'))
    triggerTabList.forEach(function (triggerEl) {
      var tabTrigger = new Tab(triggerEl)

      triggerEl.addEventListener('click', function (event) {
        event.preventDefault()
        tabTrigger.show()
      })
    })
  }
}
</script>
