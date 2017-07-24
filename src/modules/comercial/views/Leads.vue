<template>
  <main class="mdl-layout__content mdl-color--grey-200">
    <div class="mdl-grid demo-content">
      <h5>Leads</h5>
      <div class="demo-charts mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
        <vue-chart type="horizontalBar" :data="chartData" :height="100"></vue-chart>
      </div>
      <div class="demo-charts mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
        <table class="mdl-data-table mdl-js-data-table striped" cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <th class="mdl-data-table__cell--non-numeric">Yeah!</th>
              <th>0</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="mdl-data-table__cell--non-numeric">Yahoo!</td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
              <td>0</td>
            </tr>
            <tr>
              <td class="mdl-data-table__cell--non-numeric">Yahoo!</td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
              <td>0</td>
            </tr>
            <tr>
              <td class="mdl-data-table__cell--non-numeric">Yahoo!</td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
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
        labels: ['Operador 1', 'Operador 2'],
        datasets: [
            {
                label: 'Component 1',
                data: [16, 20],
                backgroundColor: ['rgba(18, 110, 135, 0.8)','rgba(18, 110, 135, 0.8)']

            },
            {
                label: 'Component 2',
                data: [25, 15],
                backgroundColor: ['rgba(242, 210, 18, 0.8)','rgba(242, 210, 18, 0.8)']
            },
            {
                label: 'Component 3',
                data: [20, 30],
                backgroundColor: ['rgba(217, 39, 39, 0.8)','rgba(217, 39, 39, 0.8)']
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
