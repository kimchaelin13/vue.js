<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem'
import ListMixin from '../mixins/ListMixin'

export default {
  components: {
    ListItem
  },
  mixins:[ListMixin],
}
</script>


