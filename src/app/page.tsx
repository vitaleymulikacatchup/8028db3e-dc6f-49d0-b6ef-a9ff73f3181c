"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import AboutFeature from '@/components/sections/about/AboutFeature';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Coffee, Users, Heart, Leaf, Star, MessageCircle, Handshake, HelpCircle, Mail } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="small"
      sizing="medium"
      background="animatedGrid"
      cardStyle="glass-depth"
      primaryButtonStyle="flat"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Menu", id: "product" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Brew & Bean"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Exceptional Coffee Experience"
          description="Discover our carefully crafted coffee blends, made from the finest beans and served with passion in our welcoming atmosphere"
          tag="Fresh Daily"
          tagIcon={Coffee}
          buttons={[
            { text: "View Menu", href: "product" },
            { text: "Visit Us", href: "contact" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/g947db1d79e73bdccde69f2445405a6d96461aa23042c3a5c01e425a9e303f86ac1c12e6f1050a77ff07f7f84bde56e4190aef48dc3bddf9d828cd3c5f4f91b57_1280.jpg",
              imageAlt: "Coffee shop interior"
            },
            {
              imageSrc: "https://pixabay.com/get/g2ebdfae745519fef1b17f60d45cc839773e12ebf80b8926c96521ad475729b2647ac536e1aa1e81eca24186a7d51f3ed57ac0d9206fcbd70dffd0df96c074bef_1280.jpg",
              imageAlt: "Barista making espresso"
            },
            {
              imageSrc: "https://pixabay.com/get/g326fa2b050bacab11585b8eae65b1776dabb62b2f63955bb801acb3201a7c0b1e60bea0714913a47260c139a247ecc987ec380b6122505d3cc56242ac427f912_1280.jpg",
              imageAlt: "Coffee roasting process"
            },
            {
              imageSrc: "https://pixabay.com/get/gc1918605570f787d43120195f6feedeeaf29e6996d6eb0e08994e0c5df041454134e043c5193e64e8942f3fc2b4ebfa160ea90fb6cfa757fdff173e32298d26d_1280.jpg",
              imageAlt: "Latte art coffee"
            },
            {
              imageSrc: "https://pixabay.com/get/g15c0ea9ac9b1e66772e57918a971bc88de7a950f3dcc500f25f6531e2218b5c6df46631362f2de62d60ae69e1ce7cc405436f8bb885b520779ff9b90a1011780_1280.jpg",
              imageAlt: "Coffee shop display"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="We believe great coffee brings people together. Our passion for quality beans and expert brewing creates moments that matter in every cup we serve."
          features={[
            {
              icon: Coffee,
              title: "Premium Beans",
              description: "Sourced directly from sustainable farms worldwide, ensuring the highest quality and ethical practices in every cup."
            },
            {
              icon: Users,
              title: "Expert Baristas",
              description: "Our skilled team crafts each drink with precision and care, bringing years of experience to your coffee experience."
            },
            {
              icon: Heart,
              title: "Community Focus",
              description: "More than just coffee, we're a gathering place where neighbors become friends and memories are made daily."
            },
            {
              icon: Leaf,
              title: "Sustainable Practices",
              description: "Committed to environmental responsibility through eco-friendly packaging and supporting sustainable coffee farming."
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Signature Coffee Menu"
          description="Explore our carefully curated selection of premium coffee drinks, each crafted to perfection"
          tag="Barista Favorites"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "espresso",
              brand: "Brew & Bean",
              name: "Classic Espresso",
              price: "$3.50",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://pixabay.com/get/gd94fe260ba7c4e5853fe7cd6b53de7d64afde364bda11d4d7eddac0916483a157922bafcb9a74bb818610ea64bf2de28f44cad4f3d2404ee05b8079a67e3ee5b_1280.jpg",
              imageAlt: "Classic espresso shot"
            },
            {
              id: "latte",
              brand: "Brew & Bean",
              name: "Creamy Latte",
              price: "$4.75",
              rating: 5,
              reviewCount: "3.8k",
              imageSrc: "https://pixabay.com/get/gd4817306580359cb02ef34957d8eea468a193494707effeab350721fe668a96a781118652f581ab7a638e9b4d4c1d46be6304640cea35319b3fe5c842f06afa9_1280.jpg",
              imageAlt: "Cappuccino with latte art"
            },
            {
              id: "americano",
              brand: "Brew & Bean",
              name: "Bold Americano",
              price: "$4.25",
              rating: 4,
              reviewCount: "1.9k",
              imageSrc: "https://pixabay.com/get/gd2625a9473a2578407691c285e86b75e2c74879a03adb36087daf5b663b37fdfb68d11b4c7784ff210911628da8d892b0723568d3f32af0cd01edd51dfdc2805_1280.jpg",
              imageAlt: "Black americano coffee"
            },
            {
              id: "mocha",
              brand: "Brew & Bean",
              name: "Rich Mocha",
              price: "$5.25",
              rating: 5,
              reviewCount: "4.2k",
              imageSrc: "https://pixabay.com/get/g54fbdbd8eed5f5a42f9a27681fed42e3d1d34f0c33f23669b8a818628d2f8f21dc3dc76feb4ced4c5832f6c9f7106cfc30819598f9c2206abeb1264950c6db7e_1280.jpg",
              imageAlt: "Chocolate mocha drink"
            },
            {
              id: "macchiato",
              brand: "Brew & Bean",
              name: "Caramel Macchiato",
              price: "$5.50",
              rating: 5,
              reviewCount: "5.3k",
              imageSrc: "https://pixabay.com/get/ga069c032a69701cea2a5b7fe13135d8bdcb8ea7a68cf72533ce786560eb1af312f43b3f2120ce2ed7dba1a67a88902a17c4de3a731a1f0e6e36d2be9c77cf220_1280.jpg",
              imageAlt: "Caramel macchiato coffee"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Coffee Lovers Say"
          description="Discover why customers choose Brew & Bean for their daily coffee experience"
          tag="Customer Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Marketing Director",
              company: "Creative Agency",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g505a161c060626f97d3cb650140bbb733653e9e4cab0f347e570665ee487993d252b13eec12557a2c160f8b27fe985a9ea1c544b1a5d7a7800062ece253ca1ba_1280.jpg",
              imageAlt: "Sarah Mitchell",
              content: "The coffee here is absolutely exceptional. Every morning starts perfectly with their expertly crafted espresso."
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Software Developer",
              company: "Tech Solutions",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gae0570e417141585996ae42aeea17c25c5baa033995c3528cb7b6c0f52fd913601c845663af402fe9ac70da0d149adc136cb3f6b455b9377de2b36d969600e9f_1280.jpg",
              imageAlt: "Michael Chen",
              content: "Best coffee shop in the city! The baristas really know their craft and the atmosphere is perfect for working."
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Freelance Designer",
              company: "Design Studio",
              rating: 5,
              imageSrc: "https://pixabay.com/get/geea3fce62c0a29b55ff53c145ef5dd5d637374b899b72d65112873f8bed9ce7543cec072bf89893e5f6548063035e5a7119863fc56838c5614b16b3458e1388d_1280.jpg",
              imageAlt: "Emma Rodriguez",
              content: "I love the sustainable practices and community focus. Great coffee that makes a positive impact."
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Business Owner",
              company: "Local Startup",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gcfdfa27e65692377b7376ec8ed110516a4c0ad3a0416948220a22fcfad36684a1a688fe8c8fd77d8ce9b491fea50b0deafd37063c5acdbf1b157b777d744db12_1280.jpg",
              imageAlt: "David Thompson",
              content: "Premium quality beans and expert preparation. This place has become my daily ritual for good reason."
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Coffee Industry Leaders"
          description="Join the network of premium coffee brands and suppliers who trust our expertise"
          tag="Partners"
          tagIcon={Handshake}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g4d6191dc768b4d56ac9ef06339ebb221b18e14b86a9b4a3d4789a77dfe9fb552d1c79ff3bba6b960a4d1907db7d5d750a0d7727f65624fcaab5550bf3863d766_1280.jpg",
            "https://pixabay.com/get/gf1c8e0bbff1e28b9898c1c772b1dab23e22e5f0052a72cb20a10ac730bca53d9150edb01e5793a92718997cd06ccdd532a2c1bb3a08f58a3ccd1a83b9aeda2fe_1280.jpg",
            "https://pixabay.com/get/g06e3b58d06308f0a692a95f470f277aaeaaf4fc7551b304cdaf5153e981afc4f4460b720d84e4118bf2eeab778caa6884930ebaab0d3e312b1482f9eb8ff44d2_1280.jpg",
            "https://pixabay.com/get/gb138c743a0539e5e524da315e32ecf9bb64d9aebdd51700fffde29b5ce4856ef0e0adc804b5ddf89ddc56974405a2997a9e58e2eab12cccb3513221155184481_1280.jpg",
            "https://pixabay.com/get/gaced8c8a31a7b9c6c4f60c9b53759cb4b17f522b89a8f7af698da5d3c05b817e410566b832c29301dd3ddad1ab5cb307910aadf2bd962a3de16e6b6fd7e0279f_1280.jpg",
            "https://pixabay.com/get/ge94922ee6ed7c4ef599a2ea1542583134a1a111b44d8255ac1c038b5414f59076dbd484c486647379d1de90813c094000fa76535ff12273cb972d13f2f16831f_1280.jpg",
            "https://pixabay.com/get/geb4321770809c85e3b988ef11b8d418c0f0b3666b3fe5fe76bacd37fe67d3c772241bb2c2065a75fec90786f98eadc96f1454bc8411705198d28b1cbcc881e29_1280.jpg"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our coffee, services, and location"
          tag="Help Center"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "What type of coffee beans do you use?",
              content: "We use premium Arabica beans sourced directly from sustainable farms in Colombia, Ethiopia, and Guatemala. Our beans are roasted fresh weekly to ensure optimal flavor and quality."
            },
            {
              id: "2",
              title: "Do you offer dairy-free milk alternatives?",
              content: "Yes! We offer oat milk, almond milk, soy milk, and coconut milk as alternatives to dairy. All our non-dairy options are available at no extra charge."
            },
            {
              id: "3",
              title: "What are your operating hours?",
              content: "We're open Monday through Friday from 6:30 AM to 8:00 PM, Saturday from 7:00 AM to 9:00 PM, and Sunday from 8:00 AM to 7:00 PM."
            },
            {
              id: "4",
              title: "Do you offer coffee subscriptions?",
              content: "Absolutely! Our coffee subscription service delivers freshly roasted beans to your door monthly. Choose from our signature blends or try different single-origin coffees each month."
            },
            {
              id: "5",
              title: "Can I host private events at your shop?",
              content: "Yes, we offer private event hosting for groups of up to 30 people. Contact us at least two weeks in advance to discuss availability and catering options."
            },
            {
              id: "6",
              title: "Do you offer barista training classes?",
              content: "We host monthly barista workshops covering espresso extraction, milk steaming, and latte art. Check our events calendar or ask our staff for upcoming class schedules."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Get the Latest Coffee Updates"
          description="Subscribe to our newsletter for weekly coffee tips, new blend announcements, and exclusive member discounts on your favorite drinks."
          tagIcon={Mail}
          inputPlaceholder="Your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive our weekly coffee newsletter. Unsubscribe anytime with one click."
          imageSrc="https://pixabay.com/get/g8e858cc006960a700ac5ad26b25d252ed6672218823cd4cdbfecd8cd8fc849133ba2f1a06f6fdee41c459f2cc12c9de4e8e589af79f14e078350180df8ae2497_1280.jpg"
          imageAlt="Premium coffee beans"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Brew & Bean"
          columns={[
            {
              items: [
                { label: "Our Menu", href: "product" },
                { label: "About Us", href: "about" },
                { label: "Location", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Customer Reviews", href: "testimonial" },
                { label: "FAQ", href: "faq" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}