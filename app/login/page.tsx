import { title } from "@/components/primitives";
import { Input } from "@/components/ui/input";

export default function SpeakersPage() {
	return (
		<div>
			<h1 className={title()}>Log</h1>
			<h2>Create an account</h2>
			<p></p>
			<form action="">
				<Input type="email" placeholder="Email" />
				<Input type="email" placeholder="Email"/>
		</form>
		</div>
	);
}
