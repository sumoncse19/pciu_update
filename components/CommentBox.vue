<template>
  <section class="bg-white dark:bg-gray-900 py-8 lg:py-16 rounded-lg text-xl">
    <div class="mx-auto px-4">
      <div
        class="overflow-x-hidden scroll border-gray-600 border-2 rounded-lg p-4"
      >
        <div
          v-for="(comments, index) in selectedCardDetails.discussion"
          :key="index"
        >
          <article class="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
            <footer class="flex justify-between items-center mb-2">
              <div class="flex items-center">
                <p
                  class="inline-flex items-center mr-3 text-lg text-gray-900 dark:text-white"
                >
                  <img
                    class="mr-2 w-6 h-6 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Michael Gough"
                  />{{ comments.commenterName }}
                </p>
                <p class="text-lg text-gray-600 dark:text-gray-400">
                  <time
                    pubdate
                    datetime="2022-02-08"
                    title="February 8th, 2022"
                    >{{ comments.date }}</time
                  >
                </p>
              </div>
              <button
                id="dropdownComment1Button"
                data-dropdown-toggle="dropdownComment1"
                class="inline-flex items-center p-2 text-lg font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button"
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
                  ></path>
                </svg>
                <span class="sr-only">Comment settings</span>
              </button>
              <!-- Dropdown menu -->
              <div
                id="dropdownComment1"
                class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-1 text-lg text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconHorizontalButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Remove</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Report</a
                    >
                  </li>
                </ul>
              </div>
            </footer>
            <p class="text-gray-900 dark:text-gray-400 text-left">
              {{ comments.comment }}
            </p>
            <div
              class="flex items-center mt-4 space-x-4"
              @click="showReplyBox(comments.commentId)"
            >
              <button
                type="button"
                class="flex items-center text-lg text-gray-900 hover:underline dark:text-gray-400"
              >
                <svg
                  aria-hidden="true"
                  class="mr-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                Reply
              </button>
            </div>
          </article>

          <div v-if="comments.replies">
            <article
              v-for="(reply, index) in comments.replies"
              :key="index"
              class="pb-6 px-6 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900"
            >
              <footer class="flex justify-between items-center mb-2">
                <div class="flex items-center">
                  <p
                    class="inline-flex items-center mr-3 text-lg text-gray-900 dark:text-white"
                  >
                    <img
                      class="mr-2 w-6 h-6 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="Jese Leos"
                    />{{ reply.replierName }}
                  </p>
                  <p class="text-lg text-gray-600 dark:text-gray-400">
                    <time
                      pubdate
                      datetime="2022-02-12"
                      title="February 12th, 2022"
                      >{{ reply.date }}</time
                    >
                  </p>
                </div>
                <button
                  id="dropdownComment2Button"
                  data-dropdown-toggle="dropdownComment2"
                  class="inline-flex items-center p-2 text-lg font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  type="button"
                >
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
                    ></path>
                  </svg>
                  <span class="sr-only">Comment settings</span>
                </button>
                <!-- Dropdown menu -->
                <div
                  id="dropdownComment2"
                  class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="py-1 text-lg text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Edit</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Remove</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Report</a
                      >
                    </li>
                  </ul>
                </div>
              </footer>
              <p class="text-gray-900 dark:text-gray-400 text-left">
                {{ reply.reply }}
              </p>
            </article>

            <!-- &&
                currentCommentId !==
                  selectedCardDetails.discussion[
                    selectedCardDetails.discussion.length - 1
                  ].commentId -->
          </div>
          <div
            v-if="isShowReplyBox && currentCommentId === comments.commentId"
            class="flex sticky bottom-0 z-9 ml-6 lg:ml-12"
          >
            <input
              v-model="commentReply"
              type="text"
              id="small-input"
              class="block w-full p-2 text-gray-800 border border-gray-300 rounded-full bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <BaseIconSendIcon
              @click="postComment()"
              class="w-8 h-8 absolute right-0 cursor-pointer bg-yellow-primary rounded-full p-1 border-blue-500 border-2"
            />
          </div>
        </div>

        <div class="flex sticky bottom-0 z-9 mt-3">
          <input
            v-model="singleComment"
            type="text"
            id="small-input"
            class="block w-full p-2 text-gray-800 border border-gray-300 rounded-full bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <BaseIconSendIcon
            @click="postCommentRoot()"
            class="w-8 h-8 absolute right-0 cursor-pointer bg-yellow-primary rounded-full p-1 border-blue-500 border-2"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Cookie from "cookie-universal";
