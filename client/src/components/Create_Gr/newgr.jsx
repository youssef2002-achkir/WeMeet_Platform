import React from 'react';
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./style.module.css";

const NewGroup = () => {
	const [data, setData] = useState({
		Name: "",
		Description: "",
		Admin: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/groups";
			const { data: res } = await axios.post(url, data);
			navigate("/groupcreate");
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
						<h1>Create Group</h1>
						<input
							type="text"
							placeholder="Name"
							name="Name"
							onChange={handleChange}
							value={data.Name}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Description"
							name="Description"
							onChange={handleChange}
							value={data.Description}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Admin"
							name="Admin"
							onChange={handleChange}
							value={data.Admin}
							required
							className={styles.input}
						/>
						
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default NewGroup;