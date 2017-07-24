<template>
  <main class="mdl-layout__content mdl-color--grey-200">
    <div class="mdl-grid demo-content">
      <h5>Faturamento</h5>
      <div class="demo-charts mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
        <vue-chart type="line" :data="chartData"></vue-chart>
      </div>
    </div>
  </main>
</template>

<script>
import VueChart from 'vue-chart-js'

export default {
  components: {
    VueChart
  },

  data: () => ({
    chartData: {
        labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
        datasets: [
            {
                label: 'Component 1',
                backgroundColor: ['rgba(18, 110, 135, 0.5)'],
                data: [10, 20, 15, 35, 40],
            },
            {
                label: 'Component 2',
                backgroundColor: ['rgba(242, 210, 18, 0.5)'],
                data: [5, 15, 25, 10, 30]
            },
            {
                label: 'Component 2',
                backgroundColor: ['rgba(217, 39, 39, 0.5)'],
                data: [10, 30, 20, 15, 25]
            }
        ]
    }
  }),
}
</script>

<style scoped>

h5{
  color: #666;
  padding-left: 0.5em;
}

.mdl-data-table tbody tr:nth-child(2n) {
  background-color: white;
}
.mdl-data-table tbody tr:nth-child(2n+1) {
  background-color: #f2f2f2;
}

table{
  width: 100%;
  height: auto;
  border: none;
}
</style>
