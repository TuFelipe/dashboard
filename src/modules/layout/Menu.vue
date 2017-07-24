<template>
<header class="demo-drawer-header">
  <router-link to="/"><img src="src/build/images/logo.png" class="demo-avatar"></router-link>
  <div class="demo-avatar-dropdown">
    <span>Dashboards</span>
    <div class="mdl-layout-spacer"></div>
    <button id="accbtn" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
      <i class="material-icons" role="presentation">arrow_drop_down</i>
    </button>
    <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="accbtn">
      <router-link to="/comercial"><li class="mdl-menu__item mdl-color-text--blue-grey-900"><i class="material-icons">attach_money&nbsp;</i>Comercial</li></router-link>
      <router-link to="/administrativo"><li class="mdl-menu__item mdl-color-text--blue-grey-900"><i class="material-icons">folder_open&nbsp;</i>Administrativo</li></router-link>
      <!-- <router-link to="/suporten1"><li class="mdl-menu__item mdl-color-text--blue-grey-900"><i class="material-icons">headset_mic&nbsp;</i>Suporte N1</li></router-link> -->
      <!-- <router-link to="/suporten2"><li class="mdl-menu__item mdl-color-text--blue-grey-900"><i class="material-icons">headset_mic&nbsp;</i>Suporte N2</li></router-link> -->
      <!-- <router-link to="/infraestrutura"><li class="mdl-menu__item mdl-color-text--blue-grey-900"><i class="material-icons">dns&nbsp;</i>Infraestrutura</li></router-link> -->
      <!-- <router-link to="/engenharia"><li class="mdl-menu__item mdl-color-text--blue-grey-900"><i class="material-icons">code&nbsp;</i>Engenharia</li></router-link> -->
      <!-- <router-link to="/gerencial"><li class="mdl-menu__item mdl-color-text--blue-grey-900"><i class="material-icons">insert_chart&nbsp;</i>Gerencial</li></router-link> -->
    </ul>
  </div>
</header>
</template>
