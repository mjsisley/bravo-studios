import Head from "next/head";
// import Header from "../0shared/Header";
import { DndProvider, useDrop, useDrag } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
// import NoSSR from "react-no-ssr";
import Example from "./example";

const style1 = {
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left",
};

const Box = ({ name }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: "BOX" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.4 : 1;
  // const transform = isDragging && "rotate(30deg)";
  return (
    <div ref={drag} style={{ ...style1, opacity }}>
      {name}
    </div>
  );
};
const style2 = {
  height: "12rem",
  width: "12rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left",
};
const Dustbin = () => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "BOX",
    drop: () => ({ name: "Dustbin" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = canDrop && isOver;
  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }
  return (
    <div ref={drop} style={{ ...style2, backgroundColor }}>
      {isActive ? "Release to drop" : "Drag a box here"}
    </div>
  );
};

const Home = () => {
  return (
    // <NoSSR>
      <DndProvider backend={HTML5Backend}>
        <>
          <Head>
            <title>React DnD Trial</title>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          {/* <Header /> */}
          <Example />
        </>
      </DndProvider>
    // </NoSSR>
  );
};

export default Home;
