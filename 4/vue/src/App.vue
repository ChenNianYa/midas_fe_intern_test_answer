<template>
  <div style="width: 50%;height: 600px;margin: 100px auto;">
    <el-table :data="tableData" style="width: 100%;height: 100%;" :border="true">
      <el-table-column prop="id" label="Id" />
      <el-table-column prop="shape" label="Shape" :filters="[
        { text: 'Circle', value: 'Circle' },
        { text: 'Triangle', value: 'Triangle' },
        { text: 'Square', value: 'Square' },
      ]" :filter-method="filterShapeHandler" />
      <el-table-column prop="color" label="Color" :filters="[
        { text: 'White', value: 'White' },
        { text: 'Black', value: 'Black' },
        { text: 'Blue', value: 'Blue' },
        { text: 'Red', value: 'Red' },
      ]" :filter-method="filterColorHandler" />
      <el-table-column prop="area" label="Area" sortable />
    </el-table>
  </div>
</template>
<script setup>
import { ElTable, ElTableColumn } from 'element-plus'
import source from './data';
import { reactive } from 'vue';
const tableData = reactive(source)
const filterShapeHandler = (value, row) => {
  return row.shape === value
}
const filterColorHandler = (value, row) => {
  return row.color === value
}
</script>

<style scoped></style>
