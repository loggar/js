import { validate, ValidationError } from "jsonschema";
import moment from "moment";

const oValidate = (() => {
  const schema = () => ({
    type: "object",
    properties: {
      id: {
        type: "string",
        minLength: 1,
        maxLength: 9,
        pattern: "\\d+",
      },
      title: {
        type: "string",
        minLength: 1,
        maxLength: 512,
      },
      date: {
        type: "string",
      },
      body: {
        type: "string",
        minLength: 1,
        maxLength: 2048,
      },
      tags: {
        type: "array",
        items: { type: "string", minLength: 1, maxLength: 128 },
      },
    },
    required: ["id", "title", "date", "body"],
  });

  const validateDate = (str) => {
    const m = moment(str, "YYYY-MM-DD", true);
    if (!m.isValid()) {
      const e = new ValidationError("is invalid date");
      e.name = "dateFormat";
      e.property = "instance.date";
      return e;
    }
    return null;
  };

  const check = (o) => {
    const v = validate(o, schema());
    const d = validateDate(o.date || "");
    if (d) v.errors.push(d);
    return v;
  };

  return check;
})();

/*
const o1 = {
  id: "123",
  title: "asdee sadfsdfsdf",
  date: "2022-08-20",
  body: "body",
  tags: [],
};
*/

const o1 = {
  id: "111230",
  title: "asdee sadfsdfsdf",
  date: "2022-0",
  body: "",
  tags: [],
};

const r = oValidate(o1);
console.log(r.errors);

const errors = r.errors.map((e) => `${e.property} ${e.message}`);
console.log(errors);
console.log(new Error(errors));
