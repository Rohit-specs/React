import React, { Fragment, useState } from 'react'
import { Button, Col, Row, Form, Spinner } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

const RHF_Yup = () => {
    const [show, setShow] = useState(false)
    const schema = yup.object().shape({
        firstname: yup.string().required("First name is required"),
        lastname: yup.string().required("Last name is required"),
        password: yup
            .string()
            .min(6, "Password length should be greater than or equal to 6")
            .max(10, "Password length must be less or equal to 10")
            .required("Password is required")
            .test("ToCheckInBetweenSpace", "Password can't contain spaces", (value) => {
                if (value.includes(' ')) return false; else return true;
            })
            .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?]/, "Password must contain at least one special character")
            .matches(/\d/, "Password must contain at least one digit"),
        age: yup.number()
            .min(18, "Age must be greater than 18")
            .max(40, "Age must be less than 40")
            .typeError("Age is required"),
        address: yup.string().
            required("Please enter your address, it's required"),
        country: yup.string()
        .required("Please select the country, it's required"),
        cities: yup.array().
            min(2, "Please select minimum two cities")
            .typeError("Please select the city it's required"),
        state: yup
            .string().
            required("Please select the state it's required"),
        joining_date: yup
            .string()
            .required("Please enter joining date.it's required")
            ,

        hobbies: yup
            .array()
            .typeError("Please select hobby it's required")
            .min(2, "Please select at least two hobbies"),
        pin_code: yup.string()
            .matches(/^\+?[1-9]\d{5,5}$/, "Enter valid PIN value")
            .required("Please enter valid Zip/Pin"),
        phoneNumber: yup
            .string()
            .matches(/^(?:\+?91)?[6-9]\d{9}$/, "Enter a valid phone number")
            .required("Phone number is required."),
        email: yup
            .string()
            .matches(
                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Enter a valid email address")
            .required("Email address is required."),
        gender: yup.string().required("Gender is required"),
        terms_and_condition: yup.bool().oneOf([true], "Terms must be accepted"),
        resume: yup
            .mixed()
            // .test("customRequired", "Please select your Resume", (value) => {
            //     return value && value.length > 0;;
            // })
            .required("Please select your Resume")
            .test("acceptedFormats", "Only PDF and DOCX files are allowed", (value) => {
                if (!value || !value[0]) return false;
                const file = value[0];
                const acceptedFormatList = [
                    "application/pdf",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                ];
                return acceptedFormatList.includes(file.type)

            })
            .test("fileSize", "File size must be less than 8MB.", (value) => {
                if (!value || !value[0]) return false;
                const file = value[0];
                const maxAllowedSize = 8 * 1024 * 1024;
                return file.size < maxAllowedSize
            }),
        profilePicture: yup
            .mixed()
            .required("Please select your profile picture")
            .test("customRequired", "Please attach profile picture. it's required", (value) => {
                return value && value.length > 0;
            })
            .test("acceptedFormats", "Only JPEG, PNG, and GIF images are allowed.", (value) => {
                if (!value || !value[0]) return false;
                const file = value[0];
                const acceptedFormatList = [
                    "image/jpeg",
                    "image/png",
                    "image/gif"
                ];
                return acceptedFormatList.includes(file.type)

            })
            .test("fileSize", "File size must be less than 6MB.", (value) => {
                if (!value || !value[0]) return false;
                const file = value[0];
                const maxAllowedSize = 6 * 1024 * 1024;
                return file.size < maxAllowedSize
            }),

    });

    const { formState: { errors }, register, handleSubmit, reset } = useForm({
        resolver: yupResolver(schema),
        // defaultValues: {
        //     firstname: "John",
        //     lastname: "Smith",
        //     age: 20,
        //     password: "Strong@123",
        //     phoneNumber: "+918989898989",
        //     email: "rohan01@gmail.com",
        //     country: "india",
        //     state: "uttrakhand",
        //     cities: ["tokyo", "paris"],
        //     address: "John Doe 123 Maple Street, Apartment 4B Springfield, IL 62704 United States",
        //     pin_code: "263642",
        //     joining_date: "2026-05-20",
        //     gender: "male",
        //     hobbies: ["drawing", "singing"],

        // }
    });
    const submitHandler = (value) => {
        console.log(JSON.stringify(value))
        setShow(true)
        setTimeout(() => {
            setShow(false)
            toast.success("Form Submitted Successfully")
            reset()
        }, 1500)
    }

    return (
        <Fragment>
            <Form className='Rhf-Yup' onSubmit={handleSubmit(submitHandler)}>
                <fieldset disabled={show}>
                    <Row>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="firstname">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type=
                                "text" {...register("firstname")} />
                            <small className="text-danger d-inline-block">{errors?.firstname?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="lastname">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type=
                                "text" {...register("lastname")} />
                            <small className="text-danger d-inline-block">{errors?.lastname?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" {...register("age")} />
                            <small className="text-danger d-inline-block">{errors?.age?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type=
                                "text" {...register("password")} />
                            <small className="text-danger d-inline-block">{errors?.password?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="phone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type=
                                "tel" {...register("phoneNumber")} />
                            <small className="text-danger d-inline-block">{errors?.phoneNumber?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type=
                                "email" {...register("email")} />
                            <small className="text-danger d-inline-block">{errors?.email?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="country">
                            <Form.Label>Select Country</Form.Label>
                            <Form.Select
                                {...register("country")}>
                                <option value={""}>Select Country</option>
                                {["INDIA", "USA", "Russia", "China"].map((val, index) => {
                                    return (
                                        <option key={index} value={val.split(" ").join("").toLowerCase()}>{val}</option>)
                                })}
                            </Form.Select>
                            <small className="text-danger d-inline-block">{errors?.country?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="state">
                            <Form.Label>Select State</Form.Label>
                            <Form.Select
                                {...register("state")}>

                                <option value={""}>Select State</option> {["Uttrakhand", "Punjab", "Delhi", "Himanchal Pradesh"].map((val, index) => {
                                    return (
                                        <option key={index} value={val.split(" ").join("").toLowerCase()}>{val}</option>)
                                })}
                            </Form.Select>
                            <small className="text-danger d-inline-block">{errors?.state?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="cities">
                            <Form.Label>Select Prefered Cities</Form.Label>
                            <Form.Select multiple
                                {...register("cities")} >
                                <option value={""}>Select Cities</option>
                                {["Tokyo", "Paris", "London", "New York"].map((val, index) => {
                                    return (
                                        <option key={index} value={val.split(" ").join("").toLowerCase()}>{val}</option>)
                                })}
                            </Form.Select>
                            <small className="text-danger d-inline-block">{errors?.cities?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="address">
                            <Form.Label>Your Complete Address</Form.Label>
                            <Form.Control as='textarea' style={{ resize: 'none' }} rows={4} {...register("address")}>
                            </Form.Control>
                            <small className="text-danger d-inline-block">{errors?.address?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="pin_code">
                            <Form.Label>Zip/Pin Code</Form.Label>
                            <Form.Control {...register("pin_code")}>
                            </Form.Control>
                            <small className="text-danger d-inline-block">{errors?.pin_code?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="joining_date">
                            <Form.Label>Joining Date</Form.Label>
                            <Form.Control type='date' {...register("joining_date")}>
                            </Form.Control>
                            <small className="text-danger d-inline-block">{errors?.joining_date?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="gender">
                            <Form.Label className='d-block'>Gender</Form.Label>
                            <Form.Check type='radio' inline label="Male" value={"male"} id='Male' {...register("gender")}>
                            </Form.Check>
                            <Form.Check type='radio' inline label="Female" value={"female"} id='Female' {...register("gender")}>
                            </Form.Check>
                            <Form.Check type='radio' inline label="Transgender" value={"transgender"} id='Transgender' {...register("gender")}>
                            </Form.Check>

                            <small className="text-danger d-inline-block">{errors?.gender?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="hobbies">
                            <Form.Label className='d-block'>Hobbies</Form.Label>
                            <Form.Check type='checkbox' inline label="drawing" id='drawing' value={"drawing"}{...register("hobbies")}>
                            </Form.Check>
                            <Form.Check type='checkbox' inline label="singing" id='singing' value={"singing"}{...register("hobbies")}>
                            </Form.Check>
                            <Form.Check type='checkbox' inline label="dancing" id='dancing' value={"dancing"}{...register("hobbies")}>
                            </Form.Check>

                            <small className="text-danger d-inline-block">{errors?.hobbies?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="profile-picture">
                            <Form.Label>Profile Picture</Form.Label>
                            <Form.Control type='file' {...register("profilePicture"
                                //     validate: {
                                //         fileSize: (value) => {
                                //             if (!value || value.length === 0) return true;
                                //             const file = value[0];
                                //             const maxSize = 6 * 1024 * 1024
                                //             return (file.size <= maxSize || "File size must be less than 6MB")
                                //         },
                                //         acceptedFormats: (value) => {
                                //             if (!value || value.length === 0) return true;
                                //             const file = value[0];
                                //             const acceptedFormatList = ["image/jpeg", "image/png", "image/gif"];
                                //             return (acceptedFormatList.includes(file.type) || "Only JPEG, PNG, and GIF images are allowed.");
                                //         },
                                //     }
                                // }
                            )} />

                            <small className="text-danger d-inline-block">{errors?.profilePicture?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="resume">
                            <Form.Label>Resume</Form.Label>
                            <Form.Control type='file' {...register("resume")} />

                            <small className="text-danger d-inline-block">{errors?.resume?.message}</small>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="terms_and_condition">
                            <Form.Check type='checkbox' label="Agree to terms and conditions" {...register("terms_and_condition")} />

                            <small className="text-danger d-inline-block">{errors?.terms_and_condition?.message}</small>
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
            <ToastContainer position='top-right' />
        </Fragment>
    )
}

export default RHF_Yup
