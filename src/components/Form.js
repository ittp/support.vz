const { default: Form } = require("antd/es/form/Form");
const { default: Input } = require("antd/es/input/Input");

const FormComponent = (ctx) => {
  return (
    <Form id={"form"}>
      <Input type="text" />
    </Form>
  );
};
