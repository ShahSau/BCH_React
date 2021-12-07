const changeNameHandler = () => {
  console.log("WOW from box");
};

const Box = (props) => {
  return (
    <div className="box">
      <div>
        <h2>{props.name}</h2>
        <p>Title: {props.title}</p>
        <p>Age: {props.age}</p>
        <button onClick={changeNameHandler}>Click me</button>
      </div>
    </div>
  );
};

export default Box;
