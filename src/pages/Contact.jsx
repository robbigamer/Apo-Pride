import Navbar from "../components/Navbar";

const contacts = [
  { title: "City Hall Olongapo", numbers: ["222-2565", "611-4800"] },
  { title: "DRRMO / OLONGAPO Rescue", numbers: ["0998-593-7446"] },
  { title: "Fire & Rescue", numbers: ["223-1415"] },
  { title: "Disaster Management Office", numbers: ["0998-536-7121"] },
  { title: "Philippine RedCross", numbers: ["0917-889-2783", "222-2181"] },
  { title: "OCPO", numbers: ["0919-245-0666"] },
];

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFF]">
      <Navbar active="CONTACT US" />

      <main className="relative flex flex-1 overflow-hidden">
        <img
          src="/assets/spots/olongapo-city.jpg"
          alt="Olongapo City"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(60,21,21,0.76)]" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-8 sm:py-12">
          <div className="flex flex-col gap-4">
            <h1 className="font-inter text-4xl font-bold text-[#FFF] sm:text-5xl">
              Emergnecy Contacts
            </h1>
            <p className="max-w-3xl font-iosevkaCharonMono text-xl font-light text-[#FFF] sm:text-[32px]">
              Here are the important officess and hotlines in Olongapo City that
              you may contact for assistance and inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contacts.map((contact) => (
              <div
                key={contact.title}
                className="flex min-h-[352px] flex-col gap-4 rounded-[51px] bg-[rgba(121,72,70,0.82)] p-8"
              >
                <h2 className="font-iosevkaCharonMono text-2xl font-light text-[#FFF] sm:text-[32px]">
                  {contact.title}
                </h2>
                {contact.numbers.map((number) => (
                  <p
                    key={number}
                    className="font-iosevkaCharonMono text-2xl font-light text-[#FFF] sm:text-[32px]"
                  >
                    {number}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="rounded-[20px] bg-[rgba(50,81,46,0.93)] p-6 sm:p-8">
            <h2 className="font-inter text-2xl font-semibold text-[#FFF] sm:text-[32px]">
              Need Imediate Help?
            </h2>
            <p className="mt-2 font-iosevkaCharonMono text-xl font-light text-[#FFF] sm:text-[32px]">
              for life threatening emergencies, please call 911 or visit the
              nearest emergency center.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
