export default {
  setRequestStatus(store, status) {
    store.requestStatus = status;
  },
  setErrorMessage(store, message) {
    store.errorMessage = message;
  },
};
