import { useForm } from 'react-hook-form';
import { Button, Col, Row, Form } from 'react-bootstrap';
const ReactHookForms = () => {
    const { formState: { errors }, register, handleSubmit } = useForm();
    const submitHandler = () => {

    }
    return (
        <Form className='react-hook-form' onSubmit={handleSubmit(submitHandler)}>
            <Row>
                <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="firstname">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type=
                        "text" {...register("firstname"
                            , {
                                required: "The Firstname is required."
                                ,
                            })} />
                    <div className="text-danger">{errors?.firstname?.message}</div>
                </Form.Group>
                <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="secondname">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type=
                        "text" {...register("secondname"
                            , {
                                required: "The Second name is required."
                                ,
                            })} />
                    <div className="text-danger">{errors?.secondname?.message}</div>
                </Form.Group>
                <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" {...register("age"
                        , {
                            required: "The age is required."
                            ,
                            min: {
                                value: 18,
                                message: "Age must be greater than or equal to 18"
                            },
                            max: {
                                value: 40,
                                message: "Age must be less than or equal to 40"
                            },
                        })} />
                    <div className="text-danger">{errors?.age?.message}</div>
                </Form.Group>
                <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type=
                        "text" {...register("password", {
                            required: "Password field is required",
                            minLength: {
                                value: "6",
                                message: "Password length should be greater than or equal to 6"
                            },
                            maxLength: {
                                value: "10",
                                message: "Password length should be less than or equal to 10"
                            },
                            validate: (value) => !value.includes(" ") || "Password should not contain spaces"
                        }
                        )} />
                    <div className="text-danger">{errors?.password?.message}</div>
                </Form.Group>
                <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type=
                        "tel" {...register("phoneNumber", {
                            required: "phoneNumber field is required",
                            pattern: { value: /^(?:\+?91)?[6-9]\d{9}$/, message: "Invalid number" }
                        }
                        )} />
                    <div className="text-danger">{errors?.phoneNumber?.message}</div>
                </Form.Group>
                <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="email">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type=
                        "email" {...register("email", {
                            required: "The email address is required.",
                            pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Please enter a valid email address" }
                        }
                        )} />
                    <div className="text-danger">{errors?.email?.message}</div>
                </Form.Group>
                <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="country">
                    <Form.Label>Select Country</Form.Label>
                    <Form.Select
                        {...register("country", { required: "Country is required" })}>
                            <option value={""}>Select Country</option>
                            <option value={"india"}>INDIA</option>
                            <option value={"usa"}>USA</option>
                            <option value={"russia"}>Russia</option>
                            <option value={"china"}>China</option>
                        </Form.Select>
                    <div className="text-danger">{errors?.country?.message}</div>
                </Form.Group>
                <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="state">
                    <Form.Label>Select State</Form.Label>
                    <Form.Select
                        {...register("state", { required: "state is required" })}>
                            <option value={""}>Select State</option>
                            <option value={"Uttrakhand"}>Uttrakhand</option>
                            <option value={"Punjab"}>Punjab</option>
                            <option value={"Delhi"}>Delhi</option>
                            <option value={"Himanchal"}>Himanchal Pradesh</option>
                        </Form.Select>
                    <div className="text-danger">{errors?.state?.message}</div>
                </Form.Group>
                <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="cities">
                    <Form.Label>Select Prefered Cities</Form.Label>
                    <Form.Select
                        {...register("cities", { required: "cities is required" })}>
                            <option value={""}>Select State</option>
                            
                        </Form.Select>
                    <div className="text-danger">{errors?.state?.message}</div>
                </Form.Group>

            </Row><Button className='text-start' type="submit">Submit form</Button></Form>
    )
}

export default ReactHookForms
