import React from "react";
import "./App.css";

class App extends React.Component {
  
  state = {
    
    fullName: "Ghassen Bharoun",
    profession: "Just chilling",
    bio: "Young-Motivated and a future Full Stack Developer",
    image:'https://www.clipartmax.com/png/small/266-2667160_view-samegoogleiqdbsaucenao-1445839886361-gto-onizuka.png' ,
    show: true,
    cnt: 0,
  };

  handleClick = () => {
    this.setState({ show: !this.state.show });
  };
  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        cnt: prevState.cnt + 1,
      }));
    },1000);
  }

  render() {
    return (
      <div className="pos app">
        <div className="box">
          {this.state.show && (
            <div className="inf">
              <div className="pos profImg">
                <img src={this.state.image} alt="" />
              </div>
              <section className="pos">
                <h1>{this.state.fullName}</h1>
                <h3>{this.state.profession}</h3>
                <p>{this.state.bio}</p>
                <div className="count">
                  Count: {this.state.cnt}{" "}
                  sec
                </div>
              </section>
            </div>
          )}
          <button type="button" className="btn" onClick={this.handleClick}>
            Show Me
          </button>
        </div>
      
       
      </div>
    );
  }
}
export default App;
