<script setup>
const props = defineProps(["myTask"])
const emit = defineEmits(['renderTime'])
const headlist =["Id","Titulo","Estado"]

let time = 0
let timer = null

const initTask = (myTask)=>{
  time = 0.1 * 60;
  myTask.Estado="Proceso"
  
  timer = setInterval(() => {
    timerStart(myTask);
  }, 1000);
}

function timerStart (myTask){
  time--;
  emit('renderTime',renderTime())
  if (time === 0) {
    clearInterval(timer)
    myTask.Estado ="Terminado"
  }
}

function renderTime() {
  const minutes = parseInt(time / 60);
  const seconds = parseInt(time % 60);
  return `00:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
}
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
          <i class="bg-primary text-white font-weight-normal px-3 rounded-2" v-if="head == 'Estado' && item.Estado == 'Pendiente'">
            {{item[head]}} 
          </i>
          <i class="bg-warning text-white font-weight-normal px-3 rounded-2" v-else-if="head == 'Estado' && item.Estado == 'Proceso'">
            {{item[head]}} 
          </i>
          <i class="bg-success text-white font-weight-normal px-3 rounded-2"  v-else-if="head == 'Estado' && item.Estado == 'Terminado'">
            {{item[head]}} 
          </i>
          <div v-else>
            {{item[head]}}   
          </div>
        </td>
        <td>
          <button type="button" @click="initTask(item)" disabled class="btn bg-primary text-white border-0 rounded-2" style="padding: auto;">
            <font-awesome-icon icon="stopwatch"/>
          </button>
        </td>
      </tr>
  </tbody>
    </table> 
  </div>
</template>

<style scoped></style>
