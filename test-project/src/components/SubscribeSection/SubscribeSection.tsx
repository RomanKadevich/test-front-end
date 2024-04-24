import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { signInSchema } from "../../constants";
import { yupResolver } from "@hookform/resolvers/yup";
import "./SubscribeSection.scss"
import { useState } from "react";
import Modal from "../Modal/Modal";
type Credential = {
    email: string;

  };
  
const SubscribeSection = () => {
    const [error, setError] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(
            signInSchema("Email is required", "Email must be a valid email")
        ),
    });
    const onSubmit = async ({ email }:Credential) => {
        console.log(email)

        try {

            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: "email",
                    body: email,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            reset();
            if (!response.ok) {
                throw new Error('Error sending data');
            }
            setModalTitle('Success');
            setModalMessage('You have successfully subscribed to the email newsletter');
            setShowModal(true);
        } catch (error) {
            if (error instanceof Error) {
                setModalTitle("Error")
                setError(error.message);
                setShowModal(true);
            }
        }
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setError(null);
    };
    return (
        <div className="subscribe">
            <form className="subscribe__form" onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    placeholder="Enter your Email and get notified"
                    {...register("email")}

                    variant="outlined"
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message ?? ""}

                />
                <button className="subscribe__button" type="submit" disabled={!isValid}>
                    <img
                        src="./src/assets/arrow-right-black.svg"
                        alt="arrow"
                        className="subscribe__icon"
                    />
                </button>
            </form>
            {showModal && <Modal message={error || modalMessage} info={modalTitle} onClose={handleCloseModal} />}
        </div>
    );
};

export default SubscribeSection;