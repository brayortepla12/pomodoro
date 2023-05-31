<script setup>
const props = defineProps(["myTask"]
)
const headlist =["Id","Titulo","Estado"]
</script>

<template>
  <div class="w-75 container mt-5 text-center">
    <table class="table table-striped">
      <thead>
    <tr>
      <th  v-for="head in headlist" :key='head' @click="sortTable(field)" > 
        {{head}} <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i>
      </th>
      <th>Accion</th>
    </tr>
  </thead>
  <tbody>
      <tr v-for="item in props.myTask" :key='item'>
        <td v-for="head in headlist" :key='head'>
          <i class="bg-primary text-white font-weight-normal px-3 rounded-2" v-if="head == 'Estado'">
            {{item[head]}} 
          </i>
          <div v-else>
            {{item[head]}}   
          </div>
        </td>
        <td>
          <button class="bg-primary text-white border-0 rounded-2">
            <font-awesome-icon icon="stopwatch"/>
          </button>
        </td>
      </tr>
  </tbody>
    </table> 
  </div>
</template>

<style scoped></style>
