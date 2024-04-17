import React from "react";

const MailsBox = ({ mails }) => {
  console.log(mails);
  return (
    <div className="mt-10">
      {mails.map((mail) => {
        return (
          <div key={mail.key} className="flex gap-28 ml-10 mb-4">
            <input type="checkbox" value={mail.key} />
            <p>{mail.subject}</p>
            <p>{mail.content.map((info) => info.text).join("")}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MailsBox;
