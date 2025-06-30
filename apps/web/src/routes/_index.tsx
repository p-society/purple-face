import type { Route } from "./+types/_index";

/**
 * TITLE_TEXT is an ASCII art banner displayed at the top of the home page.
 * It visually represents the application's branding in a stylized format.
 */
const TITLE_TEXT = `

 _______          ______          ______          ______  
/       \        /      \        /      \        /      \ 
$$$$$$$  |      /$$$$$$  |      /$$$$$$  |      /$$$$$$  |
$$ |__$$ |      $$ \__$$/       $$ |  $$ |      $$ |  $$/ 
$$    $$/       $$      \       $$ |  $$ |      $$ |      
$$$$$$$/         $$$$$$  |      $$ |  $$ |      $$ |   __ 
$$ |            /  \__$$ |      $$ \__$$ |      $$ \__/  |
$$ |            $$    $$/       $$    $$/       $$    $$/ 
$$/              $$$$$$/         $$$$$$/         $$$$$$/  
                                                          
                            
                                
`;

export function meta(_: Route.MetaArgs) {
	return [{ title: "My App" }, { name: "description", content: "My App" }];
}

export default function Home() {
	return (
		<div className="container mx-auto max-w-3xl px-4 py-2">
			<pre className="overflow-x-auto font-mono text-sm">{TITLE_TEXT}</pre>
			<div className="grid gap-6">
				<section className="rounded-lg border p-4">
					<h2 className="mb-2 font-medium">API Status</h2>
				</section>
			</div>
		</div>
	);
}
