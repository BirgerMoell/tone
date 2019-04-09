import React, { Component } from "react";
import Tone from "react-tone";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTonePlaying: false
    };

    this.audioContext = undefined;
    this.iosAudioContextUnlocked = false;
  }

  componentDidMount() {
    this.audioContext = new AudioContext();
  }

  handleClick = () => {
    if (!this.iosAudioContextUnlocked) this.playEmptyBuffer();

    this.setState({ isTonePlaying: true });
  }

  playEmptyBuffer = () => {
    // start an empty buffer with an instance of AudioContext
    const buffer = this.audioContext.createBuffer(1, 1, 22050);
    const node = this.audioContext.createBufferSource();
    node.buffer = buffer;
    node.start(0);
    this.iosAudioContextUnlocked = true;
  }

  handleToneStop = () => {
    this.setState({ isTonePlaying: false });
  }

  render() {
    // Pass the same instance of AudioContext that played an empty buffer to <Tone />
    return (
      <div>
        <button onClick={this.handleClick}>Play Tone</button>
        <Tone
          audioContext={this.audioContext}
          play={this.state.isTonePlaying}
          frequency={500}
          volume={0.8}
          length={2}
          onStop={this.handleToneStop}
        />

        <div id="container">
          <div class="column">
            <div class="row filled"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row filled"></div>
          </div>

          <div class="column">
            <div class="row filled"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row filled"></div>
          </div>

          <div class="column">
            <div class="row filled"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row filled"></div>
          </div>

          <div class="column">
            <div class="row filled"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row filled"></div>
          </div>

          <div class="column">
            <div class="row filled"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row filled"></div>
          </div>

          <div class="column">
            <div class="row filled"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row filled"></div>
          </div>

          <div class="column">
            <div class="row filled"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row filled"></div>
          </div>

          <div class="column">
            <div class="row filled"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row filled"></div>
          </div>

        </div>



      </div>
    );
  }
}

export default App