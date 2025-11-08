// "use client";

// import { X } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRef, useState } from "react";

// import { Button } from "~/ui/primitives/button";

// interface UkraineBannerProps {
//   animateGradient?: boolean;
//   onClose?: () => void;
//   showCloseButton?: boolean;
// }

// export default function UkraineBanner({
//   animateGradient = true,
//   onClose,
//   showCloseButton = true,
// }: UkraineBannerProps) {
//   const [isVisible, setIsVisible] = useState(true);

//   const bannerRef = useRef<HTMLDivElement>(null);

//   const handleClose = () => {
//     if (bannerRef.current) {
//       const height = bannerRef.current.offsetHeight;
//       bannerRef.current.style.height = `${height}px`;

//       void bannerRef.current.offsetHeight;

//       bannerRef.current.classList.add("banner-closing");

//       bannerRef.current.style.height = "0";
//       bannerRef.current.style.opacity = "0";
//       bannerRef.current.style.paddingTop = "0";
//       bannerRef.current.style.paddingBottom = "0";

//       setTimeout(() => {
//         setIsVisible(false);
//         if (onClose) {
//           onClose();
//         }
//       }, 500);
//     } else {
//       setIsVisible(false);
//       if (onClose) {
//         onClose();
//       }
//     }
//   };

//   if (!isVisible) return null;

//   const backgroundStyle = animateGradient
//     ? {
//         animation: "gradientMove 45s linear infinite",
//         background:
//           "linear-gradient(90deg, #0057b7 0%, #0057b7 40%, #ffd700 60%, #ffd700 100%)",
//         backgroundSize: "200% 100%",
//       }
//     : { background: "#0057b7" };

//   return (
//     <></>
//   );
// }
