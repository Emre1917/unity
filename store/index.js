// import axios from 'axios'

export const state = () => ({
  sidebarButtonsTop: [
    {
      id: 1,
      title: 'Overview',
    },
    {
      id: 2,
      title: 'Products',
    },
    {
      id: 3,
      title: 'Campaigns',
    },
    {
      id: 3,
      title: 'Schedules',
    },
    {
      id: 3,
      title: 'Payouts',
    },
    {
      id: 3,
      title: 'Statements',
    },
    {
      id: 3,
      title: 'Settings',
    },
  ],
  isDark: false,
  showMenu: false,
  activeIndex: null,
})

// export const getters = {
//   todos: (state) => state.todos,
// }

export const actions = {}

export const mutations = {
  changeActiveIndex(state, index) {
    state.activeIndex = index
  },
}
