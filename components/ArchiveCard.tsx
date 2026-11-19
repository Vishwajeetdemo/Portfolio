import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

interface Props {
  title: string;
  des: string;
  listItem: string[];
  link: string;
}

const ArchiveCard = ({ title, des, listItem, link }: Props) => {
  return (
    <a href={link || undefined} target="_blank" rel="noopener noreferrer" className="block h-full">
      <div className="w-full h-full min-h-[20rem] rounded-xl bg-surface border border-accent/15 p-7 flex flex-col gap-5 hover:-translate-y-2 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group">
        <div className="flex justify-between items-center">
          <FaRegFolder className="text-4xl text-accent" />
          <RxOpenInNewWindow className="text-2xl hover:text-accent" />
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-titleFont font-semibold tracking-wide group-hover:text-accent">
            {title}
          </h2>
          <p className="text-sm mt-3 text-textDark leading-relaxed">{des}</p>
        </div>
        <ul className="text-xs text-accent font-titleFont flex items-center gap-x-3 gap-y-1 flex-wrap">
          {listItem.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ArchiveCard;
