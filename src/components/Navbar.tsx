const Navbar = ({ formLink }: { formLink: string }) => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-center h-16">
        <div className="inset-y-0 flex items-center">
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
    </div>
  );
};

export default Navbar;
