import React from "react";

const MILLION = 1000000;

export default class AmountWithCents extends React.Component {
  state = {
            sign: "",
            int: Math.abs(this.props.integerPart),
            cent: Math.abs(this.props.residuePart)
          };

  render() {
    if (this.props.integerPart < 0) this.state.sign = "-";
    if (this.state.int + this.state.cent === 0)
      return <div className={this.props.className}>0.00 ₽</div>;
    else if (
      this.state.int !== this.state.int ||
      this.state.cent !== this.state.cent
    )
      throw "NaN";
    else if (this.state.int >= MILLION)
      return (
        <div className={this.props.className}>
          <div className="amount_int">{this.state.sign + Math.floor(this.state.int / MILLION) +
            " " +
            Math.floor((this.state.int - MILLION) / 1000) +
            " " +
            (this.state.int % 1000)}</div>
            <div className="amount__cent">{'.' + Math.floor(this.state.cent / 10) + (this.state.cent % 10) + " ₽"}</div>
        </div>
      );
    else if (this.state.int >= 1000)
      return (
        <div className={this.props.className}>
          <div className="amount__int">{this.state.sign + Math.floor(this.state.int / 1000) +
            " " +
            (this.state.int % 1000)}</div>
          <div className="amount__cent">{Math.floor(this.state.cent / 10) +
          (this.state.cent % 10) +
          " ₽"}</div>
        </div>
      );
    else if (Math.abs(this.state.int) < 1000)
      return (
        <div className={this.props.className}>
          {this.state.sign + this.state.int +
            "." +
            Math.floor(this.state.cent / 10) +
            (this.state.cent % 10) +
            " ₽"}
        </div>
      );
    else return <div />;

    {
      /* return (
        <div className={this.props.className}>
          {console.log(this.state.int !== props.integerPart)}
          {0 && console.log("1test")}
          {props.integerPart === props.integerPart &&
            props.integerPart / 1000 > 1 &&
            Math.floor(props.integerPart / 1000)}
          {props.residuePart === props.residuePart && props.residuePart % 1000}
        </div>
      ); */
    }
  }
}
