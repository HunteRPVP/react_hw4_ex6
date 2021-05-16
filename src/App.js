import "./App.css";
import React from "react";
import {
  Grommet,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "grommet";
import Worker from "./components/worker";

class App extends React.Component {
  theme = {
    global: {
      font: {
        family: "Roboto",
        size: "18px",
        height: "20px",
      },
    },
  };

  columns = [
    "Имя",
    "Фамилия",
    "Количество рабочих дней",
    "ЗП за день",
    "ЗП Итого",
  ];

  workers = [
    { firstName: "Вадим", lastName: "Потапов", workDays: 5, wage: 10000 },
    { firstName: "Иван", lastName: "Иванов", workDays: 6, wage: 9000 },
    { firstName: "Петр", lastName: "Петров", workDays: 7, wage: 8000 },
  ];

  constructor(props) {
    super(props);
    let tempSum = 0;
    this.workers.forEach((worker) => {
      tempSum += worker.wage * worker.workDays;
    });
    this.state = {
      finalWage: tempSum,
    };
  }

  handleChange = (changeName, id, value) => {
    if (changeName === "workDays") {
      this.workers[id].workDays = parseInt(value);
    } else {
      this.workers[id].wage = parseInt(value);
    }
    let finalWage = 0;
    this.workers.forEach((worker) => {
      finalWage += worker.wage * worker.workDays;
    });
    this.setState({
      finalWage,
    });
  };

  render() {
    return (
      <Grommet theme={this.theme}>
        <Table>
          <TableHeader>
            <TableRow>
              {this.columns.map((column) => {
                return (
                  <TableCell key={column} border="all">
                    {column}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.workers.map((worker, i) => {
              return (
                <Worker
                  firstName={worker.firstName}
                  lastName={worker.lastName}
                  workDays={worker.workDays}
                  wage={worker.wage}
                  key={i}
                  i={i}
                  onSumChange={this.handleChange}
                />
              );
            })}
            <TableRow>
              {this.columns.map((column, i) => {
                return (
                  <TableCell key={"second" + column} border="all">
                    {i === this.columns.length - 1 ? this.state.finalWage : ""}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableBody>
        </Table>
      </Grommet>
    );
  }
}

export default App;
