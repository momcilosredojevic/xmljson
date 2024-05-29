import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import "./main.css";
const props: UploadProps = {
  name: "file",
  action: "http://localhost:8080/convert",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(
        info.file.response.catalog,
        typeof info.file.response.catalog /* info.fileList */,
      );
      console.log(JSON.stringify(info.file.response.catalog));
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const App: React.FC = () => (
  <Upload {...props}>
    <h1>XML to JSON converter </h1>
    <Button icon={<UploadOutlined />}>
      Click to Upload and Convert XML to JSON
    </Button>
  </Upload>
);

export default App;
