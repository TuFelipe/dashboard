<template>
  <div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header" id="app">
    <dash-header title=""></dash-header>
    <div class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
      <dash-menu></dash-menu>
      <router-view></router-view>
    </div>
    <router-view name="content"></router-view>
  </div>
</template>

<script>
import DashHeader from './modules/layout/Header.vue';
import DashMenu from './modules/layout/Menu.vue';
export default {
  name: 'app',
  components: {
    DashHeader, DashMenu
  }
}
</script>

<style lang="scss">
/* Hide ScrollBars */
 ::-webkit-scrollbar {display: none;}

html, body {
  font-family: 'Roboto', 'Helvetica', sans-serif;
  -ms-scrollbar: none;
  -moz-scrollbars: none;
}

a{
  color: inherit;
  text-decoration: none;
}

a:visited{
  color: inherit;
  text-decoration: none;
}

a:link{
  color: inherit;
  text-decoration: none;
}

a:hover{
  color: inherit;
  text-decoration: none;

}

a:active{
  color: inherit;
  text-decoration: none;
}

.demo-navigation {
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
}
.demo-layout .demo-navigation .mdl-navigation__link {
  display: -webkit-flex !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-flex-direction: row;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  color: white;
  font-weight: 500;
  cursor: pointer;
  border-right: 0.3em solid #ffc821;
}
.demo-layout .demo-navigation .mdl-navigation__link:hover {
  background-color: white;
  color: #242f34;
}
.demo-navigation .mdl-navigation__link .material-icons {
  font-size: 24px;
  margin-right: 32px;
}

</style>
