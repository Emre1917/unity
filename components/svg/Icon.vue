<template>
  <div>
    <!-- home -->
    <svg
      v-if="icon === 'home'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
      />
    </svg>
    <!-- Phone -->
    <svg
      v-if="icon === 'phone'"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
    <!-- blog -->
    <svg
      v-if="icon === 'blog'"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="1"
        stroke="currentColor"
        fill="none"
        d="M20 22C18.9 22 18 21.1 18 20V9H22V20C22 21.1 21.1 22 20 22Z"
      ></path>
      <path
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="1"
        stroke="currentColor"
        fill="none"
        d="M18 9V2H2V22H20C18.9 22 18 21.1 18 20V9Z"
      ></path>
      <path
        stroke-linejoin="round"
        stroke-linecap="square"
        stroke-miterlimit="10"
        stroke-width="1"
        stroke="currentColor"
        d="M5 19H15"
      ></path>
      <path
        stroke-linejoin="round"
        stroke-linecap="square"
        stroke-miterlimit="10"
        stroke-width="1"
        stroke="currentColor"
        d="M12 9H15"
      ></path>
      <path
        stroke-linejoin="round"
        stroke-linecap="square"
        stroke-miterlimit="10"
        stroke-width="1"
        stroke="currentColor"
        d="M12 6H15"
      ></path>
      <path
        stroke-linejoin="round"
        stroke-linecap="square"
        stroke-miterlimit="10"
        stroke-width="1"
        stroke="currentColor"
        d="M5 16H15"
      ></path>
      <path
        stroke-linejoin="round"
        stroke-linecap="square"
        stroke-miterlimit="10"
        stroke-width="1"
        stroke="currentColor"
        d="M5 13H15"
      ></path>
      <path
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="1"
        stroke="currentColor"
        fill="none"
        d="M9 5H5V10H9V5Z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: null,
    },
  },
}
</script>

<style></style>
