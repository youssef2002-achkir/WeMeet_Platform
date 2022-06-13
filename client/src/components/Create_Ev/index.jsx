import React from 'react';
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./style.module.css";

const NewEvent = () => {
	const [data, setData] = useState({
		name: "",
		date: "",
		place: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/events";
			const { data: res } = await axios.post(url, data);
			navigate("/event_created");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Add New Event</h1>
						<input
							type="text"
							placeholder="title"
							name="title"
							onChange={handleChange}
							value={data.name}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="date"
							name="date"
							onChange={handleChange}
							value={data.date}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="place"
							name="place"
							onChange={handleChange}
							value={data.place}
							required
							className={styles.input}
						/>
						
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Add Event
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default NewEvent;