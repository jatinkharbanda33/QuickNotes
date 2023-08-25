export default function Note({
	title,
	content,
	id,
	deleteNote,
}: {
	title: string
	content: string
	id: number
	deleteNote: Function
}) {
	function handleClick() {
		deleteNote((prevValue: any) => prevValue.filter((note: any, index: number) => index !== id))
	}

	return (
		<div className='card w-96 bg-base-100 shadow-md shadow-primary'>
			<div className='card-body'>
				<h2 className='card-title'>{title}</h2>
				<p>{content}</p>
				<div className='card-actions justify-end'>
					<button title='delete' className='btn btn-square btn-sm' onClick={handleClick}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
}
