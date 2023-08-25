import { useState } from 'react'

export default function CreateArea({ addNote }: { addNote: Function }) {
	const [newNote, setNewNote] = useState({ title: '', content: '' })

	function handelChange(event: { target: { name: string; value: string } }) {
		const { name, value } = event.target

		setNewNote((prevValue) => ({ ...prevValue, [name]: value }))
	}

	function handleClick(event: { preventDefault: () => void }) {
		event.preventDefault()
		addNote((prevValue: any) => [...prevValue, newNote])
		setNewNote({ title: '', content: '' })
	}

	return (
		<div className='card items-center'>
			<div className='card w-96 bg-base-100 shadow-md shadow-primary'>
				<div className='card-body'>
					<form>
						<input
							name='title'
							type='text'
							placeholder='Title'
							className='input input-lg input-ghost w-full max-w-xs'
							onChange={handelChange}
							value={newNote.title}
						/>
						<textarea
							name='content'
							className='textarea textarea-lg textarea-ghost w-full max-w-xs'
							placeholder='Take a note...'
							rows={3}
							onChange={handelChange}
							value={newNote.content}></textarea>
						<div className='card-actions justify-end'>
							<button
								onClick={handleClick}
								className='btn btn-circle btn-primary absolute -bottom-5 right-8 text-2xl'>
								<span className='mb-1'>+</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
