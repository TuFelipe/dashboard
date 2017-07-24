<template>
<header class="demo-header mdl-layout__header mdl-color--blue-800 mdl-color-text--white">
  <div class="mdl-layout__header-row">
    <span class="mdl-layout-title">{{ title }}</span>
    <div class="mdl-layout-spacer"></div>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
      <label class="mdl-button mdl-js-button mdl-button--icon" for="search">
        <i class="material-icons">search</i>
      </label>
      <div class="mdl-textfield__expandable-holder">
        <input class="mdl-textfield__input" type="text" id="search">
        <label class="mdl-textfield__label" for="search">O que procura?</label>
      </div>
    </div>
    <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
      <i class="material-icons">more_vert</i>
    </button>
    <ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" for="hdrbtn">
      <li class="mdl-menu__item">Sair</li>
    </ul>
  </div>
</header>
</template>

<script>
export default {
        props: ['title'],
    }
</script>

<style lang="scss">
.demo-avatar {
  width: 50px;
  height: 50px;
  border-radius: 4px;
  margin-bottom: 1em;
  display: inline-block;
}
.demo-layout .mdl-layout__header .mdl-layout__drawer-button {
  color: rgba(0, 0, 0, 0.54);
}
.mdl-layout__drawer .avatar {
  margin-bottom: 16px;
}
.demo-drawer {
  border: none;
}
/* iOS Safari specific workaround */
.demo-drawer .mdl-menu__container {
  z-index: -1;
}
.demo-drawer .demo-navigation {
  z-index: -2;
}
/* END iOS Safari specific workaround */
.demo-drawer .mdl-menu .mdl-menu__item {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
}
.demo-drawer-header {
  box-sizing: border-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  padding: 16px;
  height: 151px;
}
.demo-avatar-dropdown {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  -webkit-flex-direction: row;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100%;
}
</style>
