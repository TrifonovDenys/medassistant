import { SiYoutube, SiFacebook, SiTiktok, SiYoutubeshorts, SiGooglecloudcomposer } from "react-icons/si";
export type SiteConfig = typeof siteConfig;
import { MedAsisstant, NewLogo } from '@/components/icons';
export const siteConfig = {
	name: "МедАсистент",
	description: '«МедАсистент» дає поради по лікуванню і профілактиці здоров’я для дорослих і дітей, для чоловіків і жінок, для алергіків, діабетиків і онкохворих. Пояснюємо, що робити при складних травмах і як надавати першу медичну допомогу. Розповідаємо, як лікувати залежність, підтримати здоров’я серця і відновити красу шкіри.',
	navItems: [
		{
			icon: MedAsisstant,
			label: "Головна",
			href: "/",
		},
		{
			label: "Навчальні класи",
			href: "/educ",
		},
		{
			label: "Спікери",
			href: "/speakers",
		},
		{
			label: "Для лікарів",
			href: "/doctors",
		},
	],
	footerLinks: [
		{
			label: "Про Нас",
			href: "/about",
		},
		{
			label: "Зв’язатися з нами",
			href: "/contact",
		},
		{
			label: "Загальні положення",
			href: "/contact",
		}
	],
	// navMenuItems: [
	// 	{
	// 		label: "Profile",
	// 		href: "/profile",
	// 	},
	// 	{
	// 		label: "Dashboard",
	// 		href: "/dashboard",
	// 	},
	// 	{
	// 		label: "Projects",
	// 		href: "/projects",
	// 	},
	// 	{
	// 		label: "Team",
	// 		href: "/team",
	// 	},
	// 	{
	// 		label: "Calendar",
	// 		href: "/calendar",
	// 	},
	// 	{
	// 		label: "Settings",
	// 		href: "/settings",
	// 	},
	// 	{
	// 		label: "Help & Feedback",
	// 		href: "/help-feedback",
	// 	},
	// 	{
	// 		label: "Logout",
	// 		href: "/logout",
	// 	},
	// ],

	navMenuItems: [
		{
			label: "Навчальні класи",
			href: "/educ",
		},
		{
			label: "Спікери",
			href: "/speakers",
		},
		{
			label: "Для лікарів",
			href: "/doctors",
		},
		{
			label: "Про Нас",
			href: "/about",
		},
		{
			label: "Зв’язатися з нами",
			href: "/contact",
		}
	],

	links: [
		// github: "https://github.com/nextui-org/nextui",
		// twitter: "https://twitter.com/getnextui",
		// docs: "https://nextui.org",
		// discord: "https://discord.gg/9b6yyZKmH4",
		// sponsor: "https://patreon.com/jrgarciadev",
		{ label: "Youtube", href: "https://www.youtube.com/channel/UCD7STJqRgZbXm5oLANSZ1Vw", icon: SiYoutube, size: 30, },
		{ label: "Youtubeshorts", href: "https://www.youtube.com/@medassistent-channel/shorts", icon: SiYoutubeshorts, size: 21, },
		{ label: "Facebook", href: "https://www.facebook.com/MedAssistant.School/", icon: SiFacebook, size: 22, },
		{ label: "Tiktok", href: "https://www.tiktok.com/@medassistant", icon: SiTiktok, size: 21, },
	],
	classes: [
		{ id: 1, name: 'Навчальний клас гіпертоніка і кардіохворого', description: '', icons: SiGooglecloudcomposer, },
		{ id: 2, name: 'Навчальний клас неврології, психіатрії та наркології', description: '', icons: '', },
		{ id: 3, name: 'Навчальний клас дерматології та медичної косметології', description: '', icons: '', },
		{ id: 4, name: 'Навчальний клас невідкладної допомоги', description: '', icons: '', },
		{ id: 5, name: 'Рух — це життя. Травматологія і ревматологія', description: '', icons: '', },
		{ id: 6, name: 'Навчальний клас алергіка', description: '', icons: '', },
		{ id: 7, name: 'Здорова дитина', description: '', icons: '', },
		{ id: 8, name: 'ЛОР-питання, ЛОР-відповіді', description: '', icons: '', },
		{ id: 9, name: 'Здоровий зір', description: '', icons: '', },
		{ id: 10, name: 'Жіноче здоров’я', description: '', icons: '', },
	],

};


export const components: { title: string; href: string; description: string; icons: React.ComponentType }[] = [
	{
		title: "Навчальний клас гіпертоніка і кардіохворого",
		href: "/docs/primitives/alert-dialog",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
		icons: SiGooglecloudcomposer
	},
	{
		title: "Навчальний клас неврології, психіатрії та наркології",
		href: "/docs/primitives/hover-card",
		description:
			"For sighted users to preview content available behind a link.",
		icons: SiGooglecloudcomposer
	},
	{
		title: 'Навчальний клас дерматології та медичної косметології',
		href: "/docs/primitives/progress",
		description:
			"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
		icons: SiGooglecloudcomposer
	},
	{
		title: "Рух — це життя. Травматологія і ревматологія",
		href: "/docs/primitives/scroll-area",
		description: "Visually or semantically separates content.",
		icons: SiGooglecloudcomposer
	},
	{
		title: "Навчальний клас алергіка",
		href: "/docs/primitives/tabs",
		description:
			"A set of layered sections of content—known as tab panels—that are displayed one at a time.",
		icons: SiGooglecloudcomposer
	},
	{
		title: "Здорова дитина",
		href: "/docs/primitives/tooltip",
		description:
			"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
		icons: SiGooglecloudcomposer
	},
	{
		title: "ЛОР-питання, ЛОР-відповіді",
		href: "/docs/primitives/tooltip",
		description:
			"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
		icons: SiGooglecloudcomposer
	},
	{
		title: "Здоровий зір",
		href: "/docs/primitives/tooltip",
		description:
			"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
		icons: SiGooglecloudcomposer
	},
	{
		title: "Жіноче здоров’я",
		href: "/docs/primitives/tooltip",
		description:
			"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
		icons: SiGooglecloudcomposer
	}
]