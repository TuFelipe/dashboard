import Vue from 'vue'
import Router from 'vue-router'

//Comercial
import Comercial from '..//modules/comercial/Comercial.vue'
import Leads from '..//modules/comercial/views/Leads.vue'
import Vendas from '..//modules/comercial/views/Vendas.vue'

//Adm
import Adm from '..//modules/administrative/Adm.vue'
import Faturamento from '..//modules/administrative/views/Faturamento.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', components: {default: Comercial, content: Leads}},
    {path: '/comercial', components: {default: Comercial, content: Leads}},
    {path: '/comercial/leads', components: {default: Comercial, content: Leads}},
    {path: '/comercial/vendas', components: {default: Comercial, content: Vendas}},
    {path: '/administrativo', components: {default: Adm, content: Faturamento}},
    {path: '/administrativo/faturamento', components: {default: Adm, content: Faturamento}}
  ]
})
