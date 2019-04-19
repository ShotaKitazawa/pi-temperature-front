<template>
  <div class='index'>
    <details>
       <summary>現在の温度</summary>
       <LineChart
         :data="LineChartTemperature"
         :options="options"
         :height="100"
       ></LineChart>
      <button type='button' v-on:click='add'>{{btnName}}</button>
    </details>
  </div>
</template>

<script>

import axios from 'axios'
import LineChart from '@/components/chart/LineChart.vue'

export default {
  name: 'Index',
  components: {
    LineChart
  },
  data: function () {
    return {
      resData: {},
      btnName: '追加',
      LineChartTemperature: {
        labels: [],
        datasets: [{
          // label: '気温',
          data: []
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        title: {
          display: false,
          text: '温度'
        }
      }
    }
  },
  methods: {
    add: function () {
      this.addFlag = !this.addFlag
      if (this.addFlag) {
        this.addData()
        this.btnName = '停止'
      } else {
        this.btnName = '追加'
      }
    },
    addData: function () {
      let newChartData = {}
      newChartData = Object.assign({}, this.LineChartTemperature)

      // TODO: x軸は最長10にする
      // if (newChartData.labels.length > 10) {
      //   newChartData.labels = newChartData.labels.slice(1)
      //   newChartData.datasets[0].data = newChartData.datasets[0].data.slice(1)
      // }

      let data = this.resData
      let label = data['created_at']
      let value = data['temperature']
      if (label !== newChartData.labels.slice(-1)[0]) {
        newChartData.labels.push(label)
        newChartData.datasets[0].data.push(value)
        this.LineChartTemperature = newChartData
      }
      setTimeout(() => {
        if (this.addFlag) {
          this.addData()
        }
      }, 1000)
    },
    getJsonRecursive: async function () {
      let res = await axios.get('http://localhost:10080/api/temperature')
      this.resData = res.data
      setTimeout(() => { this.getJsonRecursive() }, 1000)
    }
  },
  created: function () {
    this.getJsonRecursive()
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  margin: 10px 0;
  padding: 10px;
}
</style>
