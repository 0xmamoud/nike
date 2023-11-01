import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
	return (
		<header className="padding-x py-8 absolute z-10 w-full">
			<nav className="flex justify-between items-center max-container">
				<a href="">
					<img
						src={headerLogo}
						alt="header logo"
						width={130}
						height={29}
					/>
				</a>
				<ul
					className="flex-1 flex justify-center items-center 
					gap-16 max-lg:hidden"
				>
					{navLinks.map((item) => {
						return (
							<li key={item.label}>
								<a
									href={item.href}
									className="font-montserrat leading-normal 
									text-lg text-slate-gray"
								>
									{item.label}
								</a>
							</li>
						);
					})}
				</ul>
				<div className="hidden max-lg:block">
					<img
						src={hamburger}
						alt="menu hamburger"
						width={25}
						height={25}
					/>
				</div>
				<div
					className="flex justify-between gap-2 
					font-montserrat text-lg leading-normal 
					max-lg:hidden wide:mr-24"
				>
					<a href="/">Sign in</a>
					<p>/</p>
					<a href="/">Sign up</a>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
