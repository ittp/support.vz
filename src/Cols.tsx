import { parse } from "yaml";

let list = [
  { id: 1, key: 1, number: 424444, organization: 1, state: 1 },
  { id: 2, key: 2, number: 424446, organization: 2, state: 2 }
];

export default () => {
  let ColItems = ({ data }) =>
    Object.values(data).map((i, k) => {
      let item = list[k].number;
      return <div key={k}>{item}</div>;
    });
};
