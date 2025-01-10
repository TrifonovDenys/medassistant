export default function SpeakersLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 md:pt-36">
			<div className="inline-block text-center justify-between">
				{children}
			</div>
		</section>
	);
}
