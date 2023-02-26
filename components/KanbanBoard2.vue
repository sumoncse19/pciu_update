<template>
  <div>
    <kanban-board :stages="stages" :blocks="blocks" @update-block="updateBlock">
      <div v-for="stage in stages" :slot="stage" :key="stage">
        <h2>{{ stage }}</h2>
      </div>
      <div v-for="block in blocks" :slot="block.id" :key="block.id">
        <div><strong>id:</strong> {{ block.id }}</div>
        <div>
          {{ block.title }}
        </div>
      </div>
    </kanban-board>
  </div>
</template>

<script setup>
const props = defineProps({
  stages: {
    type: Array,
    default: [],
  },
  blocks: {
    type: Object,
    default: {},
  },
});
</script>

<style lang="scss">
// @import "./assets/css/kanban.scss";
// $on-hold: #fb7d44;
// $in-progress: #2a92bf;
// $needs-review: #f4ce46;
// $approved: #00b961;
// * {
//   box-sizing: border-box;
// }
// body {
//   background: #33363d;
//   color: white;
//   font-family: "Lato";
//   font-weight: 300;
//   line-height: 1.5;
//   -webkit-font-smoothing: antialiased;
// }
// .drag-column {
//   .drag-column-header > div {
//     width: 100%;
//     h2 > a {
//       float: right;
//     }
//   }
//   .drag-column-footer > div {
//     margin-left: 10px;
//     a {
//       text-decoration: none;
//       color: white;
//       &:hover {
//         text-decoration: underline;
//       }
//     }
//   }
//   &-on-hold {
//     .drag-column-header,
//     .is-moved,
//     .drag-options {
//       background: $on-hold;
//     }
//   }
//   &-in-progress {
//     .drag-column-header,
//     .is-moved,
//     .drag-options {
//       background: $in-progress;
//     }
//   }
//   &-needs-review {
//     .drag-column-header,
//     .is-moved,
//     .drag-options {
//       background: $needs-review;
//     }
//   }
//   &-approved {
//     .drag-column-header,
//     .is-moved,
//     .drag-options {
//       background: $approved;
//     }
//   }
// }
// .section {
//   padding: 20px;
//   text-align: center;
//   a {
//     color: white;
//     text-decoration: none;
//     font-weight: 300;
//   }
//   h4 {
//     font-weight: 400;
//     a {
//       font-weight: 600;
//     }
//   }
// }
</style>
