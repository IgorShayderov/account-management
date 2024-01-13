const useNotifications = () => {
  const makeErrorNotification = (message) => {
    Notify.create({
      message,
      position: 'top-right',
      color: 'negative',
    });
  };

  return {
    makeErrorNotification,
  };
};

export default useNotifications;
