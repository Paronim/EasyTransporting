const state = {
  notifications: [
    {
      id: Math.random().toString(16).slice(2),
      name: "Вагон в простое",
      text: "<a class='link'>Вагон #4513</a> более 2 часов находится на <a class='link'>станици #431</a>",
      status: "read", // new, read
      type: "error", // success, warning, error
      show: false,
      date: "1 час назад",
    },
  ],
  counter: 0,
};
const getters = {
  NOTIFICATIONS: (state) => {
    return state.notifications;
  },
  NEW_NOTIFICATIONS: (state) => {
    return state.notifications.filter(
      (notification) => notification.status === "new" && notification.show
    );
  },
  NEW_NOTIFICATIONS_COUNTER: (state) => {
    return state.counter;
  },
};
const mutations = {
  ADD_NOTIFICATION: (state, notification) => {
    state.notifications.unshift(notification);
    state.counter += 1;
  },
  UPDATE_NOTIFICATIONS_STATUS: (state, status) => {
    state.notifications.forEach(
      (notification) => (notification.status = status)
    );
    state.counter = 0;
  },
  HIDE_NOTIFICATION: (state, notificationId) => {
    const notification = state.notifications.find(
      (notification) => notification.id === notificationId
    );
    if (notification) notification.show = false;
  },
};
const actions = {
  CREATE_NOTIFICATION: async (context) => {
    const notification = {
      id: Math.random().toString(16).slice(2),
      name: "Поезд прибыл на станцию",
      text: "<a class='link'>Поезд #4353</a> прибыл на <a class='link'>станцию #3432</a>",
      status: "new", // new, read
      type: "success", // success, warning, error
      show: true,
      date: "Только что",
    };
    context.commit("ADD_NOTIFICATION", notification);
    setTimeout(
      () => context.commit("HIDE_NOTIFICATION", notification.id),
      3000
    );
  },
  READ_NOTIFICATIONS: async (context) => {
    context.commit("UPDATE_NOTIFICATIONS_STATUS", "read");
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
