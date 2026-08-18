export const dateFormator = (date) => {
  const messageDate = new Date(date);
  const now = new Date();

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const messageDay = new Date(
    messageDate.getFullYear(),
    messageDate.getMonth(),
    messageDate.getDate(),
  );

  const diffDays = Math.floor((today - messageDay) / (1000 * 60 * 60 * 24));

  let label;

  if (diffDays === 0) {
    label = messageDate.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  } else if (diffDays === 1) {
    label = "Yesterday";
  } else if (diffDays < 7) {
    label = messageDate.toLocaleDateString("en-IN", {
      weekday: "long",
    });
  } else {
    label = messageDate.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
  return label;
};
