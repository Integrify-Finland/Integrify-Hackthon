export interface Customer {
  _id: string;
  customerName: string;
  activity: string;
  projectName: string;
  hourlyRate: number;
  monthlyRate: number;
  billable: string;
  __v: number;
}

// [
//   {
//     activity: "Development",
//     billable: "Yes",
//     _id: "62bac709d2769b2484a0866a",
//     hourlyRate: 80,
//     monthlyRate: 0,
//     customerName: "ABS Solutions",
//     project: "FeetB",
//     __v: 0,
//   },
//   {
//     activity: "Development",
//     billable: "Yes",
//     _id: "62bacc1ff5ef3e2a101f2e3f",
//     customerName: "Paddington Ltd",
//     project: "Rage and Sell",
//     hourlyRate: null,
//     monthlyRate: 18750,
//     __v: 0,
//   },
// ];
