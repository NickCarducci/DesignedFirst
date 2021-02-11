import React from "react";
import "./styles.css";

export default class App extends React.Component {
  render() {
    return (
      <div
        style={{
          overflowY: "auto",
          overflowX: "hidden",
          flexDirection: "column",
          display: "flex",
          position: "fixed",
          height: "100%",
          width: "100%",
          color: "rgb(225, 225, 225)",
          backgroundColor: "rgb(0, 0, 0)"
        }}
      >
        <div
          style={{
            fontFamily: "sans-serif",
            textAlign: "center",
            display: "flex",
            position: "absolute",
            flexDirection: "column",
            width: "100%",
            height: "min-content"
          }}
        >
          <h1>DesignedFirst</h1>
          <h2>
            Kondratiev and industrieal revolutions have ultimate products that
            innovate whole markets. You can sell out your share and get partial
            products, as per common copyright law and I agree.
          </h2>
          <h4 style={{ display: "inline-block" }}>
            zoom is webX rebranded, governments have been known to be nefarious,
            lie and kill. their proof spittle floats actually proves it does
            not.{" "}
            <a href="https://www.tandfonline.com/doi/full/10.1080/02786826.2020.1749229?fbclid=IwAR2_J0XzOWJOtOYUqpEpFnBIAwUvRhn_lqjx5-c8t41-5WsF3lpssOpPPiY">
              [1]
            </a>
            <span style={{ color: "blue" }}>cites</span>
            <a href="https://academic.oup.com/jid/article/191/9/1472/862003?fbclid=IwAR2YrXjKxImRTt4BvmMX7Ryx-57ZVSl8ypdq5HRfcwV6fJ9v5vfzqzR0hC4">
              [2]
            </a>
            <br />
            since I have contributed so much with my open-source designing since
            2014{" "}
            <a href="https://projects.invisionapp.com/share/RSBG9X06H#/screens">
              [3]
            </a>
            , they put covid-sars into the financially and otherwise
            conspiring-food distribution network of corporations. Most
            government debt is other government's assets.. we already have been
            sold out to foreigners and have a one-world-government.
            <a href="https://froth.app">[4]</a> We need to apply capitalism as
            Schumpeter says, and means of production should be owned by those
            who produce, not those who lend, coagulate cross-party risk or
            rent-out more than they can use themselves
            <a href="https://vaults.biz">[5]</a>
          </h4>
          <h4
            style={{
              display: "inline-block",
              fontSize: "15px",
              color: "grey",
              wordBreak: "break-word"
            }}
          >
            [1]&nbsp;-&nbsp;https://www.tandfonline.com/doi/full/10.1080/02786826.2020.1749229?fbclid=IwAR2_J0XzOWJOtOYUqpEpFnBIAwUvRhn_lqjx5-c8t41-5WsF3lpssOpPPiY
            <br />{" "}
            [2]&nbsp;-&nbsp;https://academic.oup.com/jid/article/191/9/1472/862003?fbclid=IwAR2YrXjKxImRTt4BvmMX7Ryx-57ZVSl8ypdq5HRfcwV6fJ9v5vfzqzR0hC4
            <br />
            [3]&nbsp;-&nbsp;https://projects.invisionapp.com/share/RSBG9X06H#/screens
            <br />
            [4]&nbsp;-&nbsp;https://froth.app <br />
            [5]&nbsp;-&nbsp;https://vaults.biz
          </h4>
        </div>
      </div>
    );
  }
}
