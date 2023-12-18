import * as Form from "@radix-ui/react-form";
import "../Style/Form.css";
import { Button } from "@radix-ui/themes";

const CreateNotice = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <h4>Create Notice</h4>
      <div
        style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}
      >
        <Form.Root className="FormRoot">
          <Form.Field className="FormField" name="name">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className="FormLabel">Name</Form.Label>
            </div>
            <Form.Control asChild>
              <input className="Input" type="text" required />
            </Form.Control>
          </Form.Field>
          <Form.Field className="FormField" name="dob">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className="FormLabel">Date of Birthday</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Please use 'ddmmyyyy' format
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className="Input" type="number" required />
            </Form.Control>
          </Form.Field>
          <Form.Field className="FormField" name="license_number">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className="FormLabel">License Number</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Please use valid license_number
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className="Input" type="number" required />
            </Form.Control>
          </Form.Field>
          <Form.Field className="FormField" name="Award">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className="FormLabel">Award</Form.Label>
            </div>
            <Form.Control asChild>
              <input className="Input" type="number" required />
            </Form.Control>
          </Form.Field>
          <Button style={{ marginTop: "2rem" }} size={"3"}>
            Create Notice
          </Button>
        </Form.Root>
      </div>
    </div>
  );
};

export default CreateNotice;
