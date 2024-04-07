import React, {useState} from 'react';
import './App.css';
import './box.css';
import {motion} from 'framer-motion';
import Questions from "./questions";

function App() {
	const [animDone, setAnimDone] = useState(false)
	const [isClicked, setIsClicked] = useState(false);

	const toggleClick = () => {
		setIsClicked(!isClicked);
	};

	return (
		<div className="container">
			<motion.div
				className={"box"}
				onClick={isClicked ? () => {} : toggleClick}
				onAnimationComplete={() => setAnimDone(true)}
				style={{
					width: 50,
					height: 50,
					borderRadius: 30,
				}}
				animate={isClicked ? {
					width: 450,
					height: 450,
					borderRadius: 30,
					padding: "8px"
				} : {}}
				transition={{
					type: "spring",
					damping: 10,
					mass: 0.75,
					stiffness: 100,
				}}
			>
				<div className={"title"}>
					<h1>
						🥙
					</h1>
					{
						animDone &&
						<h2 className="titleText" style={{marginLeft: "2vw"}}>
							How Much Halal Can I Afford?
						</h2>
					}
				</div>
				{animDone && <Questions/>}
			</motion.div>
		</div>
	);
}

export default App;
