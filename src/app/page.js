import Hero from "@/sections/Hero";
import BrandSlider from "@/sections/BrandSlider";
import ToolkitSection from "@/sections/ToolkitSection";
import EnterpriseSection from "@/sections/EnterpriseSection";
import PlatformSection from "@/sections/PlatformSection";
import StatusSection from "@/sections/StatusSection";
import PricingSection from "@/sections/PricingSection";
import AiAutomation from "@/sections/AiAutomation";
import CustomLayout from "@/components/Layout/CustomLayout";

export default function Home() {
	return (
		<div>
			<main className="bg-white">
				<CustomLayout>
					<Hero />
					<BrandSlider />
					<ToolkitSection />
					<EnterpriseSection />
					<PlatformSection />
					<StatusSection />
					<PricingSection />
					<AiAutomation />
				</CustomLayout>
			</main>
		</div>
	);
}
