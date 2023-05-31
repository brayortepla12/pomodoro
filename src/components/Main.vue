<script setup>
import TableTask from "./TableTask.vue" 
import { ref } from "vue"
const task = ref([])
const titleTask = ref("")

const generaId = () => {
  return Math.random().toString(30).substring(2).substring(0,4)
}

const addTask = () => {
  const newTask = {
    Id: generaId(),
    Titulo: titleTask.value,
    Estado: "Pendiente",
  }
  task.value.unshift(newTask)
  titleTask.value = ""
}
</script>

<template>
  <div
    class="shadow px-5 py-4 mb-3 mt-5 bg-body-tertiary rounded-4 container"
    style="width: 35%"
  >
    <div class="card-body">
      <h1 class="card-title fs-1 mb-3 text-center">00:00:00</h1>
      <form @submit.prevent="onSubmit">
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Tarea"
            aria-label="Username"
            v-model="titleTask"
          />
        </div>
        <button type="submit" @click="addTask" class="btn btn-primary">
          Agregar
        </button>
      </form>
    </div>
  </div>
  <TableTask v-bind:myTask="task"></TableTask>
</template>

<style scoped>
button {
  padding: 5px 40px;
}
/* cornflowerblue : color */
</style>
