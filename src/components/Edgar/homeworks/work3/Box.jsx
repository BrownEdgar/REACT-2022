import React, { Fragment, useEffect} from 'react'

export default function Box(props) {
	useEffect(() => {
		console.log(" box useEffect");
		
	})
  return (
	  <>
		  <h1>{props.data}</h1>
		  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nostrum. Similique repellendus quis, inventore soluta eius expedita asperiores unde qui quasi. Sunt voluptatem hic autem adipisci numquam pariatur error neque?	</h1>
	  </>
  )
}
