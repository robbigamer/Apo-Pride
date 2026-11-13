import Navbar from "../components/Navbar";

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30876.66383933264!2d120.2635566!3d14.8814412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396711b9c32216b%3A0xa080c3d36f2963a7!2sOlongapo%2C%20Zambales!5e0!3m2!1sen!2sph!4v1715651500000!5m2!1sen!2sph";

export default function AboutOlongapoCityMap() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFF]">
      <Navbar active="ABOUT" />

      <main className="flex flex-1 bg-[#566859]">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-8 sm:py-12 lg:grid-cols-2">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-[20px]">
            <iframe
              src={mapEmbedUrl}
              title="Olongapo City Map"
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <h1 className="font-inter text-3xl font-bold text-[#FFF] sm:text-4xl lg:text-[40px]">
            OLONGAPO CITY MAP
          </h1>
        </div>
      </main>
    </div>
  );
}
