<template>
  <div class="w-full">
    <div v-if="userRole !== 'Student'" class="w-[95%] mx-auto mt-6">
      <label for="selectStudent">Student Name:</label>
      <select
        class="form-control bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        v-model="selectStudent"
      >
        <option
          v-for="selectStudent in selectStudents"
          :value="selectStudent.name"
          :key="selectStudent.id"
        >
          {{ selectStudent.name }}
        </option>
      </select>
      <br />

      <label for="selectStudent">Student Email:</label>
      <select
        class="form-control bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        v-model="selectEmail"
      >
        <option
          v-for="selectStudent in selectStudents"
          :value="selectStudent.email"
          :key="selectStudent.id"
          class="text-gray-900"
        >
          {{ selectStudent.email }}
        </option>
      </select>
      <br />

      <button
        class="btn"
        @click="checkStudentProgress(selectStudent, selectEmail)"
      >
        Check Student Progress
      </button>
    </div>

    <div v-if="userRole === 'Student'">Here your Progress</div>
    <!-- Agile Board -->
    <div class="flex justify-center">
      <div
        class="progressBody flex overflow-y-scroll my-4 border-gray-600 rounded-lg border-2 scroll"
      >
        <div
          v-for="column in columns"
          :key="column.title"
          class="rounded-lg px-3 py-3 column-width mr-4 min-w-[200px]"
        >
          <p
            class="text-gray-700 font-semibold font-sans tracking-wide text-sm"
          >
            {{ column.title }}
          </p>
          <div
            v-if="
              (column.title === 'Review' || column.title === 'Done') &&
              userRole === 'Student'
            "
            class="dragArea bg-gray-100 px-4 rounded-lg pt-2 pb-4 list-group w-full"
            :class="column.tasks.length > 0 ? '' : ''"
            :list="column.tasks"
            :animation="200"
            :move="false"
            :dragging="false"
            @click="accessDenied()"
            ghost-class="ghost-card"
            group="tasks"
          >
            <kanbanBoardTaskCard
              v-for="task in column.tasks"
              :key="task.title"
              :task="task"
              class="mt-3 cursor-move"
              @dblclick="showCardDetails()"
            ></kanbanBoardTaskCard>
          </div>
          <VueDraggableNext
            v-else
            class="dragArea bg-gray-100 px-4 rounded-lg pt-2 pb-4 list-group w-full"
            :class="column.tasks.length > 0 ? '' : ''"
            :list="column.tasks"
            :animation="200"
            :move="false"
            :dragging="false"
            @change="log, updateCardState(false)"
            ghost-class="ghost-card"
            group="tasks"
          >
            <kanbanBoardTaskCard
              v-for="task in column.tasks"
              :key="task.title"
              :task="task"
              class="mt-3 cursor-move"
              @dblclick="
                showCardDetails(task, task.id, column.id, column.title)
              "
            ></kanbanBoardTaskCard>
            <p
              v-if="
                column.title === 'Backlog' || column.title === 'In Progress'
              "
              @click="addNewTask(column.title, column.id, column)"
              class="cursor-pointer pt-6"
              data-modal-target="defaultModal"
              data-modal-toggle="defaultModal"
            >
              +Add New Task
            </p>
          </VueDraggableNext>
        </div>
      </div>
    </div>

    <div
      v-if="showModal || isShowCardDetails"
      class="bg-gray-500 absolute rounded-lg top-1/2 left-1/2 height-[200px] w-97 p-6 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div class="text-center space-y-4">
        <p
          @click="closeModal()"
          title="Close"
          class="text-right mb-4 cursor-pointer"
        >
          X
        </p>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Card Title
          </label>
          <input
            v-model="cardTitle"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cardTitle"
            type="text"
            placeholder="Card Title"
          />
        </div>

        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Card Description
          </label>
          <textarea
            v-model="cardDescription"
            rows="10"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cardDescription"
            type="text"
            placeholder="Card Title"
          />
        </div>

        <div>
          <label for="cardState">Card Type </label>
          <select class="form-control" v-model="cardType">
            <option
              v-for="cardType in cardTypes"
              :value="cardType.val"
              :key="cardType.id"
            >
              {{ cardType.val }}
            </option>
          </select>
        </div>

        <div>
          <label v-if="showModal" for="cardState">Card State </label>
          <select v-if="showModal" class="form-control" v-model="cardState">
            <option
              v-for="cardState in cardStates"
              :value="cardState.val"
              :key="cardState.id"
            >
              {{ cardState.val }}
            </option>
          </select>

          <!-- <select
            v-if="isShowCardDetails"
            class="form-control"
            v-model="cardState"
          >
            <option
              v-for="cardState in cardStatesView"
              :value="cardState.val"
              :key="cardState.id"
            >
              {{ cardState.val }}
            </option>
          </select> -->
        </div>

        <button
          class="btn my-6"
          @click="
            showModal
              ? addCard()
              : isShowCardDetails
              ? updateCardState(true)
              : ''
          "
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { VueDraggableNext } from "vue-draggable-next";
import Cookie from "cookie-universal";
const cookies = Cookie();
const userRole = ref("");
const userName = ref("");
const userEmail = ref("");
const allUsers = ref({});

const selectStudent = ref("");
const selectEmail = ref("");

const selectStudents = ref({});
const columns = ref([]);

