import { useRouteError } from "react-router-dom";
import React from 'react'
export default function ErrorPage() {
	const error = useRouteError();

	return (
		<div id="error-page" className="d-flex justify-content-center align-items-center flex-column" style={{
			height: "100vh",
		}}>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}