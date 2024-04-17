import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [editorState, setEditorState] = useState("");
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const email = useSelector((store) => store.auth.email);

  const tokenId = useSelector((store) => store.auth.tokenId);
  const navigate = useNavigate();

  useEffect(() => {
    if (!tokenId) {
      navigate("/auth");
    }
  }, [tokenId]);

  const mailSendFrom = async () => {
    const details = {
      to: to,
      subject: subject,
      content: editorState.blocks,
    };
    const dummyEmail = email
      .toLowerCase()
      .split("")
      .filter((x) => x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122)
      .join("");
    try {
      const response = await fetch(
        `https://react-deployment-demo-f24d5-default-rtdb.asia-southeast1.firebasedatabase.app/${dummyEmail}/sentMails.json`,
        {
          method: "POST",
          body: JSON.stringify(details),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(response);
      console.log(data);
      if (!response.ok) {
        throw new Error(data.error);
      }
    } catch (err) {
      alert(err);
    }
  };

  const mailSendTo = async () => {
    const details = {
      from: email,
      subject: subject,
      content: editorState.blocks,
      isRead: false,
    };
    const dummyEmail = to
      .toLowerCase()
      .split("")
      .filter((x) => x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122)
      .join("");
    try {
      const response = await fetch(
        `https://react-deployment-demo-f24d5-default-rtdb.asia-southeast1.firebasedatabase.app/${dummyEmail}/Inbox.json`,
        {
          method: "POST",
          body: JSON.stringify(details),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(response);
      console.log(data);
      if (!response.ok) {
        throw new Error(data.error);
      }
    } catch (err) {
      alert(err);
    }
  };

  const handleSendBtn = () => {
    mailSendFrom();
    mailSendTo();
    setTo("");
    setSubject("");
    setEditorState("");
  };
  return (
    <div className="mt-2 px-4">
      <h1 className="text-xl border-b-2 pb-2">Welcome to your mail box</h1>
      <div className="p-4">
        <div className="flex my-4 items-center">
          <p>To:</p>
          <input
            className="w-full mx-2 p-2 rounded-lg border-2 focus:outline-none"
            type="email"
            placeholder="Receiver Email"
            onChange={(e) => setTo(e.target.value)}
            value={to}
          />
        </div>
        <div className="flex my-4 items-center">
          <p>Subject:</p>
          <input
            type="text"
            placeholder="Subject"
            className="w-full mx-2 p-2 rounded-lg border-2 focus:outline-none"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          />
        </div>
        <div>
          <Editor
            initialContentState={editorState}
            onContentStateChange={setEditorState}
            editorClassName="border my-2 border-black h-36"
            toolbarClassName="flex justify-between items-center cursor-pointer"
            toolbar={{
              inline: { isDropdown: true },
              list: { isDropdown: true },
              textAlign: { isDropdown: true },
              link: { isDropdown: true },
              history: { isDropdown: true },
            }}
          />
        </div>
        <button className="bg-blue-400 px-2 py-1 my-4" onClick={handleSendBtn}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Home;
