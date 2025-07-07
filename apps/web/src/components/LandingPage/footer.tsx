import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-background border-t-4 border-primary py-12">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
					<div className="col-span-1 md:col-span-2">
						<div className="flex items-center space-x-2 mb-4">
							<div className="w-8 h-8 bg-secondary border-2 border-primary pixel-pulse"></div>
							<h3 className="pixel-font text-xl text-primary">IIITBuzz</h3>
						</div>
						<p className="text-sm text-footer mb-4">
							The ultimate community platform for IIIT students. Connect, learn,
							and grow together in our vibrant digital campus ecosystem.
						</p>
						<div className="flex space-x-4">
							<a
								href="https://www.linkedin.com/company/p-soc"
								target="_blank"
								rel="noopener noreferrer"
								className="w-8 h-8 neo-brutal-card bg-foreground/20 border-foreground flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
							>
								<Linkedin className="text-foreground w-4 h-4" />
							</a>

							<a
								href="mailto:tech-society@eiiit-bh.ac.in"
								className="w-8 h-8 neo-brutal-card bg-foreground/20 border-foreground flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
							>
								<Mail className="text-foreground w-4 h-4" />
							</a>

							<a
								href="https://twitter.com/psociiit"
								target="_blank"
								rel="noopener noreferrer"
								className="w-8 h-8 neo-brutal-card bg-secondary/20 border-secondary flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
							>
								<Twitter className="text-secondary w-4 h-4" />
							</a>

							<a
								href="https://www.instagram.com/psoc_iiitbh"
								target="_blank"
								rel="noopener noreferrer"
								className="w-8 h-8 neo-brutal-card bg-accent/20 border-accent flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
							>
								<Instagram className="text-accent w-4 h-4" />
							</a>
						</div>
					</div>

					<div>
						<h4 className="pixel-font text-sm text-primary mb-4">
							QUICK LINKS
						</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a
									href="#about"
									className="text-footer hover:text-primary transition-colors"
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href="#features"
									className="text-footer hover:text-primary transition-colors"
								>
									Features
								</a>
							</li>
							<li>
								<a
									href="#contact"
									className="text-footer hover:text-primary transition-colors"
								>
									Contact
								</a>
							</li>
							<li>
								<a
									href="#help"
									className="text-footer hover:text-primary transition-colors"
								>
									Help & Support
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="pixel-font text-sm text-primary mb-4">POLICIES</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a
									href="#privacy"
									className="text-footer hover:text-primary transition-colors"
								>
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href="#terms"
									className="text-footer hover:text-primary transition-colors"
								>
									Terms of Service
								</a>
							</li>
							<li>
								<a
									href="#community"
									className="text-footer hover:text-primary transition-colors"
								>
									Community Guidelines
								</a>
							</li>
							<li>
								<a
									href="#cookies"
									className="text-footer hover:text-primary transition-colors"
								>
									Cookie Policy
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t-2 border-primary/30 pt-8 text-center">
					<p className="pixel-font text-xs text-footer m-4">© 2025 IIITBuzz</p>
					<p className="text-xs text-footer mt-2">by- P-Soc IIIT-bh</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
