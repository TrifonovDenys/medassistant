import { SiYoutube, SiFacebook, SiTiktok, SiYoutubeshorts  } from "react-icons/si";
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "МедАсистент",
	description: '«МедАсистент» дає поради по лікуванню і профілактиці здоров’я для дорослих і дітей, для чоловіків і жінок, для алергіків, діабетиків і онкохворих. Пояснюємо, що робити при складних травмах і як надавати першу медичну допомогу. Розповідаємо, як лікувати залежність, підтримати здоров’я серця і відновити красу шкіри.',
	navItems: [
		{
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
		{label: "Youtube", href: "https://www.youtube.com/channel/UCD7STJqRgZbXm5oLANSZ1Vw", icon: SiYoutube, size: 30,},
		{label: "Youtubeshorts", href: "https://www.youtube.com/@medassistent-channel/shorts", icon: SiYoutubeshorts, size: 21,},
		{label: "Facebook", href: "https://www.facebook.com/MedAssistant.School/", icon: SiFacebook, size: 22,},
		{label: "Tiktok", href: "https://www.tiktok.com/@medassistant", icon: SiTiktok, size: 21,},
	],
	classes: [
    { id: 1, name: 'Навчальний клас гіпертоніка і кардіохворого', icons: '', },
    { id: 2, name: 'Навчальний клас неврології, психіатрії та наркології', icons: '', },
    { id: 3, name: 'Навчальний клас дерматології та медичної косметології', icons: '', },
    { id: 4, name: 'Навчальний клас невідкладної допомоги', icons: '', },
    { id: 5, name: 'Рух — це життя. Травматологія і ревматологія', icons: '', },
    { id: 6, name: 'Навчальний клас алергіка', icons: '', },
    { id: 7, name: 'Здорова дитина', icons: '', },
    { id: 8, name: 'ЛОР-питання, ЛОР-відповіді', icons: '', },
    { id: 9, name: 'Здоровий зір', icons: '', },
    { id: 10, name: 'Жіноче здоров’я', icons: '', },
  ],
};
