import { title, subtitle } from "@/components/primitives";
import SpeakerCard from "@/components/speaker-card";
export default function SpeakersPage() {
	return (
		<div>
			<h1 className={title({ color: 'violet', size: "xl" })}>Спікери</h1>
			<h2 className={subtitle({ class: 'mt-4 md:px-40 px-2' })}>Наші спікери – це досвідчені фахівці, які записують пізнавальні та практичні відео на YouTube. Вони допоможуть вам залишатися в курсі нових тенденцій та технологій у галузі медицини, пропонуючи зручний формат навчання та обміну досвідом.</h2>
			<div className="flex flex-wrap gap-3 justify-around md:pt-36">
				<SpeakerCard />
				<SpeakerCard />
				<SpeakerCard />
				<SpeakerCard />
				<SpeakerCard />
				<SpeakerCard />
				<SpeakerCard />
				<SpeakerCard />
			</div>
		</div>
	);
}
