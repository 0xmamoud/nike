import { footerLogo } from "../assets/images";
import { socialMedia, footerLinks } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
	return (
		<footer>
			<div
				className="flex justify-between items-start flex-wrap max-lg:flex-col
				gap-20"
			>
				<div className="flex flex-col items-start">
					<a href="/">
						<img
							src={footerLogo}
							alt="footer logo"
							width={150}
							height={45}
						/>
					</a>
					<p className="text-white-400 mt-6 text-base leading-7 font-montserrat sm:max-w-sm">
						Get shoes ready for the new term at your nearest Nike
						store. Find Your perfect Size In Store. Get Rewards
					</p>
					<div className="flex items-center gap-5 mt-8">
						{socialMedia.map((media, index) => {
							return (
								<div
									key={index}
									className="flex justify-center items-center 
								w-12 h-12 bg-white rounded-full"
								>
									<img
										src={media.src}
										alt={media.alt}
										width={24}
										height={24}
									/>
								</div>
							);
						})}
					</div>
				</div>
				<div className="flex flex-1 justify-between flex-wrap lg:gap-10 gap-20 ">
					{footerLinks.map((section) => (
						<div key={section.title}>
							<h4
								className="text-white font-montserrat tex-2xl
							 leading-normal font-medium mb-6"
							>
								{section.title}
							</h4>
							<ul>
								{section.links.map((link) => (
									<li
										key={link.name}
										className="text-white-400 mt-3 font-montserrat 
										text-base leading-normal hover:text-slate-gray"
									>
										<a href="">{link.name}</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div
				className="flex justify-center items-center text-white-400 
				mt-24 flex-col gap-2"
			>
				<div className="flex gap-2 flex-wrap justify-center items-center ">
					<img src={copyrightSign} alt="" />
					<p
						className="font-montserrat 
										text-base"
					>
						copyright 2023
					</p>
				</div>
				<a
					href="https://github.com/kanekanema"
					target="_blank"
					rel="noopener noreferrer"
					className="font-montserrat 
										text-base hover:text-slate-gray"
				>
					github.com/kanekanema
				</a>
			</div>
		</footer>
	);
};

export default Footer;