const cookies = Cookie();
const props = defineProps({
  selectedCardDetails: {
    type: Object,
    default: {},
  },
  columns: {
    type: Object,
    default: {},
  },
  selectName: {
    type: String,
    default: "",
  },
  selectEmail: {
    type: String,
    default: "",
  },
  cardState: {
    type: String,
    default: {},
  },
});

const userRole = ref("");
const userName = ref("");
const userEmail = ref("");
onMounted(() => {
  userRole.value = cookies.get("userRole");
  userName.value = cookies.get("userName");
  userEmail.value = cookies.get("userEmail");
});

watch(
  () => props.selectedCardDetails,
  (newValue) => {
    console.log(newValue, "update comment box");
  }
);

const isShowReplyBox = ref(false);
const currentCommentId = ref(null);
const showReplyBox = (commentId) => {
  if (currentCommentId === null) {
    isShowReplyBox.value = true;
    currentCommentId.value = commentId;
  } else if (currentCommentId.value === commentId) {
    isShowReplyBox.value = false;
    currentCommentId.value = null;
  } else if (
    currentCommentId !== null &&
    currentCommentId.value !== commentId
  ) {
    isShowReplyBox.value = false;
    currentCommentId.value = commentId;
    isShowReplyBox.value = true;
  }
};

const commenterName = userName.value;
const commenterEmail = userEmail.value;
const commenterRole = userRole.value;
const commentReply = ref("");
const singleComment = ref("");

const postComment = () => {
  console.log(currentCommentId.value, "here comment id", commentReply.value);

  if (commentReply.value !== "" && isShowReplyBox.value) {
    fetch(`http://localhost:5000/addProgressComment/${userEmail.value}`, {
      method: "PUT",
      body: JSON.stringify({
        userName: props.selectName,
        email: props.selectEmail,
        commenterName: userName.value,
        commenterEmail: userEmail.value,
        replyComment: commentReply.value,
        cardState: props.cardState,
        cardId: props.selectedCardDetails.id,
        parentCommentId: currentCommentId.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert(data.message);
          getUserUpdateEmit(
            "getAllUsersProgressUpdate",
            props.selectedCardDetails
          );
        }
      });
  } else {
    alert("Please enter a comment.");
  }

  commentReply.value = "";
};

const getUserUpdateEmit = defineEmits("getAllUsersProgressUpdate");
// const getUpdateCardDetailsEmit = defineEmits("showCardDetails");

const postCommentRoot = () => {
  if (props.columns[0] === undefined) {
    console.log(
      "now empty self comment",
      userName.value,
      userEmail.value,
      singleComment.value
    );

    singleComment.value = "";
  } else {
    console.log(
      props.cardState,
      "comment on other",
      props.selectName,
      props.selectEmail,
      props.columns[0],
      singleComment.value,
      "full",
      props.selectedCardDetails,
      "from",
      userName.value
    );

    if (singleComment.value !== "") {
      fetch(`http://localhost:5000/addProgressComment/${userEmail.value}`, {
        method: "PUT",
        body: JSON.stringify({
          userName: props.selectName,
          email: props.selectEmail,
          commenterName: userName.value,
          commenterEmail: userEmail.value,
          newComment: singleComment.value,
          cardState: props.cardState,
          cardId: props.selectedCardDetails.id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            alert(data.message);
            getUserUpdateEmit(
              "getAllUsersProgressUpdate",
              props.selectedCardDetails
            );
          }
        });
    } else {
      alert("Please enter a comment.");
    }

    singleComment.value = "";
  }
  // fetch(`http://localhost:5000/addProgressComment/${userEmail.value}`, {
  //   method: "PUT",
  //   body: JSON.stringify({
  //     userName: userName.value,
  //     email: userEmail.value,
  //     cardType: cardType.value,
  //     cardTitle: cardTitle.value,
  //     cardDescription: cardDescription.value,
  //   }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     if (data.acknowledged) {
  //       alert("Card Added Successfully");
  //       location.reload();
  //     }
  //   });
};
</script>

<style lang="scss" scoped>
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
