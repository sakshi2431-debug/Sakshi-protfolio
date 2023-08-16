import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { BehanceIcon, LinkedInIcon, DribbbleIcon, InstaIcon } from "./Icons.js";

const CustomLink = ({ href, title, className = "" }) => {
	const router = useRouter();
	console.log(router);
	return (
		<Link href={href} className={`${className} relative group`}>
			{title}

			<span
				className={`h-[1px] inline-block  bg-dark
      absolute left-0 -bottom-0.5 group-hover: w-full transition-[width] 
      ease duration-300 ${router.asPath === href ? "w-full" : "w-0"}`}
			>
				&nbsp;
			</span>
		</Link>
	);
};

const NavBar = () => {
	return (
		<header className="w-full px-32 py-8 font-medium flex item-center justify-between">
			<nav>
				<CustomLink href="/" title="Home" className="mr-4" />
				<CustomLink href="/about" title="About" className="mx-4" />
				<CustomLink href="/projects" title="Projects" className="mx-4" />
				<CustomLink href="/volunteer" title="Volunteer" className="ml-4" />
			</nav>

			<nav className="flex items-center justify-center flex-wrap gap-x-2">
				<a href="https://www.instagram.com" target={"_blank"}>
					<InstaIcon />
				</a>
				<a href="https://www.linkedin.com" target={"_blank"}>
					<LinkedInIcon />
				</a>
				<a href="https://dribbble.com" target={"_blank"}>
					<DribbbleIcon />
				</a>
				<a href="https://www.behance.net" target={"_blank"}>
					<BehanceIcon />
				</a>
			</nav>

			<div className="absolute left-[50%] top-2 translate-x-[-50%] ">
				<Logo />
			</div>
		</header>
	);
};

export default NavBar;
