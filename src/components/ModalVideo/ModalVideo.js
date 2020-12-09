import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import ReactPlayer from "react-player";
import "./modalvideo.scss";

export default function ModalVideo(props) {
  const { videoKey, videoPlatForm, isOpen, close } = props;
  const [urlVideo, setUrlVideo] = useState(null);

  useEffect(() => {
    switch (videoPlatForm) {
      case "YouTube":
        setUrlVideo(`https://youtu.be/${videoKey}`);
        break;
      case "Vimeo":
        setUrlVideo(`https://vimeo.com/${videoKey}`);
        break;
      default:
        break;
    }
  }, [videoKey, videoPlatForm]);

  return (
    <Modal
      className="modal-video"
      visible={isOpen}
      centered
      onCancel={close}
      footer={false}
    >
      <ReactPlayer url={urlVideo} playing={isOpen} />
    </Modal>
  );
}
