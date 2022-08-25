import {
  Button,
  Card,
  CardActions,
  Divider,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  Modal,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  ImArrowDown,
  ImAttachment,
  ImCancelCircle,
  ImFilePicture,
  ImFilesEmpty,
} from "react-icons/im";
import { Link } from "react-router-dom";

import "./form.css";

function AddtaskForm({ toggler, setToggler }) {
  const [open, setOpen] = useState(false);
  const [docList, setDocList] = useState([]);
  const [picList, setPicList] = useState([]);

  const AddPic = () => {
    const picItem = <button>Pic here</button>;
    setPicList([...picList, picItem]);
  };

  const AddDoc = () => {
    const docItem = <button>Documnet here</button>;
    setDocList([...docList, docItem]);
  };
  return (
    <div className="modal flex__column" style={{display:toggler?"flex":"none"}}>
      <Card sx={{ padding: "30px", overflow: "scroll" }} className="formcard">
        <IconButton
          aria-label="delete"
          onClick={() => setToggler(false)}
          style={{ transform: "translateY(-20px)" }}
        >
          <ImCancelCircle />
        </IconButton>
        <Typography variant="h5">CREATE STUDENT TASK</Typography>
        <form
          className="flex__column"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <TextField
            id="outlined-basic"
            label="Task"
            variant="outlined"
            sx={{
              marginTop: "30px",
              width: "100%",
              ":focus": {
                border: "solid 5px red",
              },
            }}
          />

          <TextField
            id="outlined-basic"
            label="Priority"
            type={"number"}
            variant="outlined"
            sx={{ marginTop: "30px", width: "100%" }}
          />

          <textarea
            id="outlined-basic"
            placeholder="Add Description"
            variant="outlined"
            style={{
              marginTop: "30px",
              width: "100%",
              height: "30vh",
              borderRadius: "20px",
              padding: "20px",
            }}
          />
          <div
            style={{
              position: "relative",
              alignItems: "center",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <List
              id="basic-menu"
              sx={{
                display: open ? "flex" : "none",
                position: "absolute",
                zIndex: "100",
                top: "-50px",
                left: "0",
              }}
            >
              <MenuItem
                onClick={() => AddDoc()}
                sx={{
                  background: "#c5c5c5",
                  padding: "10px",
                  ":hover": {
                    background: "gray",
                    color: "white",
                    boxShadow: "0px 2px 6px rgba(0,0,0,0.5)",
                  },
                }}
              >
                <ImFilesEmpty />
                Document
              </MenuItem>
              <MenuItem
                onClick={() => AddPic()}
                sx={{
                  background: "var(--blue)",
                  color: "white",
                  padding: "10px",
                  ":hover": {
                    background: "var(--blue-dim)",
                    color: "white",
                    boxShadow: "0px 2px 6px rgba(0,0,0,0.5)",
                  },
                }}
              >
                <ImFilePicture />
                Picture
              </MenuItem>
            </List>
            <Button
              onClick={() => setOpen(!open)}
              variant="outlined"
              sx={{
                marginTop: "10px",
                background: "whitesmoke",
                padding: "10px",
              }}
              size="small"
              endIcon={<ImAttachment />}
            >
              Attatchment
            </Button>
          </div>

          <div className="doclist" style={{ padding: "10px" }}>
            {docList.length === 0? (
              <Typography variant="body2" sx={{color:'gray'}}>No Documents Attachment required</Typography>
            ) : (
              docList.map((items) => <div>{items}</div>)
            )}
          </div>
          <hr />
          <div className="piclist" style={{ padding: "10px" }}>
          {picList.length === 0? (
              <Typography variant="body2" sx={{color:'gray'}}>No Pictures Attachment required</Typography>
            ) : (
              picList.map((items) => <div>{items}</div>)
            )}
          </div>
          <Button
            variant="contained"
            size="small"
            sx={{
              background: "var(--blue-dim)",
              width: "100%",
              color: "white",
              fontWeight: "bolder",
              fontSize: "17px",
              padding: "20px",
              marginTop: "20px",
              ":hover": {
                background: "var(--blue-dim)",
              },
            }}
            disableElevation
          >
            ADD TASK
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default AddtaskForm;
