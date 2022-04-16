import { Map } from "../types";

const Navbar = ({ formLink, mapLink }: { formLink: string; mapLink: Map }) => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-stretch justify-between h-16 mt-6">
        <a
          href={mapLink.fields.file.url}
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          {mapLink.fields.title}
        </a>
        <a
          href={formLink}
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Apply to be a Vendor!
        </a>
      </div>
    </div>
  );
};

export default Navbar;
