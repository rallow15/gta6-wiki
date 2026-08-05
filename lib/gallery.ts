export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export interface GalleryCategory {
  id: string;
  label: string;
  icon: string;
  color: string;
  images: GalleryImage[];
}

const base = "https://gta.wiki/images";

export const galleryCategories: GalleryCategory[] = [
  // ── Personnages ──
  {
    id: "jason-duval",
    label: "Jason Duval",
    icon: "User",
    color: "neon-pink",
    images: [
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-JasonDuval-SS1.jpg`, alt: "Jason Duval - Screenshot 1", category: "jason-duval" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-JasonDuval-SS2.jpg`, alt: "Jason Duval - Screenshot 2", category: "jason-duval" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-JasonDuval-SS3.jpg`, alt: "Jason Duval - Screenshot 3", category: "jason-duval" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-JasonDuval-SS4.jpg`, alt: "Jason Duval - Screenshot 4", category: "jason-duval" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-JasonDuval-SS5.jpg`, alt: "Jason Duval - Screenshot 5", category: "jason-duval" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-JasonDuval-SS6.jpg`, alt: "Jason Duval - Screenshot 6", category: "jason-duval" },
    ],
  },
  {
    id: "lucia-caminos",
    label: "Lucia Caminos",
    icon: "UserCircle",
    color: "neon-pink",
    images: [
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-LuciaCaminos-SS1.jpg`, alt: "Lucia Caminos - Screenshot 1", category: "lucia-caminos" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-LuciaCaminos-SS2.jpg`, alt: "Lucia Caminos - Screenshot 2", category: "lucia-caminos" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-LuciaCaminos-SS3.jpg`, alt: "Lucia Caminos - Screenshot 3", category: "lucia-caminos" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-LuciaCaminos-SS4.jpg`, alt: "Lucia Caminos - Screenshot 4", category: "lucia-caminos" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-LuciaCaminos-SS5.jpg`, alt: "Lucia Caminos - Screenshot 5", category: "lucia-caminos" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-LuciaCaminos-SS6.jpg`, alt: "Lucia Caminos - Screenshot 6", category: "lucia-caminos" },
    ],
  },
  {
    id: "cal-hampton",
    label: "Cal Hampton",
    icon: "Bird",
    color: "sunset-orange",
    images: [
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-CalHampton-SS1.jpg`, alt: "Cal Hampton - Screenshot 1", category: "cal-hampton" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-CalHampton-SS2.jpg`, alt: "Cal Hampton - Screenshot 2", category: "cal-hampton" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-CalHampton-SS3.jpg`, alt: "Cal Hampton - Screenshot 3", category: "cal-hampton" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-CalHampton-SS4.jpg`, alt: "Cal Hampton - Screenshot 4", category: "cal-hampton" },
    ],
  },
  {
    id: "boobie-ike",
    label: "Boobie Ike",
    icon: "Gem",
    color: "sand-yellow",
    images: [
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-BoobieIke-SS1.jpg`, alt: "Boobie Ike - Screenshot 1", category: "boobie-ike" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-BoobieIke-SS2.jpg`, alt: "Boobie Ike - Screenshot 2", category: "boobie-ike" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-BoobieIke-SS3.jpg`, alt: "Boobie Ike - Screenshot 3", category: "boobie-ike" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-BoobieIke-SS4.jpg`, alt: "Boobie Ike - Screenshot 4", category: "boobie-ike" },
    ],
  },
  {
    id: "drequan-priest",
    label: "Dre'Quan Priest",
    icon: "Music",
    color: "lagoon-cyan",
    images: [
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-DreQuanPriest-SS1.jpg`, alt: "Dre'Quan Priest - Screenshot 1", category: "drequan-priest" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-DreQuanPriest-SS2.jpg`, alt: "Dre'Quan Priest - Screenshot 2", category: "drequan-priest" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-DreQuanPriest-SS3.jpg`, alt: "Dre'Quan Priest - Screenshot 3", category: "drequan-priest" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-DreQuanPriest-SS4.jpg`, alt: "Dre'Quan Priest - Screenshot 4", category: "drequan-priest" },
    ],
  },
  {
    id: "real-dimez",
    label: "Real Dimez",
    icon: "Mic",
    color: "neon-pink",
    images: [
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-RealDimez-SS1.jpg`, alt: "Real Dimez - Screenshot 1", category: "real-dimez" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-RealDimez-SS2.jpg`, alt: "Real Dimez - Screenshot 2", category: "real-dimez" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-RealDimez-SS3.jpg`, alt: "Real Dimez - Screenshot 3", category: "real-dimez" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-RealDimez-SS4.jpg`, alt: "Real Dimez - Screenshot 4", category: "real-dimez" },
    ],
  },
  {
    id: "raul-bautista",
    label: "Raul Bautista",
    icon: "Crosshair",
    color: "sunset-orange",
    images: [
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-RaulBautista-SS1.jpg`, alt: "Raul Bautista - Screenshot 1", category: "raul-bautista" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-RaulBautista-SS2.jpg`, alt: "Raul Bautista - Screenshot 2", category: "raul-bautista" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-RaulBautista-SS3.jpg`, alt: "Raul Bautista - Screenshot 3", category: "raul-bautista" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-RaulBautista-SS4.jpg`, alt: "Raul Bautista - Screenshot 4", category: "raul-bautista" },
    ],
  },
  {
    id: "brian-heder",
    label: "Brian Heder",
    icon: "Handshake",
    color: "sand-yellow",
    images: [
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-BrianHeder-SS1.jpg`, alt: "Brian Heder - Screenshot 1", category: "brian-heder" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-BrianHeder-SS2.jpg`, alt: "Brian Heder - Screenshot 2", category: "brian-heder" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-BrianHeder-SS3.jpg`, alt: "Brian Heder - Screenshot 3", category: "brian-heder" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-BrianHeder-SS4.jpg`, alt: "Brian Heder - Screenshot 4", category: "brian-heder" },
    ],
  },
  // ── Lieux ──
  {
    id: "vice-city",
    label: "Vice City",
    icon: "TreePalm",
    color: "neon-pink",
    images: Array.from({ length: 9 }, (_, i) => ({
      src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS${i + 1}.jpg`,
      alt: `Vice City - Screenshot ${i + 1}`,
      category: "vice-city",
    })),
  },
  {
    id: "leonida-keys",
    label: "Leonida Keys",
    icon: "TreePalm",
    color: "lagoon-cyan",
    images: Array.from({ length: 5 }, (_, i) => ({
      src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-LeonidaKeys-SS${i + 1}.jpg`,
      alt: `Leonida Keys - Screenshot ${i + 1}`,
      category: "leonida-keys",
    })),
  },
  {
    id: "port-gellhorn",
    label: "Port Gellhorn",
    icon: "Anchor",
    color: "sunset-orange",
    images: Array.from({ length: 5 }, (_, i) => ({
      src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-PortGellhorn-SS${i + 1}.jpg`,
      alt: `Port Gellhorn - Screenshot ${i + 1}`,
      category: "port-gellhorn",
    })),
  },
  {
    id: "ambrosia",
    label: "Ambrosia",
    icon: "Building2",
    color: "sand-yellow",
    images: Array.from({ length: 5 }, (_, i) => ({
      src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-Ambrosia-SS${i + 1}.jpg`,
      alt: `Ambrosia - Screenshot ${i + 1}`,
      category: "ambrosia",
    })),
  },
  {
    id: "grassrivers",
    label: "Grassrivers",
    icon: "Bug",
    color: "lagoon-cyan",
    images: Array.from({ length: 4 }, (_, i) => ({
      src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-Grassrivers-SS${i + 1}.jpg`,
      alt: `Grassrivers - Screenshot ${i + 1}`,
      category: "grassrivers",
    })),
  },
  {
    id: "mount-kalaga",
    label: "Mount Kalaga",
    icon: "Mountain",
    color: "sand-yellow",
    images: Array.from({ length: 6 }, (_, i) => ({
      src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-MountKalaga-SS${i + 1}.jpg`,
      alt: `Mount Kalaga - Screenshot ${i + 1}`,
      category: "mount-kalaga",
    })),
  },
  // ── Ultimate Edition ──
  {
    id: "ultimate-edition",
    label: "Ultimate Edition",
    icon: "Diamond",
    color: "sunset-orange",
    images: [
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-UltimateEdition01.jpg`, alt: "Ultimate Edition - Screenshot 1", category: "ultimate-edition" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-UltimateEdition02.jpg`, alt: "Ultimate Edition - Screenshot 2", category: "ultimate-edition" },
      // Grotti Cheetah
      ...Array.from({ length: 4 }, (_, i) => ({
        src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-UltimateEdition-GrottiCheetah0${i + 1}.jpg`,
        alt: `Grotti Cheetah '95 - Screenshot ${i + 1}`,
        category: "ultimate-edition",
      })),
      // Hawk & Little Morgan
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-UltimateEdition-HawkandLittleMorganRevolvers01.jpg`, alt: "Hawk & Little Morgan - Screenshot 1", category: "ultimate-edition" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-UltimateEdition-HawkandLittleMorganRevolvers02.jpg`, alt: "Hawk & Little Morgan - Screenshot 2", category: "ultimate-edition" },
      // Vice City Style
      ...Array.from({ length: 5 }, (_, i) => ({
        src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-UltimateEdition-ViceCityStyle0${i + 1}.jpg`,
        alt: `Vice City Style - Screenshot ${i + 1}`,
        category: "ultimate-edition",
      })),
      // Squalo
      ...Array.from({ length: 4 }, (_, i) => ({
        src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-UltimateEdition-Squalo0${i + 1}.jpg`,
        alt: `Shitzu Squalo - Screenshot ${i + 1}`,
        category: "ultimate-edition",
      })),
      // Safehouse Vehicles
      ...Array.from({ length: 3 }, (_, i) => ({
        src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-UltimateEdition-SafehouseVehicles0${i + 1}.jpg`,
        alt: `Safehouse Vehicles - Screenshot ${i + 1}`,
        category: "ultimate-edition",
      })),
      // Rideout Customs
      ...Array.from({ length: 3 }, (_, i) => ({
        src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-UltimateEdition-RideoutCustoms0${i + 1}.jpg`,
        alt: `Rideout Customs - Screenshot ${i + 1}`,
        category: "ultimate-edition",
      })),
      // Sara's Salon
      ...Array.from({ length: 3 }, (_, i) => ({
        src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-UltimateEdition-SarasSalon0${i + 1}.jpg`,
        alt: `Sara's Unisex Salon - Screenshot ${i + 1}`,
        category: "ultimate-edition",
      })),
      // Stock 305
      ...Array.from({ length: 4 }, (_, i) => ({
        src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-UltimateEdition-Stock3050${i + 1}.jpg`,
        alt: `Stock 305 Clothing - Screenshot ${i + 1}`,
        category: "ultimate-edition",
      })),
      // Vapid Dominator Buggy
      ...Array.from({ length: 4 }, (_, i) => ({
        src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-UltimateEdition-VapidBuggy0${i + 1}.jpg`,
        alt: `Vapid Dominator Buggy '67 - Screenshot ${i + 1}`,
        category: "ultimate-edition",
      })),
      // Electric Fang Tattoo
      ...Array.from({ length: 4 }, (_, i) => ({
        src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-UltimateEdition-ElectricFang0${i + 1}.jpg`,
        alt: `Electric Fang Tattoo - Screenshot ${i + 1}`,
        category: "ultimate-edition",
      })),
      // One-Eyed Willie's
      ...Array.from({ length: 3 }, (_, i) => ({
        src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-UltimateEdition-OneEyedWillie0${i + 1}.jpg`,
        alt: `One-Eyed Willie's - Screenshot ${i + 1}`,
        category: "ultimate-edition",
      })),
      // Weapon Variants
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-UltimateEdition-WeaponVariants01.jpg`, alt: "Weapon Variants", category: "ultimate-edition" },
      // Goodtime Gear
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-UltimateEdition-GoodtimeGear.jpg`, alt: "Goodtime Gear", category: "ultimate-edition" },
      // PTT Store
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-UltimateEdition-PTTStore.jpg`, alt: "PTT Youngin$ Illegal Goods Store", category: "ultimate-edition" },
      // Ganado Retro Build
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-UltimateEdition-VapidGanadoRetroBuild01.jpg`, alt: "Vapid Ganado Retro Build", category: "ultimate-edition" },
      // Wyman Car Collection
      ...Array.from({ length: 6 }, (_, i) => ({
        src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-UltimateEdition-WymanCarCollection0${i + 1}.jpg`,
        alt: `Classic Car Collection - Screenshot ${i + 1}`,
        category: "ultimate-edition",
      })),
    ],
  },
  // ── Vintage Vice City Pack ──
  {
    id: "vintage-vice-city",
    label: "Vintage Vice City Pack",
    icon: "Gamepad2",
    color: "neon-pink",
    images: [
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-VintageViceCityPack01.jpg`, alt: "Vintage Vice City Pack - Screenshot 1", category: "vintage-vice-city" },
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-VintageViceCityPack02.jpg`, alt: "Vintage Vice City Pack - Screenshot 2", category: "vintage-vice-city" },
      // Exclusive Looks
      ...Array.from({ length: 5 }, (_, i) => ({
        src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-VintageViceCityPack-ExclusiveLooks0${i + 1}.jpg`,
        alt: `Vintage Vice City - Exclusive Looks ${i + 1}`,
        category: "vintage-vice-city",
      })),
      // Vapid Stanier '55
      ...Array.from({ length: 4 }, (_, i) => ({
        src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-VintageViceCityPack-VapidStanier0${i + 1}.jpg`,
        alt: `Vapid Stanier '55 - Screenshot ${i + 1}`,
        category: "vintage-vice-city",
      })),
      // Weapon Pattern
      { src: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-VintageViceCityPack-WeaponPattern01.jpg`, alt: "Vintage Vice City Weapon Pattern", category: "vintage-vice-city" },
    ],
  },
];

export const allImages: GalleryImage[] = galleryCategories.flatMap((cat) => cat.images);

export const totalCount = allImages.length;