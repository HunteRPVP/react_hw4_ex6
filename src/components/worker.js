import React from "react";
import { TableCell, TableRow } from "grommet";

export default class Worker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      workDays: this.props.workDays,
      wage: this.props.wage,
      resultWage: this.props.workDays * this.props.wage,
    };
  }

  changeWorkDays = (e) => {
      const worker = this.state;
      worker.workDays = e.target.value;
      worker.resultWage = worker.workDays * worker.wage;
      this.setState(worker);
      this.props.onSumChange('workDays', this.props.i, e.target.value);
  }

  changeWage = (e) => {
    const worker = this.state;
    worker.wage = e.target.value;
    worker.resultWage = worker.workDays * worker.wage;
    this.setState(worker);
    this.props.onSumChange('wage', this.props.i, e.target.value);
}

  render() {
    return (
      <TableRow>
        <TableCell border="all">{this.state.firstName}</TableCell>
        <TableCell border="all">{this.state.lastName}</TableCell>
        <TableCell border="all">
          <input type="number" value={this.state.workDays} onChange={this.changeWorkDays} />
        </TableCell>
        <TableCell border="all">
          <input type="number" value={this.state.wage} onChange={this.changeWage} />
        </TableCell>
        <TableCell border="all" >
          {this.state.resultWage}
        </TableCell>
      </TableRow>
    );
  }
}
