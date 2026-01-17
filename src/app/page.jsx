import Gallery from "@/Componants/Gallery";
import BaristaTeam from "@/Componants/Home/BaristaTeam";
import Hero from "@/Componants/Home/Hero";

import OurStory from "@/Componants/Home/OurStory";
import Testimonial from "@/Componants/Home/Testimonial";
import SignatureItems from "@/Componants/SignatureItems";
import WhyChooseUs from "@/Componants/WhychooseUs";


export default function Home() {
  return (
<div>
<Hero></Hero>
<SignatureItems></SignatureItems>
<OurStory></OurStory>
<WhyChooseUs></WhyChooseUs>
<Gallery></Gallery>
<Testimonial></Testimonial>
<BaristaTeam></BaristaTeam>

</div>
  );
}
