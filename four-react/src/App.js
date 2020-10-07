import React, { Component } from 'react';
import TabCard from './compro/TabCard';
import Tab from './compro/TabCard';

export default class App extends Component {
  state = {
    count: 0,
    imgC: 0,
    text: ""
  };
  setName = (addname) => {
    this.setState({ text: addname });
  };
  render() {   
    const picList = ["https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/120331003_2673306136257225_5627365831170474321_o.jpg?_nc_cat=110&_nc_sid=730e14&_nc_ohc=AWPdkPwF6WYAX9yGqT1&_nc_ht=scontent.fbkk7-2.fna&oh=96207a41544c3f51b99d81948b9b5069&oe=5FA4B7E5",
      "https://scontent.fbkk7-3.fna.fbcdn.net/v/t1.0-9/120373328_2673306212923884_5396853271880866721_n.jpg?_nc_cat=100&_nc_sid=730e14&_nc_ohc=EmY-vpEG-GAAX8dtL24&_nc_ht=scontent.fbkk7-3.fna&oh=a820b54711b287224a51e8654be3f431&oe=5FA13610",
      "https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/120375248_2673306239590548_7794608346020773535_n.jpg?_nc_cat=102&_nc_sid=730e14&_nc_ohc=Gwv4p_EbRYcAX9YbQ_8&_nc_ht=scontent.fbkk7-2.fna&oh=c673d2aa4d60fd3b79283dde86df7a21&oe=5FA295E4",
      "https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/120454556_2673306349590537_8604055987057004491_n.jpg?_nc_cat=110&_nc_sid=730e14&_nc_ohc=iMytz1dwpkAAX-9P-m1&_nc_ht=scontent.fbkk7-2.fna&oh=5cdfa0e4513c945bb52fd9a92f85f620&oe=5FA4C230"];

    return (
      <div>
        <div>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
          <p>{this.state.count}</p>
          <button onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
        </div>
        <br></br>
        <div>
          <div><img src={picList[this.state.imgC]} style={{ width: "500px", height: "400px" }} /></div>
          <button
            onClick={() => this.setState({ imgC: this.state.imgC - 1 })}
            disabled={this.state.imgC === 0}>prev</button>



          <button onClick={() => this.setState({ imgC: 0 })} disabled={this.state.imgC === 0}>1</button>
          <button onClick={() => this.setState({ imgC: 1 })} disabled={this.state.imgC === 1}>2</button>
          <button onClick={() => this.setState({ imgC: 2 })} disabled={this.state.imgC === 2}>3</button>
          <button onClick={() => this.setState({ imgC: 3 })} disabled={this.state.imgC === 3}>4</button>

          <button
            onClick={() => this.setState({ imgC: this.state.imgC + 1 })}
            disabled={this.state.imgC === 3}>next</button>


        </div>
        <br></br>
        <div>


        </div>

      </div>
    );
  }
}