import { Link,X } from "lucide-react";
import Image from 'next/image'


export default function PortfolioPopup({ item, closePopup }) {
  return (
    <div className="portfolio-popup fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-[100] opacity-100 visible">
      <div className="portfolio-popup-inner bg-gray-800 w-full max-w-3xl rounded-lg p-8 relative">
        <div className="portfolio-popup-content grid md:grid-cols-2 gap-8 items-center">
          {/*<span className="portfolio-popup-close absolute top-6 right-6 text-pink-500 text-xl cursor-pointer" onClick={closePopup}>
            <i className="uil uil-times"></i>
          </span>*/}
          <span 
  className="portfolio-popup-close absolute top-6 right-6 text-green-500 text-xl cursor-pointer" 
  onClick={closePopup}
>
  <X size={24} />
</span>
          <div className="pp-thumbnail">
            <Image src={item.img} alt="" className="portfolio-popup-img rounded-lg" />
          </div>
          <div className="portfolio-popup-info">
            <div className="portfolio-popup-subtitle text-sm mb-1">Featured - <span>{item.title}</span></div>
            <div className="portfolio-popup-body">
              <h3 className="details-title text-xl font-medium mb-4">{item.details.title}</h3>
              <p className="details-description text-sm mb-4">{item.details.description}</p>
              <ul className="details-info space-y-2">
                {item.details.info.map((info, index) => (
                  <li key={index} className="text-sm capitalize">
                    {info.label} - <span>{info.href ? <Link href={info.href} className="text-green-500 lowercase">{info.value}</Link> : info.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}