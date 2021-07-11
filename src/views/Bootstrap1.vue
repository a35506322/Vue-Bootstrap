<template>
  <div class="container pt-3">
    <h1>Bootstrap grid examples</h1>
    <p class="text-secondary">Basic grid layouts to get you familiar with building within the Bootstrap grid system.</p>
    <p>In these examples the <span class="text-danger">.themed-grid-col</span> class is added to the columns to add some theming. This is not a class that is available in Bootstrap by default.</p>
  </div>
  <div class="container pt-3">
    <h1>Five grid tiers</h1>
    <p>There are five tiers to the Bootstrap grid system, one for each range of
      devices we support. Each tier starts at a minimum viewport size and automatically
      applies to the larger devices unless overridden.</p>
    <div class="row mb-3">
      <div class="col-4 pt-3 pb-3 box-purple">col-4</div>
      <div class="col-4 pt-3 pb-3 box-purple">col-4</div>
      <div class="col-4 pt-3 pb-3 box-purple">col-4</div>
    </div>
    <div class="row mb-3">
      <div class="col-sm-4 pt-3 pb-3 box-purple">col-sm-4</div>
      <div class="col-sm-4 pt-3 pb-3 box-purple">col-sm-4</div>
      <div class="col-sm-4 pt-3 pb-3 box-purple">col-sm-4</div>
    </div>
    <div class="row mb-3">
      <div class="col-md-4 pt-3 pb-3 box-purple">col-4</div>
      <div class="col-md-4 pt-3 pb-3 box-purple">col-4</div>
      <div class="col-md-4 pt-3 pb-3 box-purple">col-4</div>
    </div>
    <div class="row mb-3">
      <div class="col-lg-4 pt-3 pb-3 box-purple">col-lg-4</div>
      <div class="col-lg-4 pt-3 pb-3 box-purple">col-lg-4</div>
      <div class="col-lg-4 pt-3 pb-3 box-purple">col-lg-4</div>
    </div>
    <div class="row mb-3">
      <div class="col-xl-4 pt-3 pb-3 box-purple">col-xl-4</div>
      <div class="col-xl-4 pt-3 pb-3 box-purple">col-xl-4</div>
      <div class="col-xl-4 pt-3 pb-3 box-purple">col-xl-4</div>
    </div>
    <div class="row mb-3">
      <div class="col-xxl-4 pt-3 pb-3 box-purple">col-xxl-4</div>
      <div class="col-xxl-4 pt-3 pb-3 box-purple">col-xxl-4</div>
      <div class="col-xxl-4 pt-3 pb-3 box-purple">col-xxl-4</div>
    </div>
  </div>
  <div class="container pt-3">
    <h1>Three equal columns</h1>
    <p>Get three equal-width columns <span class="text-dark">starting at desktops and scaling to large desktops.</span> On mobile devices,
      tablets and below, the columns will automatically stack.</p>
    <div class="row mb-3">
      <div class="col-md-4 pt-3 pb-3 box-purple">col-md-4</div>
      <div class="col-md-4 pt-3 pb-3 box-purple">col-md-4</div>
      <div class="col-md-4 pt-3 pb-3 box-purple">col-md-4</div>
    </div>
  </div>
  <div class="container pt-3">
    <h1>Three equal columns alternative</h1>
    <p>By using the <span class="text-danger"> .row-cols-* </span>classes, you can easily create a grid with equal columns.</p>
    <div class="row row-cols-3">
      <div class="col pt-3 pb-3 box-purple">col child of .row-cols-md-3</div>
      <div class="col pt-3 pb-3 box-purple">col child of .row-cols-md-3</div>
      <div class="col pt-3 pb-3 box-purple">col child of .row-cols-md-3</div>
    </div>
  </div>
  <div class="container pt-3">
    <h1>Three unequal columns</h1>
    <p>Get three columns starting at desktops and scaling to large desktops of various widths. Remember, grid columns should add up to twelve for a single horizontal block. More than that, and columns start stacking no matter the viewport.</p>
    <div class="row">
      <div class="col-md-3 pt-3 pb-3 box-purple">col-md-3</div>
      <div class="col-md-6 pt-3 pb-3 box-purple">col-md-6</div>
      <div class="col-md-3 pt-3 pb-3 box-purple">col-md-3</div>
    </div>
  </div>
  <div class="container pt-3">
    <h1>Two columns</h1>
    <p>Get two columns starting at desktops and scaling to large desktops.</p>
    <div class="row">
      <div class="col-md-8 pt-3 pb-3 box-purple">col-md-8</div>
      <div class="col-md-4 pt-3 pb-3 box-purple">col-md-4</div>
    </div>
  </div>
  <div class="container pt-3">
    <h1>Full width, single column</h1>
    <p class="text-warning">No grid classes are necessary for full-width elements.</p>
    <hr/>
  </div>
  <div class="container pt-3">
    <h1>Two columns with two nested columns</h1>
    <p>Per the documentation, nesting is easy—just put a row of columns within an existing column. This gives you two columns starting at desktops and scaling to large desktops, with another two (equal widths) within the larger column.</p>
    <p>At mobile device sizes, tablets and down, these columns and their nested columns will stack.</p>
    <div class="row">
      <div class="col-md-8 pt-3 pb-3 box-purple">col-md-8
        <div class="row">
          <div class="col-md-6 pt-3 pb-3 box-purple">col-md-6</div>
          <div class="col-md-6 pt-3 pb-3 box-purple">col-md-6</div>
        </div>
      </div>
      <div class="col-md-4 pt-3 pb-3 box-purple">col-md-4</div>
    </div>
    <hr/>
  </div>
  <div class="container pt-3">
    <h1>Two columns with two nested columns</h1>
    <p>Per the documentation, nesting is easy—just put a row of columns within an existing column. This gives you two columns starting at desktops and scaling to large desktops, with another two (equal widths) within the larger column.</p>
    <p>At mobile device sizes, tablets and down, these columns and their nested columns will stack.</p>
    <div class="row">
      <div class="col-md-8 pt-3 pb-3 box-purple">col-md-8
        <div class="row">
          <div class="col-md-6 pt-3 pb-3 box-purple">col-md-6</div>
          <div class="col-md-6 pt-3 pb-3 box-purple">col-md-6</div>
        </div>
      </div>
      <div class="col-md-4 pt-3 pb-3 box-purple">col-md-4</div>
    </div>
    <hr/>
  </div>
  <div class="container pt-3">
    <h1>Mixed: mobile and desktop</h1>
    <p>The Bootstrap v4 grid system has five tiers of classes: xs (extra small, this class infix is not used), sm (small), md (medium), lg (large), and xl (extra large). You can use nearly any combination of these classes to create more dynamic and flexible layouts.</p>
    <p>Each tier of classes scales up, meaning if you plan on setting the same widths for md, lg and xl, you only need to specify md.</p>
    <div class="row">
      <div class="col-md-12">
        <div class="row mt-3">
          <div class="col-md-8 pt-3 pb-3 box-purple">col-md-8</div>
          <div class="col-6 col-md-4 pt-3 pb-3 box-purple">col-6 col-md-4</div>
        </div>
        <div class="row mt-3">
          <div class="col-6 col-md-4 pt-3 pb-3 box-purple">col-6 col-md-4</div>
          <div class="col-6 col-md-4 pt-3 pb-3 box-purple">col-6 col-md-4</div>
          <div class="col-6 col-md-4 pt-3 pb-3 box-purple">col-6 col-md-4</div>
        </div>
        <div class="row mt-3">
          <div class="col-6 pt-3 pb-3 box-purple">col-6</div>
          <div class="col-6 pt-3 pb-3 box-purple">col-6</div>
        </div>
      </div>
    </div>
    <hr/>
  </div>
  <div class="container pt-3">
    <h1>Mixed: mobile, tablet, and desktop</h1>
    <div class="row">
      <div class="col-md-12">
        <div class="row mt-3">
          <div class="col-sm-6 col-lg-8 pt-3 pb-3 box-purple">col-sm-6 col-lg-8</div>
          <div class="col-6 col-lg-4 pt-3 pb-3 box-purple">col-6 .col-lg-4</div>
        </div>
        <div class="row mt-3">
          <div class="col-6 col-sm-4 py-3 box-purple">col-6 col-sm-4</div>
          <div class="col-6 col-sm-4 py-3 box-purple">col-6 col-sm-4</div>
          <div class="col-6 col-sm-4 py-3 box-purple">col-6 col-sm-4</div>
        </div>
      </div>
    </div>
    <hr/>
  </div>
  <div class="container pt-3">
    <h1>Gutters</h1>
    <p>With .gx-* classes, the horizontal gutters can be adjusted.</p>
    <div class="row">
      <div class="col gx-4 py-3 box-purple">col gx-4</div>
      <div class="col gx-4 py-3 box-purple">col gx-4</div>
      <div class="col gx-4 py-3 box-purple">col gx-4</div>
    </div>
    <div class="row">
      <div class="col gx-4 py-3 box-purple">col gx-4</div>
      <div class="col gx-4 py-3 box-purple">col gx-4</div>
      <div class="col gx-4 py-3 box-purple">col gx-4</div>
    </div>
    <p class="pt-3">Use the .gy-* classes to control the vertical gutters.</p>
    <div class="row">
      <div class="col gy-4 py-3 box-purple">col gy-4</div>
      <div class="col gy-4 py-3 box-purple">col gy-4</div>
      <div class="col gy-4 py-3 box-purple">col gy-4</div>
    </div>
    <div class="row">
      <div class="col gy-4 py-3 box-purple">col gy-4</div>
      <div class="col gy-4 py-3 box-purple">col gy-4</div>
      <div class="col gy-4 py-3 box-purple">col gy-4</div>
    </div>
    <p class="pt-3">With .g-* classes, the gutters in both directions can be adjusted.</p>
    <div class="row">
      <div class="col g-3 py-3 box-purple">col g-3</div>
      <div class="col g-3 py-3 box-purple">col g-3</div>
      <div class="col g-3 py-3 box-purple">col g-3</div>
    </div>
    <div class="row">
      <div class="col g-3 py-3 box-purple">col g-3</div>
      <div class="col g-3 py-3 box-purple">col g-3</div>
      <div class="col g-3 py-3 box-purple">col g-3</div>
    </div>
    <hr/>
  </div>
  <div class="container pt-3">
    <h1>Containers</h1>
    <p>Additional classes added in Bootstrap v4.4 allow containers that are 100% wide until a particular breakpoint. v5 adds a new xxl breakpoint.</p>
    <div class="row">
      <div class="col gy-3">
        <div class="container container-blue py-3">.container</div>
      </div>
    </div>
    <div class="row">
      <div class="col gy-3">
        <div class="container-sm container-blue py-3">.container-sm</div>
      </div>
    </div>
    <div class="row">
      <div class="col gy-3">
        <div class="container-md container-blue py-3">.container-md</div>
      </div>
    </div>
    <div class="row">
      <div class="col gy-3">
        <div class="container-lg container-blue py-3">.container-lg</div>
      </div>
    </div>
    <div class="row">
      <div class="col gy-3">
        <div class="container-xl container-blue py-3">.container-xl</div>
      </div>
    </div>
    <div class="row">
      <div class="col gy-3">
        <div class="container-xxl container-blue py-3">.container-xxl</div>
      </div>
    </div>
  </div>
  <div class="container-fluid container-blue py-3 mt-3">container-fluid</div>
</template>

<style scoped>
  .box-purple {
    background-color: rgba(86, 61, 124, .15);
    border: 1px rgba(86, 61, 124, .15) solid;
  }

  .container-blue {
    background-color:rgba(0, 123, 255, .15);
    border: 1px rgba(0, 123, 255, .15) solid;
  }
</style>
