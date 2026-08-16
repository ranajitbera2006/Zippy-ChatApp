import React from 'react'

const DateSeparator = ({ date }) => {
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
    label = "Today";
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

  return (
    <div className="flex justify-center my-4">
      <div className="px-3 py-1 rounded-lg bg-slate-700 text-slate-200 text-xs font-medium shadow">
        {label}
      </div>
    </div>
  );
};

export default DateSeparator
