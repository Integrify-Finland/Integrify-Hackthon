import { User } from "./User";
import { Customer } from "./Customer";
export interface Timesheet {
  _id: string,
  date: string,
  from: string,
  to: string,
  duration: string,
  rate: number,
  userName: User,
  customerName: Customer,
  exported: string,
  __v: number
}

// [
//   {
//     rate: 0,
//     _id: "62bb0ee4a82da43c7c19b791",
//     date: "2022-05-30T21:00:00.000Z",
//     from: "1970-01-01T00:00:00.020Z",
//     to: "1970-01-01T00:00:00.000Z",
//     duration: 14820,
//     userName: "62babcedb346744694633801",
//     customerName: "62bac709d2769b2484a0866a",
//     exported: "No",
//     __v: 0,
//   },
//   {
//     rate: 0,
//     _id: "62bb0ef8a82da43c7c19b793",
//     date: "2022-05-30T21:00:00.000Z",
//     from: "1970-01-01T00:00:00.016Z",
//     to: "1970-01-01T00:00:00.018Z",
//     duration: 5400,
//     userName: "62babca4a132f22c149a0525",
//     customerName: "62bacc1ff5ef3e2a101f2e3f",
//     exported: "No",
//     __v: 0,
//   },
// ];
