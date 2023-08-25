export default function Footer() {
	const year = new Date().getFullYear()
	return (
		<footer className='footer footer-center p-4 bg-base-300 text-base-content fixed inset-x-0 bottom-0'>
			<div>
				<p>Copyright © {year} - Made by Jatin Kharbanda ❤️</p>
			</div>
		</footer>
	)
}