onMounted(() => {
  userRole.value = cookies.get("userRole");
  userName.value = cookies.get("userName");
  userEmail.value = cookies.get("userEmail");
  getActiveUser();
  getAllUsersProgress();
});
const getActiveUser = () => {
  const isActive = ref(true);
  fetch(
    `http://localhost:5000/getSuperVisorStudent/${userEmail.value}/${userRole.value}/${isActive.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        allUsers.value = data;
        let allTeacher = {};
        allUsers.value.forEach((user, index) => {
          if (user.role === "Student") {
            const newAdd = {
              id: index,
              name: user.name,
              email: user.email,
            };
            allTeacher[index] = newAdd;
          }
        });
        selectStudents.value = allTeacher;
        console.log(selectStudents.value, "here all update");
      } else {
        alert(data.response);
      }
    });
};

const usersProgress = ref([]);
const getAllUsersProgress = () => {
  fetch(`http://localhost:5000/usersProgress`)
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        usersProgress.value = data;
        console.log(usersProgress.value, "here the all usersProgress");
        if (userRole.value === "Student") {
          checkStudentProgress(userName.value, userEmail.value);
        }
      }
    });
};

const showModal = ref(false);

const cardType = ref("");

const cardTypes = ref({
  1: { id: 1, val: "Feature" },
  2: { id: 2, val: "Design" },
  3: { id: 3, val: "QA" },
  4: { id: 4, val: "Backend" },
});

const cardState = ref("");

const cardStates = ref({
  1: { id: 1, val: "Backlog" },
  2: { id: 2, val: "In Progress" },
});

const cardStatesView = ref({
  1: { id: 1, val: "Backlog" },
  2: { id: 2, val: "In Progress" },
  3: { id: 3, val: "Completed" },
  4: { id: 4, val: "Review" },
  5: { id: 5, val: "Done" },
});

const checkStudentProgress = (name, email) => {
  let nameId = null;
  let emailId = null;
  usersProgress.value.forEach((user, index) => {
    if (user.userName === name) {
      selectStudent.name = user.userName;
      nameId = user._id;
    }
  });

  usersProgress.value.forEach((user, index) => {
    if (user.email === email) {
      selectStudent.email = user.email;
      emailId = user._id;
    }
  });

  console.log(nameId, emailId);

  if (nameId === emailId && nameId !== null) {
    usersProgress.value.forEach((user, index) => {
      if (user._id === nameId) {
        columns.value = user.userProgress;
      }
    });
  } else if (nameId === null) {
    alert("This user have no progress till now!!!");
  } else {
    columns.value = [];
    alert("Name and Email are not match!!!");
  }
};

const cardTitle = ref("");
const cardDescription = ref("");

const addCard = () => {
  fetch(`http://localhost:5000/usersProgress/${userEmail.value}`, {
    method: "PUT",
    body: JSON.stringify({
      userName: userName.value,
      email: userEmail.value,
      cardType: cardType.value,
      cardTitle: cardTitle.value,
      cardDescription: cardDescription.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.acknowledged) {
        alert("Card Added Successfully");
        location.reload();
      }
    });
};

const isShowCardDetails = ref(false);
const currentColumnId = ref(null);
const currentTaskId = ref(null);

const showCardDetails = (openTask, taskId, columnId, title) => {
  isShowCardDetails.value = true;
  cardTitle.value = openTask.title;
  cardDescription.value = openTask.description;
  cardType.value = openTask.type;
  currentColumnId.value = columnId;
  currentTaskId.value = taskId;
  cardState.value = title;
};

const accessDenied = () => {
  alert("You don't have permission to access this!!");
};

const updateCardStateCount = ref(0);

const updateCardState = (isModal) => {
  userEmail.value = selectStudent.email;
  updateCardStateCount.value = updateCardStateCount.value + 1;

  if (isModal) {
    updateCardStateCount.value = 2;
    columns.value[currentColumnId.value - 1].tasks.forEach((item) => {
      if (item.id === currentTaskId.value) {
        item.description = cardDescription.value;
        item.title = cardTitle.value;
        item.type = cardType.value;
      }
    });

    console.log(
      isShowCardDetails.value,
      cardTitle.value,
      cardDescription.value,
      cardType.value,
      currentColumnId.value,
      currentTaskId.value,
      cardState.value,
      columns.value,
      "here"
    );
  }

  if (updateCardStateCount.value === 2) {
    console.log("inner");
    updateCardStateCount.value = 0;

    fetch(`http://localhost:5000/updateCardState/${userEmail.value}`, {
      method: "PUT",
      body: JSON.stringify({
        updateAllProgress: columns.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Card State Updated Successfully");
          closeModal();
          getAllUsersProgress();
        }
      });
  }
};

const addNewTask = (title, id, fullColumn) => {
  cardState.value = title;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  isShowCardDetails.value = false;
};
</script>

<style lang="scss" scoped>
.ghost-card {
  opacity: 0.5;
  background: #f7fafc;
  border: 1px solid #4299e1;
}
.columnHeight {
  max-height: calc(100% + 115px);
}
.progressBody {
  padding: 16px;
  min-width: calc(100% - 70px);
  min-height: 550px;
  max-height: 600px;
}
.scroll {
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-color: #e4801d #ececec; /* Firefox 64 */
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 8px;
    height: 6px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    // box-shadow: inset 0 0 5px #ECECEC;
    background: #e4801d;
    border-radius: 3px;
    background: #ececec;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #e4801d;
    border-radius: 3px;
  }
}
</style>
