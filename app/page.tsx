import About from "components/About"
import Contact from "components/Contact"
import Header from "components/Header"
import Hero from "components/Hero"
import Works from "components/Works"

export default function Home() {
	return (
		<main>
			<Header />
			<Hero />
			<About />
			<Works />
			<Contact />
		</main>
	)
}
