import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import CreateArea from './CreateArea'
import Footer from './Footer'
import Header from './Header'
import Note from './Note'

export default function App() {
	const [notes, setNotes] = useState([{ title: 'Note Title', content: 'Note Content...' }])
	return (
		<div>
			<Header />
			<CreateArea addNote={setNotes} />
			<div className='divider my-10'>Notes</div>
			<div className='artboard mx-8 md:mx-16 mb-24'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-8'>
					{notes.map((note, index) => {
						return (
							<div key={uuidv4()}>
								<Note
									key={uuidv4()}
									id={index}
									title={note.title}
									content={note.content}
									deleteNote={setNotes}
								/>
							</div>
						)
					})}
				</div>
			</div>
			<Footer />
		</div>
	)
}

