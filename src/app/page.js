import Link from "next/link";

const Home = () => {
	return (
		<div>
			{/* Header */}
			<header className='bg-yellow-900 p-4'>
				<nav className='container mx-auto flex justify-between items-center'>
					<div className='text-white text-2xl font-bold'>Bakery</div>
					<ul className='flex space-x-6'>
						<li>
							<Link href='/' className='text-white'>
								Home
							</Link>
						</li>
						<li>
							<Link href='#about' className='text-white'>
								About
							</Link>
						</li>
						<li>
							<Link href='#services' className='text-white'>
								Our Breads
							</Link>
						</li>
						<li>
							<Link href='#contact' className='text-white'>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</header>

			{/* Hero section */}
			<section className='bg-yellow-50 h-screen flex items-center justify-center'>
				<div className='text-center'>
					<h1 className='text-5xl font-bold mb-4 text-yellow-900'>
						Freshly Baked, Every Day
					</h1>
					<p className='text-xl mb-4 text-yellow-800'>Bread.</p>
					<button className='bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700'>
						Order Now
					</button>
				</div>
			</section>

			{/* About Us section */}
			<section id='about' className='bg-white py-20'>
				<div className='container mx-auto text-center'>
					<h2 className='text-4xl font-bold mb-6 text-yellow-900'>Our Story</h2>
					<p className='text-lg text-yellow-700'>Story</p>
				</div>
			</section>

			{/* Our Breads section */}
			<section id='services' className='bg-yellow-50 py-20'>
				<div className='container mx-auto text-center'>
					<h2 className='text-4xl font-bold mb-6 text-yellow-900'>
						Our Breads
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<div className='bg-white p-6 rounded-lg shadow-lg'>
							<h3 className='text-xl font-semibold mb-4 text-yellow-900'>
								Bread
							</h3>
							<p className='text-yellow-700'>Fresh bread</p>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-lg'>
							<h3 className='text-xl font-semibold mb-4 text-yellow-900'>
								Rolls
							</h3>
							<p className='text-yellow-700'>Fresh Rolls</p>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-lg'>
							<h3 className='text-xl font-semibold mb-4 text-yellow-900'>
								Baguette
							</h3>
							<p className='text-yellow-700'>Fresh Bugette</p>
						</div>
					</div>
				</div>
			</section>

			{/* Contact section */}
			<section id='contact' className='bg-white py-20'>
				<div className='container mx-auto text-center'>
					<h2 className='text-4xl font-bold mb-6 text-yellow-900'>
						Get in Touch
					</h2>
					<p className='text-lg text-yellow-700 mb-6'>
						Ask us some questions ;)
					</p>
					<form className='max-w-md mx-auto'>
						<div className='mb-4'>
							<input
								type='text'
								placeholder='Your Name'
								className='w-full p-3 border border-yellow-300 rounded-lg'
							/>
						</div>
						<div className='mb-4'>
							<input
								type='email'
								placeholder='Your Email'
								className='w-full p-3 border border-yellow-300 rounded-lg'
							/>
						</div>
						<div className='mb-4'>
							<textarea
								placeholder='Your Message'
								className='w-full p-3 border border-yellow-300 rounded-lg'></textarea>
						</div>
						<button className='bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700'>
							Send Message
						</button>
					</form>
				</div>
			</section>

			{/* Footer */}
			<footer className='bg-yellow-900 p-4'>
				<div className='container mx-auto text-center text-white'>
					<p>&copy; 2023 Bakery. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
};

export default Home;
