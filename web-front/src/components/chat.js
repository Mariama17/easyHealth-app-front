import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Dropzone from "react-dropzone";

const SERVER_URL = "http://localhost:3000"; 

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = new WebSocket(SERVER_URL);
    socketRef.current.onopen = () => {
      console.log("Connected to Socket.io server");
    };
    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "message") {
        setMessages((messages) => [...messages, data.message]);
      } else if (data.type === "file") {
        setFiles((files) => [...files, data.file]);
      }
    };
    return () => {
      socketRef.current.close();
    };
  }, []);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSend = () => {
    if (text) {
      socketRef.current.send(
        JSON.stringify({
          type: "message",
          message: text,
        })
      );
      setText("");
    }
  };

  const handleFileDrop = (acceptedFiles) => {
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);
    socketRef.current.send(
      JSON.stringify({
        type: "file",
        file: formData,
      })
    );
  };

  const handleFileDownload = (file) => {
    window.open(file.url, "_blank");
  };

  return (
    <Container className="h-100">
      <Row className="h-100 justify-content-center align-items-center">
        <Col md={8} className="h-100">
          <div className="chat-container">
            <div className="message-list">
              {messages.map((message, index) => (
                <div key={index} className="message">
                  {message}
                </div>
              ))}
            </div>
            <div className="file-list">
              {files.map((file, index) => (
                <div key={index} className="file">
                  <span className="file-name">{file.name}</span>
                  <button onClick={() => handleFileDownload(file)}>Télécharger</button>
                </div>
              ))}
            </div>
            <div className="input-container">
              <input type="text" value={text} onChange={handleTextChange} />
              <button onClick={handleSend}>Envoyer</button>
              <Dropzone onDrop={handleFileDrop}>
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()} className="dropzone">
                    <input {...getInputProps()} />
                    <p>Glissez-déposez un fichier ici ou cliquez pour sélectionner un fichier</p>
                  </div>
                )}
              </Dropzone>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
