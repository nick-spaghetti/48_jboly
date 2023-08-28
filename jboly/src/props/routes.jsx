import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const JbolyRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={}/>
					<Route path="*" element={<Navigate to='/' />}/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default JbolyRoutes;
