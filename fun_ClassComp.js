// Write JavaScript here and press Ctrl+Enter to execute

const Tton = (prop) => {
return (
<button>{prop.label}</button>
);
}

class Button extends React.Component{
render(){
return (
<button>0</button>
);
}
}
ReactDOM.render(<Tton label="Fox"/>, mountNode);
ReactDOM.render(<Button/>,mountNode);

//__________________________________________________

class Button extends React.Component{
  state={counter:0}
	handleClick = () => {
	this.props.onClickFunction(this.props.incrementValue);
	};
  
render(){
	return(
		<button onClick={this.handleClick}>+{this.props.incrementValue}</button>
	);
}
}
const Result = (props)=>{
return(
<div>{props.counter}</div>
);
}
ReactDOM.render(<Button/>, mountNode);


//-----------------------------------------------------
// Write JavaScript here and press Ctrl+Enter to execute
/*
const Tton = (prop) => {
return (
<button>{prop.label}</button>
);
}

class Button extends React.Component{
render(){
return (
<button>0</button>
);
}
}
ReactDOM.render(<Tton label="Fox"/>, mountNode);
ReactDOM.render(<Button/>,mountNode);*/

/*class Button extends React.Component{
  state={counter:0}
	handleClick = () => {
	this.props.onClickFunction(this.props.incrementValue);
	};
  
render(){
	return(
		<button onClick={this.handleClick}>+{this.props.incrementValue}</button>
	);
}
}
const Result = (props)=>{
return(
<div>{props.counter}</div>
);
}*/
//ReactDOM.render(<Button/>, mountNode);*/

class Button extends React.Component{

//handleClick = () => {
//this.setState(prevState)=>({
//	counter: prevState.counter + 1
//})
//};

render(){
	return(
  
  <button onClick={()=>this.props.onClickFunction(this.props.incrementValue)}>+{this.props.incrementValue}</button>
  );
}
}
const Result = (props)=>{
return(

<div>{props.counter}</div>
);
}

class App extends React.Component{
	state = {counter:0};
  
  incrementCounter = (incrementValue) => {
		  this.setState((prevState)=>({
			counter: prevState.counter + incrementValue
  }));
  };
  render(){
  return(
  <div> 
  	<Button incrementValue={1} onClickFunction = {this.incrementCounter} />
    <Button incrementValue={5} onClickFunction = {this.incrementCounter} />
    <Button incrementValue={10} onClickFunction = {this.incrementCounter} />
    <Button incrementValue={50} onClickFunction = {this.incrementCounter} />
    <Result counter={this.state.counter}/>
  </div>
  )
  }
}
ReactDOM.render(<App />,mountNode);