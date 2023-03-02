import React, { useState } from "react";
import { Container } from "../listTodo/list.styled";
import { Forms, Button } from "./form.styled";

export function Form({ data }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const formReset = () => {
    setName("");
    setDesc("");
  };

  const handleChange = (evt) => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "desc":
        setDesc(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    data({ name, desc });

    formReset();
  };

  return (
    <Container>
      <Forms onSubmit={handleSubmit}>
        <label htmlFor="">
          TASK
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            required
          />
        </label>
        <label htmlFor="">
          DESCRIPTION
          <input
            onChange={handleChange}
            type="text"
            name="desc"
            value={desc}
            required
          />
        </label>
        <Button type="submit">Create</Button>
      </Forms>
    </Container>
  );
}
