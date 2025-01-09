import { subtitle, title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { button as buttonStyles } from '@nextui-org/theme';
import { Icon } from "@iconify/react";
export default function DocumentsPage() {
	return (
		<div>
			<h1 className={title({ color: 'violet', size: 'lg' })}>Документація</h1>
			<h2 className={subtitle({ class: 'mt-4 mb-8' })}>Прозорість та відкритість. Тут ви знайдете всю необхідну інформацію про нашу діяльність.</h2>
			<div className="flex flex-wrap justify-evenly mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] mt-[-40px] !mb-[4.5rem] xl:!mb-[6rem] lg:!mb-[6rem] md:!mb-[6rem] !text-center">
				<div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[40px] max-w-full">
					<div className="flex justify-center pointer-events-none mb-5">
						<Icon icon="uil-document-info" className="w-10 h-10 text-[#006FEE]" />
					</div>
					<h2 className={subtitle()}>
						Статут
					</h2>
					<p className="!my-3">
						Визначає її правовий статус, структуру, цілі діяльності, права та обов'язки учасників, а також порядок управління.
					</p>
					<a
						href="https://medassistant.info/wp-content/uploads/2022/01/%D0%A1%D1%82%D0%B0%D1%82%D1%83%D1%82.pdf"
						className={buttonStyles({ color: 'primary', variant: 'flat', radius: 'full' })}
					>
						Дізнатися більше
					</a>
				</div>

				<div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[40px] max-w-full">
					<div className="flex justify-center pointer-events-none mb-5">
						<Icon icon="bi:mortarboard-fill" className="w-10 h-10 text-[#17C964]" />
					</div>
					<h2 className={subtitle()}>
						Академічна доброчесність
					</h2>
					<p className="!my-3">
						Сукупність етичних принципів та правил, яких дотримуються учасники освітнього процесу (студенти, викладачі, науковці) під час навчання, досліджень та інших академічних заходів.
					</p>
					<a href="https://medassistant.info/wp-content/uploads/2022/01/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-%D0%BF%D1%80%D0%BE-%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D1%96%D1%87%D0%BD%D1%83-%D0%B4%D0%BE%D0%B1%D1%80%D0%BE%D1%87%D0%B5%D1%81%D0%BD%D1%96%D1%81%D1%82%D1%8C-.pdf" className={buttonStyles({ color: 'success', variant: 'flat', radius: 'full' })}>Дізнатися більше</a>
				</div>
			</div>
			<div className="flex flex-wrap justify-evenly mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] mt-[-40px] !mb-[4.5rem] xl:!mb-[6rem] lg:!mb-[6rem] md:!mb-[6rem] !text-center">
				<div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[40px] max-w-full">
					<div className="flex justify-center pointer-events-none mb-5">
						<Icon icon="uil:file-question-alt" className="w-10 h-10 text-[#F5A524]" />
					</div>
					<h2 className={subtitle()}>
						Запобігання конфлікту інтересів
					</h2>
					<p className="!my-3">
						Встановлює правила та процедури, спрямовані на запобігання ситуаціям, коли особи, які організовують або беруть участь у заходах підвищення кваліфікації, можуть приймати рішення, які суперечать їхнім особистим інтересам або інтересам організацій, з якими вони пов'язані.
					</p>
					<a href="https://medassistant.info/wp-content/uploads/2022/01/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-%D0%BF%D1%80%D0%BE-%D0%B7%D0%B0%D0%BF%D0%BE%D0%B1%D1%96%D0%B3%D0%B0%D0%BD%D0%BD%D1%8F-%D0%BA%D0%BE%D0%BD%D1%84%D0%BB%D1%96%D0%BA%D1%82%D1%83.pdf" className={buttonStyles({ color: 'warning', variant: 'flat', radius: 'full' })}>Дізнатися більше</a>
				</div>
				<div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[40px] max-w-full">
					<div className="flex justify-center pointer-events-none mb-5">
						<Icon icon="uil:paperclip" className="w-10 h-10 text-[#F31260]" />
					</div>
					<h2 className={subtitle()}>
						Методологію оцінювання
					</h2>
					<p className="!my-3">
						Описує, як саме перевіряються знання, вміння та навички медичних працівників після проходження ними навчальних програм. Цей документ затверджується організацією, яка проводить навчання.
					</p>
					<a href="https://medassistant.info/wp-content/uploads/2022/01/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%8E-%D0%BE%D1%86%D1%96%D0%BD%D1%8E%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F-%D0%BD%D0%B0%D0%B1%D1%83%D1%82%D0%B8%D1%85-%D0%B7%D0%BD%D0%B0%D0%BD%D1%8C.pdf" className={buttonStyles({ color: 'danger', variant: 'flat', radius: 'full' })}>Дізнатися більше</a>
				</div>
			</div>
		</div>
	);
}
