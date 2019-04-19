<script>
import { Line, mixins } from 'vue-chartjs'
export default {
  name: 'LineChart',
  extends: Line,
  mixins: [mixins.reactiveData],
  props: {
    data: null,
    options: null
  },
  mounted: function () {
    this.chartData = this.data
  },
  watch: {
    data: function () {
      this.chartData = this.data
    }
  }
}
</script>
