import { useForm } from 'react-hook-form';
import { Button, Col, Row, Form, Spinner } from 'react-bootstrap';
import { Fragment, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
const ReactHookForms = () => {
    const [show, setShow] = useState(false)
    const { formState: { errors }, register, handleSubmit, reset } = useForm({
        defaultValues: {
            firstname: "John",
            lastname: "Smith",
            age: 20,
            password: "Strong@123",
            phoneNumber: "+918989898989",
            email: "rohan01@gmail.com",
            country: ["india"],
            state: ["uttrakhand"],
            cities: ["tokyo", "paris"],
            address: "John Doe 123 Maple Street, Apartment 4B Springfield, IL 62704 United States",
            pin_code: "263642",
            joining_date: "2026-05-20",
            gender: "male",
            hobbies: ["drawing", "singing"],
            // terms_and_condition: "agreed"

        }
    });
    const submitHandler = (value) => {
        setLoading(true);
        console.log(JSON.stringify(value))
        setShow(true)
        setTimeout(() => {
            setShow(false)
            toast.success("Form Submitted Successfully")
            reset()
        }, 3000)
        // document.getElementsByClassName("react-hook-form").reset()
    }
    return (
        <Fragment>
            <Form className='react-hook-form' onSubmit={handleSubmit(submitHandler)}>
                <fieldset disabled={show}>
                    <Row>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="firstname">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type=
                                "text" {...register("firstname"
                                    , {
                                        required: "The Firstname is required."
                                        ,
                                    })} />
                            <small className="text-danger">{errors?.firstname?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="lastname">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type=
                                "text" {...register("lastname"
                                    , {
                                        required: "The Second name is required."
                                        ,
                                    })} />
                            <small className="text-danger">{errors?.lastname?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" {...register("age"
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
                            <small className="text-danger">{errors?.age?.message}</small>
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
                            <small className="text-danger">{errors?.password?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="phone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type=
                                "tel" {...register("phoneNumber", {
                                    required: "phoneNumber field is required",
                                    pattern: { value: /^(?:\+?91)?[6-9]\d{9}$/, message: "Invalid number" }
                                }
                                )} />
                            <small className="text-danger">{errors?.phoneNumber?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type=
                                "email" {...register("email", {
                                    required: "The email address is required.",
                                    pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Please enter a valid email address" }
                                }
                                )} />
                            <small className="text-danger">{errors?.email?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="country">
                            <Form.Label>Select Country</Form.Label>
                            <Form.Select
                                {...register("country", { required: "Country is required" })}>
                                <option value={""}>Select Country</option>
                                {["INDIA", "USA", "Russia", "China"].map((val, index) => {
                                    return (
                                        <option key={index} value={val.split(" ").join("").toLowerCase()}>{val}</option>)
                                })}
                            </Form.Select>
                            <small className="text-danger">{errors?.country?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="state">
                            <Form.Label>Select State</Form.Label>
                            <Form.Select
                                {...register("state", { required: "state is required" })}>

                                <option value={""}>Select State</option> {["Uttrakhand", "Punjab", "Delhi", "Himanchal Pradesh"].map((val, index) => {
                                    return (
                                        <option key={index} value={val.split(" ").join("").toLowerCase()}>{val}</option>)
                                })}
                            </Form.Select>
                            <small className="text-danger">{errors?.state?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="cities">
                            <Form.Label>Select Prefered Cities</Form.Label>
                            <Form.Select multiple
                                {...register("cities", {
                                    required: "cities is required",
                                    validate: (value) => value.length == 2 || "Please select any two cities",
                                })} >
                                <option value={""}>Select Cities</option>
                                {["Tokyo", "Paris", "London", "New York"].map((val, index) => {
                                    return (
                                        <option key={index} value={val.split(" ").join("").toLowerCase()}>{val}</option>)
                                })}
                            </Form.Select>
                            <small className="text-danger">{errors?.cities?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="address">
                            <Form.Label>Your Complete Address</Form.Label>
                            <Form.Control as='textarea' style={{ resize: 'none' }} rows={4} {...register("address", { required: "Please Enter Your Complete Address" })}>
                            </Form.Control>
                            <small className="text-danger">{errors?.address?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="pin_code">
                            <Form.Label>Zip/Pin Code</Form.Label>
                            <Form.Control {...register("pin_code", {
                                required: "Please Enter Your Pin Code"
                            })}>
                            </Form.Control>
                            <small className="text-danger">{errors?.pin_code?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="joining_date">
                            <Form.Label>Joining Date</Form.Label>
                            <Form.Control type='date' {...register("joining_date", {
                                required: "Please Enter Your Joining Date",
                                validate: (date) => new Date(date) < new Date() || "Joining date must be less than today's date"
                            })}>
                            </Form.Control>
                            <small className="text-danger">{errors?.joining_date?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="gender">
                            <Form.Label className='d-block'>Gender</Form.Label>
                            <Form.Check type='radio' inline label="Male" value={"male"} id='Male' {...register("gender", { required: "Please select your gender" })}>
                            </Form.Check>
                            <Form.Check type='radio' inline label="Female" value={"female"} id='Female' {...register("gender")}>
                            </Form.Check>
                            <Form.Check type='radio' inline label="Transgender" value={"transgender"} id='Transgender' {...register("gender")}>
                            </Form.Check>

                            <small className="text-danger">{errors?.gender?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="hobbies">
                            <Form.Label className='d-block'>Hobbies</Form.Label>
                            <Form.Check type='checkbox' inline label="drawing" id='drawing' value={"drawing"}{...register("hobbies", {
                                required: "Please select your hobby",
                                validate: (value) => { return (value.length >= 2 || "minimum two need to select") }
                            })}>
                            </Form.Check>
                            <Form.Check type='checkbox' inline label="singing" id='singing' value={"singing"}{...register("hobbies")}>
                            </Form.Check>
                            <Form.Check type='checkbox' inline label="dancing" id='dancing' value={"dancing"}{...register("hobbies")}>
                            </Form.Check>

                            <small className="text-danger">{errors?.hobbies?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="profile-picture">
                            <Form.Label>Profile Picture</Form.Label>
                            <Form.Control type='file' {...register("profilePicture", {
                                required: "Profile picture is required",
                                validate: {
                                    fileSize: (value) => {
                                        if (!value || value.length === 0) return true;
                                        const file = value[0];
                                        const maxSize = 6 * 1024 * 1024
                                        return (file.size <= maxSize || "File size must be less than 6MB")
                                    },
                                    acceptedFormats: (value) => {
                                        if (!value || value.length === 0) return true;
                                        const file = value[0];
                                        const acceptedFormatList = ["image/jpeg", "image/png", "image/gif"];
                                        return (acceptedFormatList.includes(file.type) || "Only JPEG, PNG, and GIF images are allowed.");
                                    },
                                }
                            })} />

                            <small className="text-danger">{errors?.profilePicture?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="resume">
                            <Form.Label>Resume</Form.Label>
                            <Form.Control type='file' {...register("resume", {
                                required: "Resume is required",
                                validate: {
                                    acceptedFormats: (value) => {
                                        if (!value || value.length === 0) return true;
                                        const file = value[0];
                                        const acceptedFormatList = [
                                            "application/pdf",
                                            "application/msword",
                                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                                        ];
                                        return (acceptedFormatList.includes(file.type) || "Only PDF, DOC, and DOCX files are allowed");
                                    },
                                    fileSize: (value) => {
                                        if (!value || value.length === 0) return true;
                                        const file = value[0];
                                        const maxSize = 8 * 1024 * 1024
                                        return (file.size <= maxSize || "File size must be less than 8MB")
                                    },

                                }
                            })} />

                            <small className="text-danger">{errors?.resume?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="terms_and_condition">
                            <Form.Check type='checkbox' label="Agree to terms and conditions" value="agreed" {...register("terms_and_condition", { required: "You must agree to the Terms & Conditions before submitting" })} />

                            <small className="text-danger">{errors?.terms_and_condition?.message}</small>
                        </Form.Group>

                    </Row>
                    {
                        <Button className='text-start' disabled={show} type="submit">{!show ? ("Submit") : (<> < Spinner
                            animation="border"
                            size="sm"
                            className="me-2"
                        />
                            Submitting...</>)}</Button>

                    }
                </fieldset>
            </Form>
            <ToastContainer  position='top-right' />
        </Fragment>
    )
}

export default ReactHookForms
