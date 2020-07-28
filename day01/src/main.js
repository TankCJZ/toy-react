import { ToyReact, Component } from './ToyReact.js';

class ChildComponent extends Component {
  render() {
    return <div>
      <span>child</span>
    </div>
  }
}

class MyComponent extends Component{
  render() {
    return <div>
      <span>parent</span>
      <div>
        {true}
        {this.children}
      </div>
    </div>
  }
}

const a = <MyComponent name="a">
  <ChildComponent />
</MyComponent>


ToyReact.render(
  a,
  document.body,
);


// const a = <div name='a' id="a">
//             <span>1</span>
//             <span>2</span>
//             <span>3</span>
//           </div>

// console.log(a);
// document.body.appendChild(a);