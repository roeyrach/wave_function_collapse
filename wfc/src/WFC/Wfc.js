import React from "react"
import draw from "./Model"

function Wfc() {
	const images = draw()

	return (
		<div className="image-grid">
			{images.map((row, rowIndex) => (
				<div key={rowIndex} className="image-row">
					{row.map((image, columIndex) => (
						<img
							style={{ transform: columIndex === 1 && `rotate(${image.rotate}deg)`, border: "1px solid black" }}
							key={columIndex}
							src={image.tile}
							alt=""
							className="image-col"
						></img>
					))}
				</div>
			))}
		</div>
	)
}

export default Wfc
