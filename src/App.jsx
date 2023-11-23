import { Component } from "react";
import Button from "react-bootstrap/Button";
import ProfileCard from "./assets/components/ProfileCard";
import NavBar from "./assets/components/NavBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // person object is here
      person: {
        fullName: "John Doe",
        bio: `is a Web Developer and a lively person who enjoys making life easier for human.`,
        imgSrc:
          "https://img.freepik.com/premium-photo/young-modern-programmer-huge-it-company-corporation_274679-40355.jpg?size=626&ext=jpg&ga=GA1.1.1777253689.1700062667&semt=ais",
        profession: "Freelancer",
      },
      shows: false,
      timeInterval: 0,
    };
  }

  //The componentDidMount() method keep track of the last time the component was mounted.
  componentDidMount() {
    setInterval(() => {
      this.setState({
        timeInterval: this.state.timeInterval + 1,
      });
    }, 1000);
  }

  //function to toggling ShowState.
  toggleShowState = () => {
    this.setState({
      shows: !this.state.shows,
    });
  };

  // The design of our card goes in here!
  RenderProfileCard() {
    return <ProfileCard person={this.state.person} />;
  }

  // class component uses a render method
  render() {
    return (
      <div className="d-flex flex-column gap-3 align-items-center">
        <NavBar />
        {this.state.shows && this.RenderProfileCard()}
        <Button
          onClick={this.toggleShowState}
          className="w-25"
          variant="secondary"
        >
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </Button>
        <p>This component was first mounted {this.state.timeInterval}s ago </p>
      </div>
    );
  }
}

export default App;
