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
                    <Form.Control type=
                        "text" {...register("age"
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
                {/* <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="phoneNumber">
                    <Form.Label>phoneNumber</Form.Label>
                    <Form.Control type=
                        "text" {...register("phoneNumber", {
                            required: "phoneNumber field is required",
                            minLength: {
                                value: "6",
                                message: "phoneNumber length should be greater than or equal to 6"
                            },
                            maxLength: {
                                value: "10",
                                message: "phoneNumber length should be less than or equal to 10"
                            },
                            validate: (value) => !value.includes(" ") || "phoneNumber should not contain spaces"
                        }
                        )} />
                    <div className="text-danger">{errors?.phoneNumber?.message}</div>
                </Form.Group> */}

            </Row><Button className='text-start' type="submit">Submit form</Button></Form>
    )
}

export default ReactHookForms
