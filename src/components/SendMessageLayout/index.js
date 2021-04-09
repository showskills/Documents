import { Form } from "react-bootstrap";

const SendMessage = () => {
  return (
    <div>
      <Form>
        <Form.Group >
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </div>
  );
};

export default SendMessage;
