import { useState } from "react";
import { Listn, Item, Container, ChecBox } from "./list.styled";
import { Modal } from "../modal/modal";

export const List = ({ list, delate, toggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prevState) => {
      setIsOpen(!prevState);
    });
  };
  return (
    <Container>
      <Listn>
        {list.map((task) => (
          <Item key={task.id}>
            <ChecBox
              type="checkbox"
              checked={task.status}
              onChange={() => toggle(task.id)}
            />
            <div onClick={toggleModal}>
              {task.name}: {task.desc}
            </div>
            <button type="button" onClick={() => delate(task.id)}>
              Delete
            </button>
            {isOpen && (
              <Modal
                title={task.name}
                desc={task.desc}
                close={toggleModal}
              ></Modal>
            )}
          </Item>
        ))}
      </Listn>
    </Container>
  );
};
