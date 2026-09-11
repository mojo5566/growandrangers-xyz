import Script from "next/script";

const AD_SCRIPT_ID = "adsterra-df58107d1c598cb11ea4568d8208e9c7";
const AD_CONTAINER_ID = "container-df58107d1c598cb11ea4568d8208e9c7";

export default function AdsterraAd() {
  return (
    <section
      aria-label="Advertisement"
      className="min-h-[90px] rounded-xl border border-[#252936] bg-[#14161D] p-4"
    >
      <Script
        id={AD_SCRIPT_ID}
        src="https://pl31228130.profitableratecpmnetwork.com/df58107d1c598cb11ea4568d8208e9c7/invoke.js"
        strategy="afterInteractive"
        data-cfasync="false"
      />
      <div id={AD_CONTAINER_ID} />
    </section>
  );
}
